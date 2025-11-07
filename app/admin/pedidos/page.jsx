import { fetchPedidos } from "@/lib/data"
import { NavButton } from "@/app/ui/NavButton";

export default async function Pedidos() {
  const pedidos = await fetchPedidos();
  if (pedidos === null) {
    return (
      <>
        No hay pedidos
      </>
    );
  } else {
    const tableHeaders = [
      "ID Pedido",
      "Cliente",
      "Producto",
      "firstPaymentId",
      "secondPaymentId",
      ""
    ]
    return (
      <>
        <header>
          <h1 className="text-4xl font-bold text-gray-800">Pedidos</h1>
        </header>
        <table className="w-10/12 place-self-center rounded-md shadow-md m-10 text-left">
          <thead>
            <tr>
              {
                tableHeaders.map((header) => (
                  <th key={header} className="p-4 border-b border-gray-100 bg-gray-50"> {header} </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              pedidos.map((pedido) => {
                if (!pedido.pedidoCompleted) {
                  return (
                    <tr key={pedido.pedidoId}>
                      <td className="p-4 border-b border-gray-50">
                        {pedido.pedidoId}
                      </td>
                      <td className="p-4 border-b border-gray-50">
                        {pedido.customer}
                      </td>
                      <td className="p-4 border-b border-gray-50">
                        {pedido.producto}
                      </td>
                      <td className="p-4 border-b border-gray-50">
                        {pedido.firstPaymentId}
                      </td>
                      <td className="p-4 border-b border-gray-50">
                        {pedido.secondPaymentId}
                      </td>
                      <td className="p-4 border-b border-gray-50">
                        <NavButton route={`/admin/pedidos/detalle/${pedido.pedidoId}`}
                        >Ver detalle </NavButton>
                      </td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </table>
      </>
    );
  }
}
