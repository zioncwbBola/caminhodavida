// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const getNeonClient = () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL não configurado.");
  }
  return neon(databaseUrl);
};

// GET: Retorna dados do usuário
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('id');
  if (!userId) {
    return NextResponse.json({ error: 'ID do usuário não fornecido.' }, { status: 400 });
  }

  try {
    const client = getNeonClient();
    const result = await client('SELECT * FROM users WHERE id = $1 AND deleted_at IS NULL', [userId]);
    if (result.length === 0) {
      return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 404 });
    }
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar dados do usuário.' }, { status: 500 });
  }
}

// POST: Cria um novo usuário
export async function POST(req: NextRequest) {
  try {
    const { name, email, consent } = await req.json();
    const client = getNeonClient();
    const result = await client(
      'INSERT INTO users (name, email, consent) VALUES ($1, $2, $3) RETURNING *',
      [name, email, consent]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar usuário.' }, { status: 500 });
  }
}

// PUT: Atualiza consentimento ou outros dados do usuário
export async function PUT(req: NextRequest) {
  try {
    const { id, consent, name, email } = await req.json();
    const client = getNeonClient();
    const result = await client(
      'UPDATE users SET name = $1, email = $2, consent = $3 WHERE id = $4 RETURNING *',
      [name, email, consent, id]
    );
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar dados do usuário.' }, { status: 500 });
  }
}

// DELETE: Marca o usuário como excluído (soft delete)
export async function DELETE(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('id');
  if (!userId) {
    return NextResponse.json({ error: 'ID do usuário não fornecido.' }, { status: 400 });
  }

  try {
    const client = getNeonClient();
    await client('UPDATE users SET deleted_at = NOW() WHERE id = $1', [userId]);
    return NextResponse.json({ message: `Usuário com id ${userId} marcado como excluído.` });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao excluir usuário.' }, { status: 500 });
  }
}
