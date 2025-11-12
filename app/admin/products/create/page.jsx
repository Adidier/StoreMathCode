"use client";

import { useFormStatus, useFormState } from "react-dom";
import { createProduct } from "@/lib/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="rounded bg-green-400 text-white p-1.5 font-bold shadow max-w-1/6"
    >
      {
        pending ? "..." : "CREAR"
      }
    </button>
  )
}

export default function CreateProduct() {
  const [state, formAction, pending] = useFormState(
    createProduct,
    initialState,
  );
  return (
    <section>
      <header className="pb-5">
        <h1 className="text-3xl font-bold text-gray-800">
          Crear un nuevo producto
        </h1>
      </header>
      <form
        action={formAction}
        className="p-5 rounded shadow-md bg-gray-100 flex flex-col gap-5 place-self-center w-1/3"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="product_name" className="text-xl text-gray-700">
            Nombre del producto
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            required
            className="bg-gray-50 border border-gray-300 rounded-xs h-8  pl-1.5 pr-1.5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="product_description"
            className="text-xl text-gray-700"
          >
            Descripcion del producto
          </label>
          <textarea
            id="product_description"
            name="product_description"
            className="bg-gray-50 border-gray-300 border rounded-xs p-2"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="product_price" className="text-xl text-gray-700">
            Precio del producto
          </label>
          <div className="flex flex-row gap-2 items-center">
            <div className="font-bold text-xl">MX $</div>
            <input
              type="number"
              id="product_price"
              name="product_price"
              required
              className="bg-gray-50 border-gray-300 border rounded-xs h-8 pl-1.5 pr-1.5"
            />
          </div>
        </div>
        <SubmitButton />
      </form>
      {state?.message && (
        <div className="w-1/3 place-self-center m-10 p-7 rounded-md bg-red-500 text-gray-50 font-bold text-xl shadow-md">
          {state.message}
        </div>
      )}
    </section>
  );
}
