import { getProducts } from "@/app/service/products";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getProducts();

  return NextResponse.json({ res });
}
