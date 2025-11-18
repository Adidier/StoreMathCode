'use client';

import { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import clsx from 'clsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    hasError: false,
    errorMessage: ""
  });

  const login = async () => {
    setLoading(true);
    try {
      const { nextStep } = await signIn({
        username: email,
        password: password,
      });

      if (nextStep.signInStep === 'DONE') {
        window.location.href = '/';
      }
    } catch (err) {
      // console.log("Error", err.message, err.type);
      setLoading(false);
      setError({
        hasError: true,
        errorMessage: err.message
      });
    }
  }

  const handleOnClick = async (e) => {
    e.preventDefault();
    await login()
  }

  const handleReturnKeyDown = async (e) => {
    if (e.key === 'Enter') {
      await login();
    }
  }

  return (
    <>
      <main className="grid place-items-center bg-gray-100">
        <div className='w-1/3 bg-gray-50 rounded-md shadow-md'>
          <header className='p-10 pb-2 font-bold text-xl'>
            Iniciar Sesion
          </header>
          {error.hasError && error.errorMessage === "Incorrect username or password."
            ?
            <p className='p-10 py-2 text-xl italic'>Correo o contraseña incorrectos</p>
            :
            null
          }
          <form className="flex flex-col gap-3 p-10 pt-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-md font-bold text-gray-700">Email</label>
              <input
                id="email"
                type="text"
                required
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleReturnKeyDown}
                className="border rounded-sm border-gray-300 min-h-8 p-2 text-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-md font-bold text-gray-700">Contraseña</label>
              <input
                id="password"
                type="password"
                required
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-sm border-gray-300 min-h-8 p-2 text-md" />
            </div>
            <button
              disabled={loading}
              onClick={(e) => handleOnClick(e)}
              className={clsx("bg-black text-gray-50 font-bold px-4 py-2 max-w-40", loading && "bg-gray-400")}>
              {loading ? 'Cargando...' : 'Iniciar Sesion'}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
