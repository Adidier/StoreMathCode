import { fetchPrice } from "@/lib/data"

function getDate(timestamp) {
    const months = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ]

    const date = new Date(timestamp * 1000);
    return `${months[date.getMonth()]} ${date.getDate()}`
}

export function TableView({ data }) {
    const tableHeaders = [
        "Nombre",
        "Precio",
        "Creado",
        "Modificado"
    ]

    return (
        <table className="w-10/12 place-self-center rounded-md shadow-md p-10 text-left">
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
                    data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className="p-4 border-b border-gray-50">
                                    {item.name}
                                </td>
                                <td className="p-4 border-b border-gray-50">
                                    {fetchPrice(item.default_price)}
                                </td>
                                <td className="p-4 border-b border-gray-50">
                                    {getDate(item.created)}
                                </td>
                                <td className="p-4 border-b border-gray-50">
                                    {getDate(item.updated)}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
