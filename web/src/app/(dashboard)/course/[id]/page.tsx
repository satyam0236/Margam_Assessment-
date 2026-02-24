"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchCourseById, Course } from "@/lib/mockData";
import { LessonList } from "@/components/LessonList";
import { Skeleton } from "@/components/ui/Skeleton";
import { ArrowLeft, BookOpen, Clock, User } from "lucide-react";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      const idStr = params?.id;
      if (!idStr || Array.isArray(idStr)) return;

      const courseId = parseInt(idStr, 10);
      try {
        const data = await fetchCourseById(courseId);
        if (data) {
          setCourse(data);
        }
      } catch (error) {
        console.error("Failed to load course:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [params]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
        <Skeleton className="h-8 w-24 rounded-full" />
        <div>
           <Skeleton className="h-10 w-3/4 mb-4" />
           <Skeleton className="h-6 w-1/4 mb-6" />
           <Skeleton className="h-4 w-full mb-2" />
           <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="space-y-4">
           <Skeleton className="h-20 w-full rounded-xl" />
           <Skeleton className="h-16 w-full rounded-xl" />
           <Skeleton className="h-16 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Course not found</h2>
        <button
          onClick={() => router.push('/dashboard')}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const totalLessons = course.lessons.length;
  const totalDuration = "Varies"; // Can be calculated from lessons if needed

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <button
        onClick={() => router.push('/dashboard')}
        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </button>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-grow space-y-4">
             <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="h-3.5 w-3.5" />
                Course
             </div>

             <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
               {course.title}
             </h1>

             <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
               {course.description}
             </p>

             <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-100 dark:border-gray-800 mt-6 !mb-2">
               <div className="flex items-center gap-2">
                 <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-800">
                   <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Instructor</p>
                   <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{course.instructor}</p>
                 </div>
               </div>

               <div className="flex items-center gap-2">
                 <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-800">
                   <BookOpen className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Lessons</p>
                   <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{totalLessons} Lessons</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Course Content</h2>
        <LessonList initialLessons={course.lessons} />
      </div>
    </div>
  );
}
