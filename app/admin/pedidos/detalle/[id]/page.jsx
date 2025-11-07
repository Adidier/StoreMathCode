import { getMaterial, getCustomer, getPedido } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const mockProducto = {
  id: 123,
  stripeId: "abcde12345",
  materials: [
    { id: "1234", amount: "1" },
    { id: "5678", amount: "2" },
  ],
}

export default async function PedidoDetalle({ params }) {
  const { id } = await params;
  const pedido = getPedido(id);

  if (pedido === undefined) {
    return (
      <div>
        No hay pedido
      </div>
    )
  } else {
    const customer = getCustomer(pedido.customerId);
    const materialInfo = mockProducto.materials.map((material) => {
      return { ...getMaterial(material.id), amount: material.amount }
    })

    const totalNeto = materialInfo.reduce((accumulator, material) => {
      return accumulator + (material.cost * material.amount)
    }, 0)
    console.log("Total NETO", totalNeto);

    return (
      <section className="place-self-center w-1/2 shadow-md m-10 flex flex-col">
        <header className="bg-gray-200 rounded-t-md p-3">
          <h1 className="font-bold text-4xl">Pedido {id}</h1>
        </header>
        <div className="p-2 bg-gray-100">
          <div className="text-xl font-bold">
            Cliente
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-bold">{customer.name}</p>
            <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="tel:+527711072336">
              <Image src="/phone.svg" alt="Logo" width={20} height={20} className="" />
              {customer.phone}
            </Link>
            <Link className="rounded-lg flex flex-wrap gap-1 items-center" href="mailto:flashbacksuc1@gmail.com">
              <Image src="/mail.svg" alt="Logo" width={20} height={20} className="" />
              {customer.email}
            </Link>
          </div>
        </div>
        <div className="p-2 bg-gray-100">
          <div className="text-xl font-bold">
            Materiales
          </div>
          <table className="rounded-md shadow-xs border-gray-200 place-self-center text-left w-full">
            <thead>
              <tr>
                <th className="p-2 border-b border-gray-100 bg-gray-200">
                  Material
                </th>
                <th className="p-2 border-b border-gray-100 bg-gray-200">
                  Cantidad
                </th>
                <th className="p-2 border-b border-gray-100 bg-gray-200">
                  Costo total
                </th>
              </tr>
            </thead>
            <tbody>
              {
                materialInfo.map((material) => {
                  return (
                    <tr key={material.id}>
                      <td className="p-2 border-b border-gray-200">
                        {material.name}
                      </td>
                      <td className="p-2 border-b border-gray-200">
                        {material.amount}
                      </td>
                      <td className="p-2 border-b border-gray-200">
                        {material.cost * material.amount}
                      </td>
                    </tr>
                  )
                })
              }
              <tr>
                <td className="p-2 border-b border-gray-200 font-bold" colSpan={2}>TOTAL</td>
                <td className="p-2 border-b border-gray-200">{totalNeto} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
