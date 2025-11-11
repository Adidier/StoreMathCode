import { fetchServicios } from "@/lib/data";
import Image from "next/image";

export  async function SpecialProductBanner({ title = "Productos Especiales"}) {
  const servicios = await fetchServicios();
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md my-4 flex flex-row justify-items-center w-2/4 overflow-x-scroll gap-4">
      {
        servicios.data.map((item) => (
          <div key={item.id} className="flex flex-col bg-gray-50 min-w-40 rounded-b-md justify-items-center shadow hover:shadow-md">
            <Image
              src={item.images[0]}
              alt={item.name}
              width={300}
              height={300}
              className="object-cover rounded-t-md mb-2" />
            <div className="h-full p-0.5">
              <p className="text-md font-bold">{item.name}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
