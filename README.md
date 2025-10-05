# My Portfolio Website - Frontend

## 🚀 Project Overview

This is the frontend repository for a personal portfolio website designed to showcase personal projects, display an "About Me" section, and feature a dynamic blog. The site is built with a focus on fast performance, polished user experience, and secure content management accessible only to the owner via a private dashboard.

## ✨ Features

### Public Pages (Accessible to All)

* **All Blogs Page:** Displays a list of all published blog posts. Utilizes **Incremental Static Regeneration (ISR)** for fetching new content periodically without requiring a full site rebuild.
* **Individual Blog Pages:** Displays the full content of a selected blog post. Implemented using **ISR with `getStaticPaths` and `revalidate`** for dynamic content generation and optimal performance.
* **About Me Section:** A static section displaying personal information, work experience, and skills. Content is fetched using **Static Site Generation (SSG)** for maximum speed.
* **Projects Showcase:** A dedicated section for personal projects, including thumbnails, descriptions, project links, and live site links. Content updates are managed using **ISR**.
* **Responsive UI/UX:** A modern, fully responsive user interface that ensures a polished experience across all device sizes.
* **General Enhancements:** Includes interactive elements like **carousels, cards, skeletons** for loading states, **smooth transitions**, and **lazy-loading** for heavy assets.

### Private Pages (Owner Only)

* **Secure Authentication:** Utilizes **JWT-based authentication** to restrict access.
* **Dashboard:** A dynamic, owner-only dashboard for managing blogs, projects, and other content.

### ⚠️ Error Handling & Validation

* **Strict Error Handling:** Implements robust error handling for API/network errors and unauthorized actions.
* **Success/Error Feedback:** Provides user-friendly feedback via **`react-hot-toast`** for success and error messages.
* **Form Validation:** Comprehensive form validation with clear, user-friendly error messages (e.g., required fields, invalid input).

## 🛠️ Technology Stack

* **Frontend Framework:** Next.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS (with responsive utility classes)
* **Notifications:** `react-hot-toast`
* **Rich Text Editor (Bonus):** React Quill for creating and formatting blog content.

## 🔗 Links & Credentials

| Category | Description | Link / Details |
| :--- | :--- | :--- |
| **Live Site** | Deployed Frontend Application | [b5-a7-2-portfolio-frontend.vercel.app](https://b5-a7-2-portfolio-frontend.vercel.app/) |
| **GitHub Repo** | This Repository | [MdImranHossen01/B5A7-2-portfolio-frontend](https://github.com/MdImranHossen01/B5A7-2-portfolio-frontend) |
| **Backend API** | Live Backend Service | [b5-a7-2-portfolio-backend.vercel.app](https://b5-a7-2-portfolio-backend.vercel.app/) |
| **Demo Video** | Project Walkthrough (10-15 mins) | [YouTube Demo](https://youtu.be/bErNuBeSlZI) |
| **Admin Login** | Credentials for Testing Dashboard | Email: `admin@example.com` / Password: `admin123` |

## ⚙️ Setup Instructions

Follow these steps to get the frontend running locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MdImranHossen01/B5A7-2-portfolio-frontend.git](https://github.com/MdImranHossen01/B5A7-2-portfolio-frontend.git)
    cd B5A7-2-portfolio-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add the following:
    ```
    NEXT_PUBLIC_API_BASE_URL="[Your_Backend_Live_Link_or_Local_URL]"
    # Example: NEXT_PUBLIC_API_BASE_URL="http://localhost:5000/api/v1" 
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:3000`.

---

## 2. Backend Repository README.md

```markdown
# My Portfolio Website - Backend (API)

## ⚙️ Project Overview

This is the backend API repository for the personal portfolio website. Its primary responsibilities are handling **Authentication & Authorization** and managing the dynamic content (Blogs and Projects) via **CRUD (Create, Read, Update, Delete)** operations. It ensures that only the portfolio owner can modify content through a secure dashboard.

## 🔑 Core Features

* **Secure Authentication & Authorization:** Implements a robust login system using **JWT (JSON Web Tokens)** for session management.
* **Owner Access:** Only authorized users (the portfolio owner) can access protected endpoints for content management.
* **User Management:** Passwords are securely hashed using **bcrypt** before being stored in the database.
* **Admin Seeding:** The backend includes a mechanism to **seed an initial admin user** upon setup, enabling immediate owner login.
* **Blog Management API:** Full CRUD operations for creating, reading, updating, and deleting blog posts (owner-only access for CUD).
* **Project Management API:** CRUD operations for managing the projects showcased on the site.
* **Strict Error Handling:** Provides professional, informative error responses for form validation failures, API errors, and unauthorized requests.

## 🛠️ Technology Stack

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** Prisma (Next-generation ORM)
* **Authentication:** JWT (JSON Web Tokens)
* **Security:** `bcrypt` (for password hashing)

## 🔗 Links & Credentials

| Category | Description | Link / Details |
| :--- | :--- | :--- |
| **Live API** | Deployed Backend API | [b5-a7-2-portfolio-backend.vercel.app](https://b5-a7-2-portfolio-backend.vercel.app/) |
| **GitHub Repo** | This Repository | [MdImranHossen01/B5A7-2-portfolio-backend](https://github.com/MdImranHossen01/B5A7-2-portfolio-backend) |
| **Frontend Site** | Live Frontend Application | [b5-a7-2-portfolio-frontend.vercel.app](https://b5-a7-2-portfolio-frontend.vercel.app/) |
| **Demo Video** | Project Walkthrough (10-15 mins) | [YouTube Demo](https://youtu.be/bErNuBeSlZI) |

### 🔒 Admin Credentials for Testing

Use these credentials to access the private dashboard on the frontend application:

| Detail | Value |
| :--- | :--- |
| **ADMIN\_EMAIL** | `admin@example.com` |
| **ADMIN\_PASSWORD**| `admin123` |

## ⚙️ Setup Instructions

Follow these steps to set up and run the backend locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MdImranHossen01/B5A7-2-portfolio-backend.git
    cd B5A7-2-portfolio-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and configure your database connection and secrets:
    ```env
    # Database Configuration
    DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DB_NAME]?schema=public"

    # Application Configuration
    NODE_ENV="development"
    PORT=5000

    # JWT Secret for token signing
    JWT_SECRET="YOUR_STRONG_SECRET_KEY"

    # Admin Seeding Credentials (Used to create the initial admin user)
    ADMIN_EMAIL="admin@example.com"
    ADMIN_PASSWORD="admin123"
    ```

4.  **Setup Database and Seed Admin User (Prisma):**
    Apply migrations and run the seeding script to initialize the database schema and create the admin user:
    ```bash
    # Run Prisma migrations and seed the database
    npx prisma migrate dev --name init
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The API will be running locally, typically at `http://localhost:5000/api/v1`.