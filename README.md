# Event API

This API allows you to manage events using MongoDB for data storage. You can retrieve, create, and delete events through the following endpoints.

## API Endpoints

### 1. Get Event by Unique ID


**Example GET Request:**
```bash
curl --location 'http://localhost:8000/api/v3/app/events' \
--data ''
```

**Example POST Request:**
```bash
curl --location 'http://localhost:8000/api/v3/app/events' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Startup Pitch Event 2024",
  "tagline": "Pitch your startup to top investors.",
  "schedule": "2024-12-01T11:00:00Z",
  "description": "A platform for budding entrepreneurs to pitch their startups to investors.",
  "files": {
    "image": "startup-pitch.png"
  },
  "moderator": "David Lee",
  "category": "Business",
  "sub_category": "Entrepreneurship",
  "rigor_rank": 8,
  "attendees": ["user_567", "user_890", "user_234"]
}
'
```
