# GitHub Plus

GitHub Plus is a full-stack web application built to enhance the GitHub experience with AI tools, developer utilities, and a modern, component-driven UI. It leverages the T3 Stack, integrates powerful APIs like LangChain and Google AI, and offers a seamless developer experience through rich features and automation.

## Overview

GitHub Plus combines GitHub API integrations, AI-powered assistants, and a robust authentication system into a streamlined platform for developers. Users can explore code insights, manage repositories, interact with AI tools, and use productivity features — all within a responsive and beautifully designed interface.

## Tech Stack

### Core Frameworks & Tooling

- **Next.js 15** – React-based framework for server-side rendering and routing
- **TypeScript** – Strongly typed JavaScript for reliable development
- **Prisma** – Modern ORM for database interaction
- **tRPC** – Type-safe, end-to-end API communication
- **Tailwind CSS** – Utility-first CSS framework

### Developer Experience

- **Prettier & ESLint** – Code formatting and linting
- **Turbo** – Optimized dev performance
- **Zod** – Schema validation
- **React Hook Form** – Form state management

### Authentication

- **Clerk** – Full-featured auth platform (sign-in, user sessions, etc.)

### AI & Language Models

- **@ai-sdk/google** & **@google/generative-ai** – Gemini integration
- **LangChain** – Framework for LLM-driven applications
- **AssemblyAI** – Audio transcription and speech recognition

### UI Components

- **Radix UI** – Accessible and customizable UI primitives
- **Lucide React**, **cmdk**, **Embla Carousel**, **React Markdown Editor**, **Syntax Highlighter** – Rich, modern UI/UX enhancements

### Miscellaneous Utilities

- **Stripe** – Payment processing
- **Axios** – HTTP client
- **Date-fns**, **clsx**, **tailwind-merge** – Functional utilities and styling helpers

## Project Summary

- Fully typed, scalable architecture with tRPC and Prisma
- Clerk-powered user authentication and session handling
- Beautiful UI using Tailwind CSS, Radix UI, and custom components
- Integrated AI features using LangChain, Google AI SDKs, and AssemblyAI
- Markdown editing, syntax highlighting, file uploads, and more
- Supports secure payments and monetization via Stripe

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- PostgreSQL (or a compatible database)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/WLL1am/github-plus.git
   cd github-plus
   ```

2. **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Environment Variables**
    
    Create a .env file using the provided example:
    ```bash
    cp .env.example .env
    ```
    Fill in the required environment variables:

- Database connection string
- Clerk credentials
- Stripe keys
- API keys for services like Google AI, AssemblyAI, etc.

4. **Set Up the Database**
    ```bash
    sudo bun prisma migrate dev
    ```

5. **Start the Development Server**

    Launch the local development server:
    ```bash
    sudo bun dev
    ```
