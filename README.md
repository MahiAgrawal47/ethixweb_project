# Ethixweb — Modern Digital Solutions for Indian Businesses

A production-ready, fully responsive web application and digital presence built for **Ethixweb**, an India-focused web development and digital engineering company.

Built with a clean and maintainable **MERN stack** (MongoDB, Express.js, React, Node.js + Vite), prioritizing performance, simplicity, and ethical software delivery for Indian startups, MSMEs, and enterprises.

---

## 1. Project Overview

**Ethixweb** is dedicated to empowering India's booming digital economy with practical, high-value web applications and corporate websites. Rather than over-engineering simple problems or charging agency markups, Ethixweb focuses on clean code, transparent timelines, and measurable business growth for companies transitioning into the digital age.

---

## 2. Features

- **Mobile-First Responsive Design:** Fully responsive across all devices (320px, 375px, 425px, tablets, laptops, and desktop screens).
- **Core Landing Page (`/`):** Hero with value proposition, 6 service highlights, 4-step process, featured Indian case studies, value pillars, and prominent CTAs.
- **Dedicated Services Showcase (`/services`):** Deep dives into Website Development, MERN Web Applications, E-commerce, UI/UX Design, Business Automation, and Maintenance.
- **The India Story (`/about`):** Grounded narrative exploring why Indian businesses and MSMEs need practical web engineering without bloat, plus Mission & Vision.
- **Live Enquiry Form (`/contact`):** Real-time client-side validation, anti-spam honeypot protection, and instant API submission.
- **MongoDB Persistence:** Mongoose `Lead` model saving all customer inquiries with timestamps and status tracking.
- **Simple, Secure Admin Authentication (`/admin/login`):** Email & bcrypt-hashed password validation returning a signed JWT token.
- **Protected Admin Dashboard (`/admin`):** Real-time enquiry counter badges, searchable & filterable leads table/mobile cards, detail inspection modal, inline status updates (`New`, `Contacted`, `Converted`, `Closed`), and deletion with confirmation.
- **Speed & SEO Optimization:** 90+ PageSpeed score targeting, semantic HTML5, dynamic title/meta description switching, and lightweight bundles (~8 kB CSS, ~74 kB gzip JS).

---

## 3. Tech Stack

### Frontend
- **React 18** (Modern functional components & Hooks)
- **Vite** (Lightning-fast dev server and optimized production bundler)
- **React Router DOM v6** (Client-side routing and protected route wrappers)
- **Vanilla CSS Design System** (Lightweight custom design tokens, modern typography, glassmorphism, responsive CSS grid/flexbox)
- **Lucide React** (Clean, tree-shakeable SVG icons)
- **Native Fetch API** (Zero external HTTP client overhead)

### Backend
- **Node.js** (v18+)
- **Express.js** (Lightweight REST API framework)
- **MongoDB & Mongoose** (Schema validation, timestamps, and queries)
- **bcryptjs** (Secure cryptographic password hashing)
- **jsonwebtoken (JWT)** (Stateless, token-based admin authorization)
- **cors & dotenv** (CORS management and environment variable configuration)

---

## 4. Folder Structure

```text
ethixweb/
│
├── frontend/
│   ├── public/
│   │   └── favicon.svg           # Custom Ethixweb SVG brand mark
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Sticky responsive header with mobile drawer
│   │   │   ├── Footer.jsx        # Footer with brand narrative and quick links
│   │   │   ├── SEO.jsx           # Dynamic title & meta description manager
│   │   │   └── ProtectedRoute.jsx# Auth guard for admin routes
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Landing page (Hero, Services, Process, Work, CTA)
│   │   │   ├── Services.jsx      # Comprehensive services breakdown & benefits
│   │   │   ├── About.jsx         # India story, mission, vision, and principles
│   │   │   ├── Contact.jsx       # Validated enquiry form with honeypot
│   │   │   ├── AdminLogin.jsx    # Secure admin sign-in
│   │   │   └── AdminDashboard.jsx# Protected leads management dashboard
│   │   ├── services/
│   │   │   └── api.js            # Standardized fetch API client
│   │   ├── App.jsx               # Routes setup
│   │   ├── main.jsx              # Application entry point
│   │   └── index.css             # Unified CSS tokens and responsive rules
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── backend/
│   ├── config/
│   │   └── db.js                 # Mongoose connection with resilient fallback
│   ├── controllers/
│   │   ├── authController.js     # Admin login and session verification
│   │   └── leadController.js     # Lead creation, listing, update, and deletion
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT bearer token verification
│   ├── models/
│   │   └── Lead.js               # Mongoose schema for customer enquiries
│   ├── routes/
│   │   ├── authRoutes.js         # /api/auth routes
│   │   └── leadRoutes.js         # /api/leads routes
│   ├── server.js                 # Central Express app & error handler
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── .gitignore
├── package.json                  # Root runner script
└── README.md
```

---

## 5. Installation & Setup

### Step 1: Clone Repository
```bash
git clone https://github.com/your-username/ethixweb.git
cd ethixweb
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## 6. Environment Variables

Both directories contain `.env.example` templates. 

### Backend `.env` (`backend/.env`)
Create or verify `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ethixweb
JWT_SECRET=ethixweb_production_secure_jwt_secret_987654321
ADMIN_EMAIL=admin@ethixweb.com
# Pre-hashed bcrypt string for 'Admin@Ethix2026'
ADMIN_PASSWORD_HASH=$2a$10$VIDGexJF1dkibZEq9xWPQ.HXzlO3aSGS9iBkFk2DA/q3YfNBAzQj6
ADMIN_PASSWORD=Admin@Ethix2026
```

### Frontend `.env` (`frontend/.env`)
Create or verify `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000
```

---

## 7. Running the Application

### Option A: Run Backend & Frontend Separately

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
# Server will start on http://localhost:5000
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
# Vite will launch on http://localhost:5173
```

### Option B: Monorepo Root Scripts
From the project root:
```bash
npm run dev:backend   # Starts Express backend on port 5000
npm run dev:frontend  # Starts Vite frontend on port 5173
```

---

## 8. Default Admin Credentials

To test the protected Admin Dashboard:
- **URL:** [http://localhost:5173/admin/login](http://localhost:5173/admin/login)
- **Admin Email:** `admin@ethixweb.com`
- **Password:** `Admin@Ethix2026`

---

## 9. API Endpoints

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/health` | Public | Backend health & uptime check |
| `POST` | `/api/leads` | Public | Submit enquiry form (honeypot protected) |
| `POST` | `/api/auth/login` | Public | Admin login (returns JWT token) |
| `GET` | `/api/auth/me` | Protected | Verify active admin JWT session |
| `GET` | `/api/leads` | Protected | Fetch all leads (newest first) |
| `GET` | `/api/leads/:id` | Protected | Get single lead details |
| `PATCH` | `/api/leads/:id` | Protected | Update lead status (`New`, `Contacted`, `Converted`, `Closed`) |
| `DELETE`| `/api/leads/:id` | Protected | Remove a lead from the database |

---

## 10. Design Rationale

### What makes the website India-specific?
1. **Targeting MSMEs and Startups:** Indian business owners place high value on practical ROI and clarity. The messaging avoids obscure tech jargon, focusing instead on lead generation, workflow automation, and reliable software.
2. **Mobile-First Realities:** The majority of Indian internet traffic happens on Android smartphones over 4G/5G mobile networks. The layout, image payloads, and navigation are built to load in milliseconds on mobile devices.
3. **Indian Payment & Digital Ecosystem:** Highlights readiness for UPI checkouts, Razorpay/Cashfree gateways, and WhatsApp/phone communication habits.
4. **Subtle & Tasteful Styling:** Refined Crimson Red accents and dark slate modernism instead of clichéd cultural stereotypes.

### What was improved over the current site?
- **Cleaner Navigation:** Streamlined menu hierarchy with mobile hamburger drawer and prominent CTAs.
- **Stronger Value Proposition:** Immediate clarity in the hero section explaining who Ethixweb is and what business results they deliver.
- **Better CTA Placement:** Strategic conversion touchpoints located at the hero, service cards, and bottom CTA banner.
- **Modern Responsive UI:** Polished cards, clean typography (Plus Jakarta Sans + Inter), and accessible contrast ratios.
- **Performance:** Elimination of heavy JavaScript frameworks/CSS libraries in favor of clean Vanilla CSS and Vite bundling.
- **Enquiry Workflow & Spam Protection:** Anti-bot honeypot with instant validation without page reloads.
- **Admin Lead Management:** Secure dashboard with JWT auth allowing direct status updates and lead tracking.

---

## 11. Testing & Verification Checklist

- [x] Home page with all required sections (`/`)
- [x] Dedicated Services page with benefits and tech stacks (`/services`)
- [x] About page featuring the India Story and Mission/Vision (`/about`)
- [x] Contact page with live validation, honeypot, and database persistence (`/contact`)
- [x] Admin Login with bcrypt & JWT authentication (`/admin/login`)
- [x] Protected Admin Dashboard with status update and delete modals (`/admin`)
- [x] Mobile drawer and responsive card layouts across all breakpoints
- [x] Centralized Express error handler with clean JSON responses
- [x] Zero console warnings or production build errors (`npm run build` passes in 4s)
