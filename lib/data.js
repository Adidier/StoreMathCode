import { stripe } from "./stripe";

function formatAmountForDisplay(amount, currency = "MXN") {
  let numberFormat = new Intl.NumberFormat(["es-MX"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(amount);
}

export async function fetchProductos() {
  try {
    const productos = await stripe.products.search({
      query: 'active:\'true\' AND metadata[\'isProducto\']:\'true\'',
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
      query: 'active:\'true\' AND -metadata[\'isProducto\']:\'true\'',
    });
    return servicios;
  } catch (error) {
    console.log("Stripe error", error.message);
    return null;
  }
}

export async function fetchByQuery(query) {
  try {
    const results = await stripe.products.search({
      query: `active:'true' AND name~'${query}'`,
    });
    return results;
  } catch (error) {
    console.log("Stripe error", error.message);
    return null;
  }
}

export async function fetchPrice(priceId) {
  try {
    const price = await stripe.prices.retrieve(priceId);
    return formatAmountForDisplay(price.unit_amount / 100) // Divide por 100 porque unit_amount está en centavos
  } catch (err) {
    console.log("Stripe error", err.message)
    return "N/A"
  }
}