"use server";

import { redirect } from "next/navigation";
import { stripe } from "./stripe";

export async function createProduct(prevState, formData) {
  const product_name = formData.get("product_name");
  const product_description = formData.get("product_description");
  const price_data = {
    currency: "MXN",
    unit_amount: formData.get("product_price") * 100, // User inputs in pesos, stripe expects cents of pesos
  };

  try {
    const product = await stripe.products.create({
      name: product_name,
      description: product_description,
      default_price_data: price_data,
    });
  } catch (err) {
    console.log("Stripe error", err.message);
    return {
      message: "Ha ocurrido un error al intentar dar de alta este producto ",
    };
  }

  redirect(`/admin/products`)
}
