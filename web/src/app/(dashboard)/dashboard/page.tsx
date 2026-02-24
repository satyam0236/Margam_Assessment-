"use client";

import React, { useEffect, useState } from "react";
import { fetchCourses, Course } from "@/lib/mockData";
import { CourseCard } from "@/components/CourseCard";
import { CourseCardSkeleton } from "@/components/ui/Skeleton";
import { Search } from "lucide-react";

export default function DashboardPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to load courses:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Welcome back!
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Pick up where you left off or start something new.
          </p>
        </div>
      </div>

      <div className="relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for courses or instructors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Your Learning Path
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
           <div className="text-center py-10 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400">No courses found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear Search
              </button>
           </div>
        )}
      </div>
    </div>
  );
}
