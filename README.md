<div align="center">

# 🏟️ SportNest – Sports Facility Booking Management System

### *Book, manage, and organize sports facilities with ease.*

A full-stack MERN-based sports facility booking platform where users can discover, reserve, and manage sports venues, while facility owners can publish and control their own facilities through a secure role-based dashboard.

<br/>

![SportNest Homepage](/src/assets/images/sportNest-banner.png)

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-FF4154?style=for-the-badge)](https://better-auth.com/)

</div>

---

## 🌐 Live Demo

👉 **Live Website:** https://sport-nest-client-phi.vercel.app/

📦 **Client Repository:** https://github.com/abutalha08/sport-nest-client

🛠️ **Server Repository:** https://github.com/abutalha08/sport-nest-server

---

## 📖 Overview

**SportNest** is a modern sports facility booking platform built with the MERN stack. Users can browse available sports venues, search and filter facilities, view detailed information, and book facilities based on preferred dates and time slots.

The platform also provides dedicated facility management tools for owners, enabling them to add, update, and manage their facilities through a secure dashboard.

The project focuses on authentication, authorization, real-time booking workflows, secure session handling, and responsive user experience.

---

## 📸 Application Showcase

### 🏠 Landing Dashboard

![SportNest Homepage](/src/assets/images/sportNest-homepage.png)

Browse featured sports facilities and explore available booking options.

---

<details>
<summary><strong>🔍 Facility Discovery & Search</strong></summary>
<br/>

![All Facilities](/src/assets/images/all-facilities.png)

> Search facilities by name and filter by sport type using MongoDB query operators for a smooth discovery experience.

</details>

---

<details>
<summary><strong>⚡ Facility Details & Booking</strong></summary>
<br/>

![Facility Details Page](/src/assets/images/facility-details-page.png)

> View complete facility information, select booking slots, and calculate total pricing dynamically.

</details>

---

<details>
<summary><strong>➕ Add New Facility</strong></summary>
<br/>

![Add Facility Page](/src/assets/images/add-facility-page.png)

> Facility owners can publish new sports venues with pricing, capacity, available slots, and location details.

</details>

---

<details>
<summary><strong>📊 Manage My Facilities</strong></summary>
<br/>

![Manage Facilities Page](/src/assets/images/manage-facilities-page.png)

> Owners can update or remove facilities securely with role-based access control.

</details>

---

<details>
<summary><strong>🗓️ My Bookings Dashboard</strong></summary>
<br/>

![My Bookings Page](/src/assets/images/my-bookings-page.png)

> Track, manage, and cancel bookings through a personalized booking dashboard.

</details>

---

## ✨ Key Features

### 👤 User Features

- Secure Email/Password Authentication
- Google Login with BetterAuth
- Browse All Sports Facilities
- Search Facilities by Name
- Filter Facilities by Sport Type
- View Facility Details
- Book Facilities by Date & Time Slot
- Dynamic Price Calculation
- Manage Personal Bookings
- Cancel Existing Bookings

### 🏟️ Facility Owner Features

- Add New Facility
- Update Facility Information
- Delete Facilities Securely
- Manage Own Facilities Dashboard
- Ownership-Based Authorization

### 🔐 Security Features

- BetterAuth Authentication
- JWT Authentication
- HTTPOnly Cookie Sessions
- Protected Private Routes
- Role-Based Access Control (RBAC)
- Persistent Login on Page Reload

### 🎨 User Experience

- Fully Responsive Design
- Loading Spinner During API Requests
- Toast Notifications
- Custom 404 Page
- Clean & Recruiter-Friendly UI

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Next.js | Frontend Framework |
| React.js | UI Development |
| Tailwind CSS | Styling |
| DaisyUI | UI Components |
| BetterAuth | Authentication |
| JWT | Authorization |
| MongoDB Atlas | Database |
| Express.js | Backend API |
| Node.js | Server Runtime |
| React Hot Toast | Notifications |
| Animate.css | UI Animations |

---

## 🗄 Database Structure

### Facilities Collection

```json
{
  "_id": "ObjectId",
  "name": "Football Turf",
  "facility_type": "Football",
  "location": "Dhaka",
  "price_per_hour": 1000,
  "capacity": 22,
  "available_slots": ["8AM-9AM"],
  "description": "Premium football turf",
  "owner_email": "owner@example.com",
}
```

### Bookings Collection

```json
{
  "_id": "ObjectId",
  "facility_id": "facility_id",
  "user_email": "user@example.com",
  "booking_date": "2026-06-01",
  "time_slot": "8AM-10AM",
  "hours": 2,
  "total_price": 2000,
}
```

---

### Additional Features

- Owner email automatically populated during facility creation
- Confirmation modal before facility deletion

---

## 📱 Responsive Design

SportNest is fully responsive and optimized for mobile, tablet, and desktop devices, ensuring a seamless booking experience across all screen sizes.

---

## 💡 What I Learned

- Implementing BetterAuth with Google OAuth
- JWT Authentication using HTTPOnly Cookies
- Role-Based Access Control (RBAC)
- Building secure CRUD operations
- Managing complex booking workflows
- Search & Filter implementation using MongoDB operators
- Designing scalable MERN architecture
- Managing protected routes with persistent authentication

---

## 💙 Author

<div align="center">

Made with 💙 by **[Abu Talha Taufique](https://github.com/abutalha08)**

*SportNest — Simplifying sports facility booking through modern web technology.*

© 2026 SportNest. All rights reserved.

</div>