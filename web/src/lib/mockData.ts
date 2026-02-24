export interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: number;
  title: string;
  progress: number;
  description: string;
  instructor: string;
  lessons: Lesson[];
}

export const mockCourses: Course[] = [
  {
    id: 1,
    title: "AI Fundamentals",
    progress: 60,
    description: "Learn the core concepts of Artificial Intelligence, including search algorithms, knowledge representation, and basic reasoning.",
    instructor: "Andrew Ng",
    lessons: [
      { id: 101, title: "Introduction to AI", duration: "10:00", completed: true },
      { id: 102, title: "History of AI", duration: "15:30", completed: true },
      { id: 103, title: "Intelligent Agents", duration: "20:45", completed: true },
      { id: 104, title: "Problem Solving by Search", duration: "25:00", completed: false },
      { id: 105, title: "Adversarial Search", duration: "18:20", completed: false },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    progress: 20,
    description: "An introduction to the fundamental algorithms of Machine Learning, covering supervised and unsupervised learning.",
    instructor: "Fei-Fei Li",
    lessons: [
      { id: 201, title: "What is Machine Learning?", duration: "12:15", completed: true },
      { id: 202, title: "Linear Regression", duration: "30:00", completed: false },
      { id: 203, title: "Logistic Regression", duration: "28:40", completed: false },
      { id: 204, title: "Decision Trees", duration: "22:10", completed: false },
      { id: 205, title: "Clustering Algorithms", duration: "25:55", completed: false },
    ],
  },
  {
    id: 3,
    title: "React for Beginners",
    progress: 90,
    description: "Master the foundations of React to build interactive user interfaces with components and state.",
    instructor: "Dan Abramov",
    lessons: [
      { id: 301, title: "Hello World in React", duration: "05:00", completed: true },
      { id: 302, title: "JSX Syntax", duration: "14:20", completed: true },
      { id: 303, title: "Components and Props", duration: "21:10", completed: true },
      { id: 304, title: "State and Lifecycle", duration: "26:30", completed: true },
      { id: 305, title: "Handling Events", duration: "18:45", completed: true },
      { id: 306, title: "Conditional Rendering", duration: "15:00", completed: true },
      { id: 307, title: "Lists and Keys", duration: "19:20", completed: true },
      { id: 308, title: "Forms in React", duration: "24:15", completed: true },
      { id: 309, title: "Lifting State Up", duration: "22:00", completed: true },
      { id: 310, title: "Composition vs Inheritance", duration: "16:50", completed: false },
    ],
  },
];

// Simulate API delay
export const fetchCourses = async (): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCourses), 200);
  });
};

export const fetchCourseById = async (id: number): Promise<Course | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const course = mockCourses.find((c) => c.id === id);
      resolve(course);
    }, 150);
  });
};
