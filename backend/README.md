# JobGati Backend (Express + MongoDB)

Backend for the JobGati skill-to-job matching platform.  
Designed to work with the React single-page UI you provided.

## Features

- Job Seeker registration (`/api/jobseeker/register`)
- Business registration (`/api/business/register`)
- AI-like endpoints (dummy logic for now):
  - `/api/ai/skill-analysis`
  - `/api/ai/gap-identify`
  - `/api/ai/job-match`

## Folder Structure

```bash
jobgati-backend/
├── config/
│   └── db.js
├── models/
│   ├── Business.js
│   └── JobSeeker.js
├── routes/
│   ├── aiRoutes.js
│   ├── businessRoutes.js
│   └── jobSeekerRoutes.js
├── .env.example
├── package.json
├── README.md
└── server.js
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file at the root based on `.env.example`:

```env
MONGO_URI=mongodb://localhost:27017/jobgati
PORT=4000
```

3. Start MongoDB locally (e.g., using `mongod`).

4. Run the server:

```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

The server will start on `http://localhost:4000`.

## Example Endpoints

- `GET /` → Health check
- `POST /api/jobseeker/register`
- `POST /api/business/register`
- `POST /api/ai/skill-analysis`
- `POST /api/ai/gap-identify`
- `POST /api/ai/job-match`

You can connect your React frontend to these endpoints using `fetch` or `axios`.
