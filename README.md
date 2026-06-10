# Srithar S. — Portfolio

Full-stack portfolio built with **React + Tailwind CSS** (frontend) and **Node.js + Express + PostgreSQL** (backend).

---

## Project Structure

```
portfolio/
├── client/               # React + Tailwind frontend
│   ├── public/
│   └── src/
│       ├── components/   # Navbar, Hero, Skills, Projects, Experience, Contact, Footer
│       ├── hooks/        # useFetch custom hook
│       ├── api.js        # Axios API calls
│       ├── App.jsx
│       └── index.css     # Tailwind + global styles
├── server/               # Node.js + Express backend
│   ├── db/
│   │   ├── db.js         # PostgreSQL pool connection
│   │   └── seed.js       # Creates tables + seeds data
│   ├── routes/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── contact.js
│   ├── index.js          # Express server entry
│   └── .env.example
└── package.json          # Root with concurrently scripts
```

---

## Setup

### 1. PostgreSQL

Create a database:
```sql
CREATE DATABASE portfolio_db;
```

### 2. Server environment

```bash
cd server
cp .env.example .env
# Edit .env with your DB credentials
```

### 3. Install dependencies

```bash
# From root
npm run install:all
```

### 4. Seed the database

```bash
npm run setup:db
```

This creates all tables and inserts Srithar's projects, skills, and experience.

### 5. Run in development

```bash
npm run dev
```

- React app: http://localhost:3000  
- Express API: http://localhost:5000

---

## API Endpoints

| Method | Endpoint          | Description            |
|--------|-------------------|------------------------|
| GET    | /api/projects     | All projects           |
| GET    | /api/projects/:id | Single project         |
| GET    | /api/skills       | All skills             |
| GET    | /api/experience   | Work experience        |
| POST   | /api/contact      | Submit contact message |
| GET    | /api/contact      | All messages (admin)   |
| GET    | /api/health       | Server health check    |

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React 18, Tailwind CSS v3   |
| Backend   | Node.js, Express            |
| Database  | PostgreSQL (via `pg`)       |
| HTTP      | Axios                       |
| Dev tools | Concurrently, Nodemon       |
