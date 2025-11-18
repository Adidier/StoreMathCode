'use client';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { signIn } from 'aws-amplify/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const { nextStep } = await signIn({
        username: email,
        password: password,
      });

      if (nextStep.signInStep === 'DONE') {
         window.location.href = '/';
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <main className="grid place-items-center bg-gray-100">
        <div className='w-1/3 bg-gray-50 rounded-md shadow-md'>
          <header className='p-10 pb-2 font-bold text-xl'>
            Iniciar Sesion
          </header>
          <form className="flex flex-col gap-3 p-10 pt-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-md font-bold text-gray-700">Email</label>
              <input id="email" type="text" className="border rounded-sm border-gray-300 min-h-8 p-2 text-md" required
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-md font-bold text-gray-700">Contraseña</label>
              <input id="password" type="password" className="border rounded-sm border-gray-300 min-h-8 p-2 text-md" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={(e) => handleLogIn(e)} className="bg-black text-gray-50 font-bold px-4 py-2 rounded-md hover:bg-gray-400 max-w-40">Iniciar Sesion</button>
          </form>
        </div>
      </main>
    </>
  )
}
