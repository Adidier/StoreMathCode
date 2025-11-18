'use client';

import { signOut, fetchAuthSession } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserControls = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchAuthSession().then(_session => setSession(_session)).catch((err) => {
      console.log("No user session found.", err);
    });
  }, []);

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      setSession(null);
      router.reload();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-1.5 rounded-lg hover:text-amber-400">
      {
        session !== null && session.tokens !== undefined ? (
          <div className="flex flex-row gap-2">
            {/* <p>Welcome, User!</p> */}
            <button type="button" onClick={(e) => handleSignout(e)}>Sign Out</button>
          </div>
        ) : (
          <Link href="/login" className="p-1.5 rounded-lg hover:text-amber-400">Log In</Link>
        )
      }
    </div>
  )
}

export default UserControls;