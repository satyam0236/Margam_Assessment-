"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Compass, BookOpen, Settings } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Explore", href: "#", icon: Compass },
    { name: "My Learning", href: "#", icon: BookOpen },
    { name: "Settings", href: "#", icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 min-h-[calc(100vh-4rem)] p-4">
      <div className="space-y-1 mt-6 flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl text-white">
          <h4 className="font-semibold text-sm mb-1">Upgrade to Pro</h4>
          <p className="text-xs text-blue-100 mb-3">Get access to all courses and certificates.</p>
          <button className="w-full bg-white text-blue-600 font-medium text-xs py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
