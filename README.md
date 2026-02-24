# Margam_Assessment-

## Objective
A mini AI learning dashboard mimicking a comprehensive online education platform, built with modern web and mobile architecture requirements.

---

## Live Demo & Screenshots
**🚀 Vercel Deployment Link:** [https://margam-assessment.vercel.app/dashboard](https://margam-assessment.vercel.app/dashboard)
**💻 Public GitHub Repo:** [https://github.com/satyam0236/Margam_Assessment-](https://github.com/satyam0236/Margam_Assessment-)

### Web Application Views
<p align="center">
  <img src="screenshots/Web Login.png" width="48%" />
  <img src="screenshots/Web Dashboard.png" width="48%" />
  <img src="screenshots/Web Dashboard Light mood.png" width="48%" />
  <img src="screenshots/Web Course1.png" width="48%" />
</p>

### React Native Mobile Mockup
<p align="center">
  <img src="screenshots/Mobile Dashboard.jpg" width="40%" />
</p>

---

## What's Included?

The repository is divided into two distinct applications inside the root folder:

### 1. Web Application (`/web`)
A fully functional responsive dashboard built with **Next.js (App Router), React, and Tailwind CSS**.
- **Login Page**: A mock authentication screen that redirects you instantly to the `/dashboard`.
- **Dashboard**: Lists dummy courses fetched from an asynchronous mock data layer, featuring dark mode aware skeletons and instant search-filtering capabilities.
- **Dynamic Course Details**: Interactive lesson view tracking completed lessons locally to update a dynamic progress bar for the course.
- **Features**: Includes a persistent Dark/Light mode toggle respecting system preferences, dynamic navigation mapping, and polished skeleton loaders.

**How to run locally:**
```bash
cd web
npm install
npm run dev
```

### 2. Mobile Mockup (`/mobile`)
A **React Native CLI** project designed specifically to mirror the Dashboard Web Layout natively.
- Scaffolded using `@react-native-community/cli`, offering identical course cards, mock datasets, and active search layout translated to a native context.

**How to run locally:**
```bash
cd mobile
npm install
npx react-native run-android # or run-ios
```

---

## AI Usage & Workflows
This project was assembled progressively harnessing an AI Agent (Antigravity):
1. **Planning**: Initially established a precise file tree mapped directly to the task instructions (separated Next.js and React Native implementations).
2. **Contextual Awareness**: Kept UI tokens (lucide-react, Tailwind constants) globally available for the Web UI, simulating API lag through Promises.
3. **Execution Strategy**: Component-driven design (Atoms to Pages) enabled the rapid creation of the Loading skeleton and `CourseCard` reusable layouts prior to implementing them inside standard route layouts.

## Challenges Faced
- **React Native Dual Context**: Operating a complete CLI initialization for mobile beside a standard `npm/next` package in a monorepo setup directly from the agent runtime required enforcing scoped contexts via `cd` commands per specific framework logic.

## Improvements with More Time
1. **Real Authentication State**: Integrate NextAuth or a standard JWT mockup replacing the bypass redirection, saving user session states permanently in `localStorage` or `sessionStorage`.
2. **Persistent API**: Move the local JSON mockup to a proper Database (e.g. Supabase or Next.js server actions interacting with PostgreSQL), giving each user unique course completions.
3. **Mobile Full-Scale Conversion**: Map the whole Web navigation hierarchy (Sidebar bindings via React Navigation Drawer) and add the specific Course Lesson detail mockups rather than solely the dashboard view limits.
