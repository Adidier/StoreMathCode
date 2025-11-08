import { stripe } from "./stripe";

export async function fetchProductos() {
  try {
    const productos = await stripe.products.search({
      query: 'active:\'true\' AND metadata[\'isService\']:\'false\'',
    });
    return productos;
  } catch (error) {
    console.log("Stripe error", error.message);
    return null;
  }
}

export async function fetchServicios() {
  try {
    const servicios = await stripe.products.search({
      query: 'active:\'true\' AND metadata[\'isService\']:\'true\'',
    });
    return servicios;
  } catch (error) {
console.log("Stripe error", error.message);
    return null;
  }
}

export async function fetchPrice(priceId) {
  try {
    const price = await stripe.prices.retrieve(priceId);
    return price.unit_amount
  } catch (err) {
    console.log(err)
    return "NA"
  }
}