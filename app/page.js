"use client";

import CategoryList from "@/components/Home/CategoryList";
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
    <div className="grid grid-cols-1md:grid-cols-4">
      <div>
        <CategoryList />
      </div>
      <div className="bg-blue-300 col-span-3"></div>
    </div>
  );
}
