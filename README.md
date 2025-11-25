# NASA APOD Explorer

A full-stack web application that fetches and displays NASA's Astronomy Picture of the Day (APOD) with intelligent caching, responsive UI, and RESTful API design.

## Project Overview

**NASA APOD Explorer** consists of two main components:
- **Backend**: Java Spring Boot REST API with Caffeine caching
- **Frontend**: React.js single-page application with responsive design

This project demonstrates:
- RESTful API design and best practices
- Server-side caching with TTL and size limits
- Secure API key management
- React component architecture
- Cross-origin communication
- Responsive web design

---

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Backend | Java Spring Boot | 3.x |
| Frontend | React.js | 18.2.0 |
| Caching | Caffeine Cache | Latest |
| Build | Maven | 3.9.4 |
| Package Manager | npm | Latest |
| Runtime | Java 17+ | JDK 17+ |

---

## Features

### Backend (Web Service API)
✅ **RESTful Endpoints**
- `GET /api/apod` — Fetch today's APOD
- `GET /api/apod?date=YYYY-MM-DD` — Fetch APOD for a specific date

✅ **Caching Strategy**
- Caffeine in-memory cache
- 30-minute expiry per entry
- Maximum 500 cached entries
- Automatic eviction by LRU

✅ **Security**
- API key stored in environment variables (not in code)
- Falls back to NASA DEMO_KEY if env var missing
- CORS enabled for frontend communication

✅ **Error Handling**
- Date validation (no future dates)
- Graceful error responses
- HTTP status codes (200, 400, 500)

### Frontend (UI Layer)
✅ **Dashboard**
- Display today's APOD on page load
- Show image, title, date, explanation, copyright

✅ **Date Picker**
- Select past dates to view historical APODs
- Real-time validation (past dates only)

✅ **Media Support**
- Images with responsive sizing
- Video/iframe support for video APODs
- Fallback NASA logo on load errors

✅ **Design & UX**
- Clean, modern interface
- Responsive layout (mobile, tablet, desktop)
- Loading states and error messages
- Semantic HTML and accessibility

---
