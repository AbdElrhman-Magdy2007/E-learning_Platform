# LearnSphere - E-Learning Platform

**Empowering Education with Modern Technology**

LearnSphere is a cutting-edge e-learning platform designed to deliver a seamless and engaging educational experience using modern technologies. The platform provides access to courses, categories, teacher profiles, and secure payment plans, making it the ideal destination for learners worldwide.

**Live Demo**: [Visit LearnSphere](https://e-learning-platform-tawny.vercel.app/)

## Features


- **Responsive Design**: Optimized for mobile, tablet, and desktop with a cohesive color scheme and vibrant design.
- **Course Exploration**: Browse courses by categories, explore teacher profiles, and check out pricing plans.
- **Search Functionality**: Integrated search bar for quicker course discovery.
- **Secure Authentication**: Login and signup pages powered by **Supabase Auth** for secure authentication.
- **Payment Integration**: **Stripe** integration for seamless subscription payments.
- **Accessibility**: WCAG 2.1 compliant with ARIA labels, keyboard navigation, and high-contrast UI.
- **Polished Animations**: Micro-interactions like hover effects and slide-in menus using **Framer Motion** and **Tailwind CSS**.
- **Multilingual Support**: Arabic RTL support for wider accessibility.

## Technologies Used

**Frontend**:
- **React 18**: For building interactive user interfaces.
- **Vite**: Fast and efficient build tool for React projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn/UI**: UI components library for professional, customizable UI components.
- **Framer Motion**: For adding smooth animations, such as navigation transitions and element interactions.

**Backend**:
- **Supabase**: Open-source platform providing real-time database and authentication services.

**Payments**:
- **Stripe**: For enabling online payment processing and subscription plans.

**Build Tools**:
- **TypeScript**: For type safety and enhanced development experience.
- **PostCSS & Autoprefixer**: For cross-browser CSS compatibility.

**Deployment**:
- **Vercel**: Cloud deployment service for easy hosting and scalability.

## Project Structure



## Project Structure

learnsphere/
├── src/
│ ├── components/
│ │ ├── Header.jsx # Responsive navigation bar
│ │ ├── ui/ # Shadcn/UI components
│ ├── pages/
│ │ ├── Categories.jsx # Categories page for browsing courses
│ │ ├── Teachers.jsx # Teachers listing page
│ │ ├── Pricing.jsx # Pricing plans page
│ │ ├── Login.jsx # Login page
│ │ ├── Signup.jsx # Signup page
│ ├── index.css # Global styles with Tailwind and custom utilities
│ ├── main.jsx # App entry point with routing
├── public/ # Static assets
├── vite.config.ts # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
├── package.json # Dependencies and scripts
├── README.md # Project documentation


## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: v18 or higher
- **npm**: v8 or higher
- **Supabase Account**: For authentication and database
- **Stripe Account**: For payment integration

## Setup

### 1. Clone the Repository:

```bash
git clone https://github.com/AbdElrhman-Magdy2007/E-learning_Platform
cd learnsphere
