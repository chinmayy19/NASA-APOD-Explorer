# NASA APOD Frontend

Simple React app that consumes the backend at `/api/apod`.

How to run (PowerShell):

1. Install dependencies:

   npm install

2. Start the dev server:

   npm start

Note: When running locally, configure a proxy so that requests to `/api` are forwarded to the backend (default backend on localhost:8080). You can add a `proxy` field to `package.json` or use a setupProxy file.
