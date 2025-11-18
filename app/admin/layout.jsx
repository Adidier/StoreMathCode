'use client';

import { signOut, fetchAuthSession } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
  const [session, setSession] = useState(null);
  const [userGroups, setUserGroups] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchAuthSession().then((_session) => {
      setSession(_session);
      setUserGroups(_session.tokens.accessToken.payload["cognito:groups"] || []);
    }).catch((err) => {
      console.log("No user session found.", err);
    });
  }, []);

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      router.push("/");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {
        session === null
          ?
          <>
            <main className="grid place-items-center bg-gray-100 h-screen">
              <div className="bg-gray-50 rounded-md w-1/3 shadow-md p-10 grid place-items-center">
                <p className="font-bold text-3xl">Cargando sesion</p>
              </div>
            </main>
          </>
          :
          session.tokens === undefined
            ?
            <>
              <main className="grid place-items-center bg-gray-100 h-screen">
                <div className="bg-gray-50 rounded-md w-1/3 shadow-md p-10 grid grid-rows-2 gap-5 place-items-center">
                  <p className="font-bold text-3xl">Usuario no autorizado</p>
                  <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-800 text-gray-200 font-bold hover:bg-gray-700 hover:shadow-md transition-shadow" href="/login">Iniciar Sesion</Link>
                </div>
              </main>
            </>
            :
            userGroups.includes('ADMINS')
              ?
              <>
                <nav className="fixed top-0 left-0 h-full w-60 p-5 shadow-md bg-gray-100 flex flex-col gap-2">
                  <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-200 font-bold hover:shadow-md transition-shadow" href="/admin">Inicio</Link>
                  <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-200 font-bold hover:shadow-md transition-shadow" href="/admin/products">Productos</Link>
                  <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-200 font-bold hover:shadow-md transition-shadow" href="/admin/pedidos">Pedidos</Link>
                  <button className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-800 text-gray-200 font-bold hover:bg-gray-700 hover:shadow-md transition-shadow absolute bottom-2" onClick={(e) => handleSignout(e)}>Cerrar Sesion</button>
                </nav>
                <main className="ml-60 p-5 flex flex-col">
                  {children}
                </main>
              </>
              :
              <>
                <main className="grid place-items-center bg-gray-100 h-screen">
                  <div className="bg-gray-50 rounded-md w-1/3 shadow-md p-10 grid grid-rows-3 gap-5 place-items-center">
                    <p className="font-bold text-3xl">Usuario no autorizado</p>
                    <Link className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-800 text-gray-200 font-bold hover:bg-gray-700 hover:shadow-md transition-shadow" href="/">Regresar a la tienda</Link>
                    <button className="rounded-md shadow pl-5 pr-5 pt-1.5 pb-1.5 text-lg bg-gray-800 text-gray-200 font-bold hover:bg-gray-700 hover:shadow-md transition-shadow" onClick={(e) => handleSignout(e)}>Cerrar Sesion</button>
                  </div>
                </main>
              </>
      }
    </>
  )
}
