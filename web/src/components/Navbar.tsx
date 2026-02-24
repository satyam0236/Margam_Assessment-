"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { BookOpen, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold tracking-tight">AI Learner</span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            title="Log Out"
            className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors group"
          >
            <User className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:hidden" />
            <LogOut className="h-4 w-4 text-red-600 dark:text-red-400 hidden group-hover:block" />
          </button>
        </div>
      </div>
    </nav>
  );
}
