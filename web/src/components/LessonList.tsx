"use client";

import React, { useState } from "react";
import { Lesson } from "@/lib/mockData";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface LessonListProps {
  initialLessons: Lesson[];
}

export function LessonList({ initialLessons }: LessonListProps) {
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);

  const toggleLesson = (id: number) => {
    setLessons(lessons.map(lesson =>
      lesson.id === id ? { ...lesson, completed: !lesson.completed } : lesson
    ));
  };

  const completedCount = lessons.filter(l => l.completed).length;
  const progressPercentage = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Course Progress</h3>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {progressPercentage}% ({completedCount}/{lessons.length})
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            onClick={() => toggleLesson(lesson.id)}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
              lesson.completed
                ? "bg-gray-50 border-gray-200 dark:bg-gray-900/50 dark:border-gray-800"
                : "bg-white border-gray-200 hover:border-blue-300 dark:bg-gray-900 dark:border-gray-800 dark:hover:border-blue-700"
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                className={`flex-shrink-0 transition-colors ${
                  lesson.completed ? "text-green-500 dark:text-green-400" : "text-gray-300 dark:text-gray-600 hover:text-blue-500"
                }`}
              >
                {lesson.completed ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
              </button>

              <div>
                <p className={`font-medium ${lesson.completed ? "text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-gray-100"}`}>
                  <span className="text-gray-400 text-sm mr-2">{index + 1}.</span>
                  {lesson.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span>{lesson.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
