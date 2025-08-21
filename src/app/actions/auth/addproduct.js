"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const addProduct = async (productData) => {
  const productCollection = dbConnect(collectionNameObj.productCollection);
  const result = await productCollection.insertOne(productData);
  return result;
};
