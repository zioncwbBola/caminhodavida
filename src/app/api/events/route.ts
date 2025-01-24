// src/app/api/events/route.ts

import { NextResponse } from 'next/server';
import { query } from '@/Lib/db'; // Correct path to your database query utility

export async function GET() {
  try {
    const events = await query("SELECT * FROM events ORDER BY date, time", []);
    return NextResponse.json(events);  // Return JSON response
  } catch (error: any) {
    console.error("Error fetching events:", error);
    return NextResponse.error();  // Return error response
  }
}

export async function POST(request: Request) {
  try {
    const { date, time, description } = await request.json();

    if (!date || !time || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await query("INSERT INTO events (date, time, description) VALUES ($1, $2, $3)", [date, time, description]);
    return NextResponse.json({ message: "Event created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, date, time, description } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await query("UPDATE events SET date = $1, time = $2, description = $3 WHERE id = $4", [date, time, description, id]);
    return NextResponse.json({ message: "Event updated successfully" });
  } catch (error: any) {
    console.error("Error updating event:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { deleteId } = await request.json();

    if (!deleteId) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await query("DELETE FROM events WHERE id = $1", [deleteId]);
    return NextResponse.json({ message: "Event deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting event:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
