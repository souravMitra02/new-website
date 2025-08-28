# 🛍️ Next.js Product App

A simple product management app built with **Next.js 15 (App Router)**, **NextAuth.js**, and **MongoDB**.  
Users can explore products publicly, view details, and after logging in, add new products via a protected dashboard.

---

## 🚀 Features

- **Landing Page (/**)
  - Navbar, Hero, Product Highlights, Footer
  - Publicly accessible

- **Authentication (/login)**
  - Social login (Google) with NextAuth.js
  - Redirects to `/products` after login

- **Product List (/products)**
  - Public product list with name, description, price, and details button

- **Product Details (/products/[id])**
  - Publicly accessible product details page

- **Protected Page (/dashboard/add-product)**
  - Only accessible when logged in
  - Add a new product with a form
  - Saves product to MongoDB
  - Unauthenticated users redirect to `/login`

---

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/souravMitra02/nextjs-product-app.git
cd nextjs-product-app
