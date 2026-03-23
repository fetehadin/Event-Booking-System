# 🎟️  Event Booking Platform

**Modern full-stack platform for discovering educational & value-driven events, booking tickets, managing participation — with real-time updates, role-based access, and smart notifications.**

Built for users who want seamless discovery, organizers who need powerful tools, and admins who want control — all in one secure, scalable system.

[![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-blue?logo=postgresql)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Overview

EduEvent replaces fragmented posters, manual bookings, and scattered communication with a **unified digital platform**:

- **Users** discover, search, book, RSVP, and review events
- **Organizers** create, manage, and analyze their events
- **Admins** approve events and moderate the system

It delivers real-time ticket visibility, secure payments, email + Telegram reminders, and basic analytics — designed to grow from MVP to production platform.

---

## Problem & Solution

Traditional event coordination suffers from:
- Low visibility (posters, WhatsApp groups)
- Manual/error-prone booking & tracking
- No real-time updates or centralized control

**EduEvent solves this** with a structured, trackable system: public event discovery + authenticated workflows + notifications + analytics — all built on modern, scalable architecture.

---

## Core Objectives

- Frictionless event discovery & booking
- Real-time ticket availability & validation
- Role-based secure access (Customer / Organizer / Admin)
- Powerful tools for organizers (creation, analytics, RSVPs)
- Admin moderation & oversight
- Foundation for future features (recommendations, resale, mobile apps)

---

##  Key Features

- **Authentication** — JWT + role-based access (Customer, Organizer, Admin)
- **Event Management** — Create / edit / approve events (only approved → public)
- **Discovery** — Search, filter (category, date, location), sort (upcoming/popular), pagination
- **Ticket Booking** — Select quantity, real-time stock, statuses (Pending → Confirmed → Cancelled)
- **RSVP** — Mark Interested / Going → helps estimate attendance
- **Ratings & Reviews** — 1–5 stars + comments (only attendees can review)
- **Analytics** — Per-event views, bookings, RSVP counts
- **Payments** — Integrated workflow (Stripe / Chapa ready), statuses (Pending / Successful / Failed)
- **Notifications** — Email confirmations & reminders + optional Telegram bot (1 day before + event day)
- **My Tickets** — View bookings, status, event details

**Phase 2 Enhancements** (planned): Gift cards, calendar sync  
**Future Vision**: Ticket resale, seat maps, recommendations, organizer matchmaking

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15+** (App Router) — SSR / ISR for SEO, Server Components, excellent DX  
  → Chosen for event discovery pages that benefit from strong SEO and snappy data fetching
- **React 19** — Modern hooks & patterns
- **Tailwind CSS** + **shadcn/ui** or Radix UI — Beautiful, accessible components fast
- **TanStack Query** (React Query) — Data fetching, caching, optimistic updates
- **Zustand** — Lightweight global state (auth, cart, etc.)

### Backend
- **Node.js** 20+
- **Express.js** — RESTful APIs
- **PostgreSQL** — Relational data with strong integrity
- **JWT** — Secure authentication & role control

### Other
- **Drizzle ORM**  — Type-safe database access
- **Nodemailer** / **Resend** — Email notifications
- **node-telegram-bot-api** — Optional Telegram integration

---

## 📁 Project Structure 

```text
eduevent/
├── backend/                  # Express + PostgreSQL APIs
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── events/
│   │   ├── tickets/
│   │   ├── bookings/
│   │   ├── payments/
│   │   ├── rsvp/
│   │   ├── reviews/
│   │   ├── analytics/
│   │   ├── notifications/
│   │   ├── middlewares/
│   │   ├── config/
│   │   └── app.js
│   ├── server.js
│   ├── prisma/               # or migrations folder
│   └── package.json
├── frontend/                 # Next.js
│   ├── app/                  # Next.js App Router
│   │   ├── events/
│   │   ├── dashboard/
│   │   ├── auth/
│   │   └── ...
│   ├── components/
│   ├── lib/                  # API helpers, utils
│   ├── public/
│   └── package.json
├── .env.example
└── README.md

## Getting Started
1. Clone & install

git clone https://github.com/fetehadin/Event-Booking-System.git
cd Event-Booking-System

Contributing
Pull requests welcome! For major changes, please open an issue first.

📬 Contact & Team
Developer: Fetehadin Negash
Location: Addis Ababa, Ethiopia
Feel free to open issues or reach out!
Built with curiosity and care for better event experiences in education & community.
⭐ Star if this inspires you. More phases coming!
