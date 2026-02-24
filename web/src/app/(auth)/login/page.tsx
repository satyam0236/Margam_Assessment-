"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake Authentication: Redirect to dashboard on any submission
    if (email && password) {
      document.cookie = "auth-token=true; path=/;";
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-8 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-500" />
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Welcome to AI Learner
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign in to your learning dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          Any email/password will work for this demo.
        </div>
      </div>
    </div>
  );
}
