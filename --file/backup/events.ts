// /pages/api/events.ts
import { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/Lib/db";

interface EventData {
  date: string;
  time: string;
  description: string;
}

interface UpdateEventData {
  id: number;
  date?: string;
  time?: string;
  description?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case "GET":
        const events = await query("SELECT * FROM events ORDER BY date, time", []);
        res.status(200).json(events);
        break;

      case "POST":
        const { date, time, description }: EventData = req.body;
        console.log("Dados recebidos:", { date, time, description });

        if (!date || !time || !description) {
          res.status(400).json({ error: "Todos os campos são obrigatórios" });
          return;
        }

        await query(
          "INSERT INTO events (date, time, description) VALUES ($1, $2, $3)",
          [date, time, description]
        );
        res.status(201).json({ message: "Evento criado com sucesso" });
        break;

      case "PUT":
        const { id, ...updateData }: UpdateEventData = req.body;
        console.log("Atualizando evento:", { id, ...updateData });

        if (!id) {
          res.status(400).json({ error: "ID é obrigatório" });
          return;
        }

        await query(
          "UPDATE events SET date = $1, time = $2, description = $3 WHERE id = $4",
          [updateData.date, updateData.time, updateData.description, id]
        );
        res.status(200).json({ message: "Evento atualizado com sucesso" });
        break;

      case "DELETE":
        const { deleteId }: { deleteId: number } = req.body;
        console.log("Excluindo evento ID:", deleteId);

        if (!deleteId) {
          res.status(400).json({ error: "ID é obrigatório" });
          return;
        }

        await query("DELETE FROM events WHERE id = $1", [deleteId]);
        res.status(200).json({ message: "Evento excluído com sucesso" });
        break;

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error: any) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ error: error.message });
  }
}
