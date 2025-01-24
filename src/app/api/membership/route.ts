import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// Função para obter o cliente do Neon
const getNeonClient = () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL não configurado.");
  }
  return neon(databaseUrl);
};

// GET: Listar todos os pedidos
export async function GET() {
  try {
    const client = getNeonClient();
    const result = await client('SELECT * FROM membership_requests ORDER BY created_at DESC');
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar pedidos de intenção.' }, { status: 500 });
  }
}

// POST: Criar um novo pedido
export async function POST(req: NextRequest) {
  try {
    const { name, contact, intention, isForDiscipleship } = await req.json();
    const client = getNeonClient();
    const result = await client(
      'INSERT INTO membership_requests (name, contact, intention, is_for_discipleship) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, contact, intention, isForDiscipleship]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar pedido de intenção.' }, { status: 500 });
  }
}

// PUT: Atualizar um pedido existente
export async function PUT(req: NextRequest) {
  try {
    const { id, name, contact, intention, isForDiscipleship } = await req.json();
    const client = getNeonClient();
    const result = await client(
      'UPDATE membership_requests SET name = $1, contact = $2, intention = $3, is_for_discipleship = $4 WHERE id = $5 RETURNING *',
      [name, contact, intention, isForDiscipleship, id]
    );
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar pedido de intenção.' }, { status: 500 });
  }
}

// DELETE: Excluir um pedido
export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID do pedido não fornecido.' }, { status: 400 });
    }
    const client = getNeonClient();
    await client('DELETE FROM membership_requests WHERE id = $1', [id]);
    return NextResponse.json({ message: `Pedido com id ${id} excluído com sucesso.` });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao excluir pedido de intenção.' }, { status: 500 });
  }
}
