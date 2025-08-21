import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = dbConnect(collectionNameObj.productCollection);
    const products = await productsCollection.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const productData = await req.json();
    const productsCollection = dbConnect(collectionNameObj.productCollection);
    const result = await productsCollection.insertOne(productData);
    return NextResponse.json({ message: "Product added successfully", result });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
