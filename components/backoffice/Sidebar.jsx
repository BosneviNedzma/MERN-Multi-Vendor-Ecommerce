import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/epijaca.png";
import { LayoutGrid } from "lucide-react";

export default function Sidebar() {
  return (
    <div
      className="dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 
    dark:text-slate-50 fixed left-0 top-0 shadow-md"
    >
      <Link className="px-6 py-4" href="#">
        <Image src={logo} alt="ePijaca logo" className="w-1/2" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14 px-6 py-4">
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-2 border-green-600"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
