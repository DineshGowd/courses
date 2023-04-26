import { connection, find } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await connection.promise().query("INSERT INTO blog (`id`, `title`,`description`,`imageurl`,`userId`,`category`) VALUE (15,'good','best','best',2,'best') ")
    .then(([rows, fields]) => {
      return rows;
    })
    .catch(console.log)
  console.log(data);
  return NextResponse.json({ data })
}

