"use client";

import React from "react";
import Link from "next/link";
import { Course } from "@/lib/mockData";
import { BookOpen } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 line-clamp-1">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            by {course.instructor}
          </p>
        </div>
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-6 flex-grow">
        {course.description}
      </p>

      <div className="mt-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progress
          </span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {course.progress}%
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <Link
          href={`/course/${course.id}`}
          className="block w-full text-center py-2 px-4 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-colors border border-gray-200 dark:border-gray-700"
        >
          {course.progress === 0 ? "Start Course" : "Continue"}
        </Link>
      </div>
    </div>
  );
}
