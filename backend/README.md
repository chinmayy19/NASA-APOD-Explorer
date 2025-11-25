# NASA APOD Backend

Minimal Spring Boot service that proxies the NASA APOD API and adds caching.

How to run (Windows PowerShell):

1. Set your NASA API key in the environment:

   $env:NASA_API_KEY = 'DEMO_KEY_OR_YOURS'

2. From the `backend` folder run:

   .\mvnw.cmd spring-boot:run 

Endpoints:

- GET /api/apod - today's APOD (or cached)
- GET /api/apod?date=YYYY-MM-DD - APOD for the given date

Notes:

- Caching: Caffeine, 30 minutes expiry, max 500 entries.
- API key is read from the `NASA_API_KEY` environment variable to avoid hardcoding secrets.
- Due to some API errors, Images are not loading..
