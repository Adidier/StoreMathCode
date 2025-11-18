'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUp, confirmSignUp, signOut } from 'aws-amplify/auth';
import clsx from 'clsx';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    hasError: false,
    errorMessage: ""
  });
  const [isWaitingConfirmation, setIsWaitingConfirmation] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: email,
        password: password,
        options: {
          userAttributes: {
            email: email,
          },
        }
      });
      if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        setIsWaitingConfirmation(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const handleConfirmSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: email,
        confirmationCode: confirmationCode
      });

      if (nextStep.signUpStep === 'DONE') {
        await signOut();
        router.push('/')
      }
    } catch (err) {
      console.error('Error signing up:', err);
      setLoading(false);
    }
  }

  if (isWaitingConfirmation) {
    return (
      <>
        <main className="grid place-items-center bg-gray-100">
          <div className='w-1/3 bg-gray-50 rounded-md shadow-md'>
            <p className='p-10 pb-2 text-xl italic'>Un codigo de confirmacion ha sido enviado a su correo</p>
            <form className="flex flex-col gap-3 p-10 pt-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="confirmationCode" className="text-xl font-medium">Código</label>
                <input
                  id="confirmationCode"
                  type="text"
                  className="border rounded-sm border-gray-300 min-h-8 p-2 text-xl font-bold"
                  required
                  autoComplete='off'
                  onChange={(e) => setConfirmationCode(e.target.value)} />
              </div>
              <button
                onClick={(e) => handleConfirmSignUp(e)}
                className={clsx("bg-black text-gray-50 font-bold px-4 py-2 max-w-40", loading && "bg-gray-400")}>
                {loading ? 'Verificando...' : 'Confirmar'}
              </button>
            </form>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className="grid place-items-center bg-gray-100">
          <div className='w-1/3 bg-gray-50 rounded-md shadow-md'>
            <header className='p-10 pb-2 font-bold text-xl'>
              Registrate
            </header>
            <form className="flex flex-col gap-3 p-10 pt-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xl font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="border rounded-sm border-gray-300 min-h-8 p-2 text-md"
                  required
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-xl font-medium">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  className="border rounded-sm border-gray-300 min-h-8 p-2 text-md"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => handleSignUp(e)}
                className={clsx("bg-black text-gray-50 font-bold px-4 py-2 max-w-40", loading && "bg-gray-400")}>
                {loading ? 'Cargando...' : 'Registrarse'}
              </button>
            </form>
          </div>
        </main>
      </>
    );
  }

}
