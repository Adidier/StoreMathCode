import { stripe } from "./stripe";

const mock_TablaMateriales = [
  { id: "1234", name: "Lamina de aluminio 30x30cm", cost: "100" },
  { id: "5678", name: "Solventes (L)", cost: "200" },
  { id: "9101", name: "Pintura acrílica 1L", cost: "150" },
  { id: "1121", name: "Brocha 2 pulgadas", cost: "80" },
  { id: "3141", name: "Lija grano 120", cost: "50" }
];

const mock_Customers = [
  { id: "cust_10001", name: "Alice Moreno", email: "alice.moreno@example.com", phone: "+52 55 2345 6789", joinedAt: "2024-03-12" },
  { id: "cust_10002", name: "Bruno García", email: "bruno.garcia@example.com", phone: "+52 81 9876 5432", joinedAt: "2024-07-25" },
  { id: "cust_10003", name: "Clara Díaz", email: "clara.diaz@example.com", phone: "+52 33 1234 5678", joinedAt: "2024-11-02" },
  { id: "cust_10004", name: "David Herrera", email: "david.herrera@example.com", phone: "+52 55 7654 3210", joinedAt: "2025-01-15" },
  { id: "cust_10005", name: "Elena Torres", email: "elena.torres@example.com", phone: "+52 22 3456 7890", joinedAt: "2025-04-09" },
  { id: "cust_10006", name: "Felipe Cruz", email: "felipe.cruz@example.com", phone: "+52 44 6789 0123", joinedAt: "2025-06-21" },
  { id: "cust_10007", name: "Gabriela Ríos", email: "gabriela.rios@example.com", phone: "+52 81 5432 1098", joinedAt: "2025-09-10" }
];

const mock_Pedidos = [
  {
    pedidoId: "pedido_001",
    customerId: "cust_10001",
    productId: "prod_TKj03omIoXsUFr",
    productQuantity: 1,
    firstPaymentId: "pay_30001",
    secondPaymentId: "pay_30002",
    pedidoCompleted: true
  },
  {
    pedidoId: "pedido_002",
    customerId: "cust_10002",
    productId: "prod_TKirC4snOjXjgY",
    productQuantity: 1,
    firstPaymentId: "pay_30003",
    secondPaymentId: "pay_30004",
    pedidoCompleted: true
  },
  {
    pedidoId: "pedido_003",
    customerId: "cust_10003",
    productId: "prod_TEfu8qtKXESHpp",
    productQuantity: 1,
    firstPaymentId: "pay_30005",
    secondPaymentId: "pay_30006",
    pedidoCompleted: false
  },
  {
    pedidoId: "pedido_004",
    customerId: "cust_10004",
    productId: "prod_TEeB7p8GM8v5FL",
    productQuantity: 8,
    firstPaymentId: "pay_30007",
    secondPaymentId: "pay_30008",
    pedidoCompleted: false
  },
  {
    pedidoId: "pedido_005",
    customerId: "cust_10005",
    productId: "prod_TEe67Hlvp5Ha7x",
    productQuantity: 2,
    firstPaymentId: "pay_30009",
    secondPaymentId: "pay_30010",
    pedidoCompleted: false
  },
];

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

export async function fetchStoreItems(active_only = true) {
  try {
    const items = await stripe.products.list();
    return items;
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

export async function fetchProduct(productId) {
  try {
    const product = await stripe.products.retrieve(productId);
    if (product === null) {
      console.log("Stripe error", err.message);
      return null;
    }
    return product;
  } catch (err) {
    console.log("Stripe error", err.message);
    return null;
  }
}

// In a real case here I would make a database query
export function getMaterial(materialId) {
  return mock_TablaMateriales.find((material) => material.id === materialId);
}

export function getCustomer(customerId) {
  return mock_Customers.find((customer) => customer.id === customerId);
}

export function getPedido(pedidoId) {
  return mock_Pedidos.find((pedido) => pedido.pedidoId === pedidoId);
}

// Here we would do a database query
export async function fetchPedidos() {
  return await Promise.all(mock_Pedidos.map(async (pedido) => {
    return { ...pedido, producto: (await fetchProduct(pedido.productId)).name, customer: getCustomer(pedido.customerId).name }
  }));
}
