import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/epijaca.png";
import {
  ExternalLink,
  LayoutGrid,
  Slack,
  Tractor,
  Truck,
  User,
  UserSquare2,
  Users2,
} from "lucide-react";

export default function Sidebar() {
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href:"/dashboard/customers"
    },
    {
      title: "Markets",
      icon: Truck,
      href:"/dashboard/markets"
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href:"/dashboard/farmers"
    },
    {
      title: "Orders",
      icon: Truck,
      href:"/dashboard/orders"
    },
    {
      title: "Our Staff",
      icon: User,
      href:"/dashboard/staff"
    },
    {
      title: "Settings",
      icon: LayoutGrid,
      href:"/dashboard/settings"
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href:"/"
    },
  ];
  return (
    <div
      className="dark:bg-slate-700 bg-white space-y-6 w-64 h-screen text-slate-800 
    dark:text-slate-50 fixed left-0 top-0 shadow-md"
    >
      <Link className="px-6 py-4" href="#">
        <Image src={logo} alt="ePijaca logo" className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <Slack />
          <span>Catalogue</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <Users2 />
          <span>Customers</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <Truck />
          <span>Markets</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <UserSquare2 />
          <span>Farmers</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <Tractor />
          <span>Orders</span>
          // cao ti mali
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
        >
          <User />
          <span>Our Staff</span>
        </Link>
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon
          return (
            <Link key={i}
              href={item.href}
              className="flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600"
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
