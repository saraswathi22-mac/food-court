"use client";

import CategoryList from "@/components/Home/CategoryList";
import GoogleMapsView from "@/components/Home/GoogleMapsView";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
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
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRating />
      </div>
      <div className="col-span-3">
        <GoogleMapsView />
      </div>
    </div>
  );
}
