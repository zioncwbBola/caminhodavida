// src/app/api/events/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const getNeonClient = () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL não configurado.");
  }
  return neon(databaseUrl);
};

// Lidar com os métodos GET, POST, PUT e DELETE
export async function GET() {
  try {
    const client = getNeonClient();
    const result = await client('SELECT * FROM events ORDER BY date, time');
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar eventos.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { date, time, description } = await req.json();
    const client = getNeonClient();
    const result = await client(
      'INSERT INTO events (date, time, description) VALUES ($1, $2, $3) RETURNING *',
      [date, time, description]
    );
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar evento.' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, date, time, description } = await req.json();
    const client = getNeonClient();
    const result = await client(
      'UPDATE events SET date = $1, time = $2, description = $3 WHERE id = $4 RETURNING *',
      [date, time, description, id]
    );
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar evento.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id');
    const client = getNeonClient();
    await client('DELETE FROM events WHERE id = $1', [id]);
    return NextResponse.json({ message: `Evento com id ${id} excluído com sucesso.` });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao excluir evento.' }, { status: 500 });
  }
}
