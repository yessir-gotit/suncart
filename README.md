<div align="center">
  <br />
  <p>
    <a href="https://suncart-rust.vercel.app" target="_blank">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/SunCart-%23f97316?style=for-the-badge&logo=sun&logoColor=white&labelColor=%231a1a2e" />
        <img alt="SunCart" src="https://img.shields.io/badge/SunCart-%23f97316?style=for-the-badge&logo=sun&logoColor=white&labelColor=%23fff7ed" width="200" />
      </picture>
    </a>
  </p>
  <h1>☀️ SunCart — Your One-Stop Summer Shop</h1>
  <p>
    <strong>Premium summer essentials, curated for endless sunny days.</strong>
  </p>
  <p>
    <a href="https://suncart-rust.vercel.app"><strong>🌐 Live Demo</strong></a>
    ·
    <a href="#features"><strong>Features</strong></a>
    ·
    <a href="#tech-stack"><strong>Tech Stack</strong></a>
    ·
    <a href="#getting-started"><strong>Getting Started</strong></a>
    ·
    <a href="#project-structure"><strong>Project Structure</strong></a>
  </p>
  <br />
</div>

---

## 📖 Overview

**SunCart** is a modern, visually-stunning e-commerce web application built with Next.js 16 (App Router). It specializes in summer essentials — from UV-protection sunglasses and sunscreen to beach dresses and inflatable beach balls. The UI is crafted with a warm, sun-drenched aesthetic, rich animations, and a seamless shopping experience.

> ⚠️ **Note:** This project is built on the latest Next.js 16 (App Router). For information on breaking changes, refer to the docs at `node_modules/next/dist/docs/`.

---

## ✨ Features

### 🛍️ Product Browsing
- **Search & Filter** — Real-time product search by name and category filtering (Accessories, Clothing, Skincare, Beach Accessories, Footwear)
- **Product Categories** — Organised browsing across 5 distinct categories
- **Product Details** — Dedicated detail pages with stock availability, ratings, descriptions, and pricing
- **Stunning Product Cards** — Hover effects, star ratings, and image zoom transitions

### 🔐 Authentication
- **Email & Password Auth** — Secure sign-up and sign-in via [Better-Auth](https://better-auth.com)
- **Google OAuth** — One-click social login integration
- **Session Management** — Persistent session with profile avatar and user info in the navbar
- **Protected Routes** — Product detail pages redirect unauthenticated users to login
- **Responsive Auth UI** — Split-screen login/register pages with animated backgrounds

### 🎨 UI/UX
- **Animated Hero Section** — Spring physics animations powered by `@react-spring/web`
- **Interactive Cards** — Hover tilt, scale transitions, and staggered entry animations
- **Summer Survival Guide** — An informative tips section (Hydrate, SPF, Seek the Breeze)
- **Featured Brands Grid** — Curated partner showcase with hover effects
- **Toast Notifications** — Action feedback via `react-toastify`
- **Custom 404 Page** — Whimsical "Lost in the Sun?" error page
- **Loading States** — Skeleton loaders and spinner components throughout
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop breakpoints
- **Custom Fonts** — Bebas Neue (headings) + Inter (body) from Google Fonts

### 📱 Additional Pages
- **User Profile** — Avatar, name, email display with edit options
- **Login / Register** — Full authentication flow with redirect support

---

## 🛠️ Tech Stack

| Category            | Technology                                                       |
| ------------------- | ---------------------------------------------------------------- |
| **Framework**       | [Next.js 16.2.6](https://nextjs.org) (App Router)               |
| **UI Library**      | [React 19.2.4](https://react.dev)                                |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com) + [DaisyUI 5](https://daisyui.com) |
| **Database**        | [MongoDB](https://mongodb.com) (via Better-Auth adapter)         |
| **Authentication**  | [Better-Auth](https://better-auth.com) (email/password + Google OAuth) |
| **Animations**      | [@react-spring/web](https://www.react-spring.dev) + [animate.css](https://animate.style) |
| **Icons**           | [Lucide React](https://lucide.dev)                               |
| **Notifications**   | [React Toastify](https://fkhadra.github.io/react-toastify)       |
| **Linting**         | [ESLint](https://eslint.org) + [`eslint-config-next`](https://nextjs.org/docs/app/api-reference/config/eslint) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or later recommended)
- [npm](https://npmjs.com) (or yarn / pnpm / bun)
- A [MongoDB](https://mongodb.com) instance (local or Atlas)
- [Google OAuth credentials](https://console.cloud.google.com/apis/credentials) (for social login)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd suncart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in the required values (see [Environment Variables](#environment-variables) below).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=<app>

# Better-Auth Configuration
BETTER_AUTH_SECRET=<your-secret-key>
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (optional — remove if not using social login)
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

### Available Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the development server             |
| `npm run build`     | Build the application for production     |
| `npm run start`     | Start the production server              |
| `npm run lint`      | Run ESLint to check for code issues      |

---

## 📁 Project Structure

```
suncart/
├── app/                          # Next.js App Router pages
│   ├── api/auth/[...all]/
│   │   └── route.js              # Better-Auth API handler
│   ├── login/
│   │   └── page.jsx              # Login page (email/password + Google)
│   ├── register/
│   │   └── page.jsx              # Registration page
│   ├── my-profile/
│   │   ├── page.jsx              # User profile page
│   │   └── update/
│   │       └── page.jsx          # Profile update page
│   ├── products/
│   │   ├── page.jsx              # Product listing (search + filter)
│   │   └── [id]/
│   │       └── page.jsx          # Product detail page
│   ├── favicon.ico
│   ├── globals.css               # Global styles + Tailwind imports
│   ├── layout.jsx                # Root layout (Navbar, Footer, fonts)
│   ├── loading.jsx               # Global loading state
│   ├── not-found.jsx             # Custom 404 page
│   └── page.jsx                  # Home page
├── components/                   # Reusable UI components
│   ├── Footer.jsx                # Site footer
│   ├── Hero.jsx                  # Animated hero section
│   ├── Navbar.jsx                # Responsive navbar with auth
│   ├── PopularProducts.jsx       # Featured products section
│   ├── ProductCard.jsx           # Product card component
│   ├── SummerTips.jsx            # Summer survival guide section
│   └── TopBrands.jsx             # Featured brands section
├── data/
│   └── products.json             # Product catalog data
├── lib/
│   ├── auth-client.js            # Better-Auth client-side instance
│   └── auth.js                   # Better-Auth server configuration
├── public/                       # Static assets
├── .env.local                    # Environment variables (gitignored)
├── next.config.js                # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
└── jsconfig.json                 # JavaScript configuration (path aliases)
```

---

## 🧩 Key Pages

| Route                  | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `/`                    | Home page — Hero, trending products, tips, brands |
| `/products`            | All products with search & category filter      |
| `/products/[id]`       | Individual product details (requires auth)      |
| `/login`               | Sign in with email/password or Google            |
| `/register`            | Create a new account                            |
| `/my-profile`          | View your profile (requires auth)               |
| `/my-profile/update`   | Edit your profile details                       |

---

## 🎯 Design Highlights

- **Awwards-inspired aesthetic** — Subtle glow effects, blurred backgrounds, and chunky typography
- **Spring physics animations** — Powered by `@react-spring/web` for natural-feeling motion
- **Consistent color palette** — Warm oranges, amber tones, and soft neutrals throughout
- **Glassmorphism elements** — Backdrop blur and semi-transparent overlays on cards and navbar
- **Micro-interactions** — Hover-tilt cards, spinning sun logo, staggered fade-ins
- **Responsive layout** — Carefully crafted mobile-first design with adaptive grid systems

---

## 🌐 Deployment

The app is configured for easy deployment on [Vercel](https://vercel.com), the platform from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Ensure your environment variables are configured in your Vercel project settings.


