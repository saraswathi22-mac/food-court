"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);
  return (
    <div>
      <h2>Subscribe</h2>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
}
