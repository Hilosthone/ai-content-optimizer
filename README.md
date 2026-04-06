# AI Content Optimizer & Scheduler

> Built by [BuilON](https://builon.com) for [JustXend](https://justxend.com)

Paste your content and get instant SEO optimization, engagement tips, readability improvements, and a smart posting schedule — tailored to your platform.

---

## Live Demo

| Service | URL |
|---|---|
| Backend API | _Coming soon_ |
| Frontend | _Coming soon_ |

---

## What It Does

- Paste any content and select a target platform
- Get an SEO-optimized version with keywords and meta description
- Receive a stronger hook and engagement suggestions
- Get a readability score with specific improvement tips
- Get the best days and times to post on your chosen platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, FastAPI |
| AI | OpenAI GPT-4o |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Hosting | Render (backend), Vercel (frontend) |

---

## Project Structure

```
ai-content-optimizer/
├── backend/
│   ├── main.py              # API routes
│   ├── optimizer.py         # Calls GPT-4o to optimize content
│   ├── prompt_builder.py    # Builds platform-specific optimization prompt
│   └── config.py            # Environment config
├── frontend/                # Next.js app
├── render.yaml              # Render deployment config
├── requirements.txt
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/platforms` | Returns supported platforms |
| POST | `/optimize` | Optimize content for a specific platform |

### Example Request

```json
POST /optimize
{
  "content": "Here are 5 reasons why you should start using AI in your business today...",
  "platform": "linkedin"
}
```

### Example Response

```json
{
  "seo": {
    "optimized_content": "Discover 5 powerful reasons why AI adoption is transforming businesses...",
    "keywords": ["AI in business", "artificial intelligence", "business automation"],
    "meta_description": "Learn how AI is revolutionizing businesses with 5 key benefits."
  },
  "engagement": {
    "hook": "Most businesses are already using AI. Are you being left behind?",
    "suggestions": ["Add a personal story", "Include a poll or question", "Use bullet points"]
  },
  "readability": {
    "score": 74,
    "improvements": ["Shorten sentences", "Replace jargon with simple words"]
  },
  "posting_schedule": {
    "platform": "linkedin",
    "best_times": ["Tuesday 8-10am", "Wednesday 12pm", "Thursday 5-6pm"],
    "reasoning": "LinkedIn sees highest engagement mid-week during business hours."
  }
}
```

---

## Supported Platforms

Twitter · LinkedIn · Instagram · Facebook · Blog

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/PerceptronCipher/ai-content-optimizer.git
cd ai-content-optimizer

# Set up backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run backend (OPENAI_API_KEY must be set in your shell)
cd backend
python -m uvicorn main:app --reload

# Run frontend
cd frontend
npm install
npm run dev
```

---

## License

MIT © 2025 BuilON