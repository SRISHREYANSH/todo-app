# Todo-App 

## Setup
1. Get Claude API key: Visit OAuth URL → authorize → console.anthropic.com/settings/keys → copy `sk-ant-...`
2. `cp .env.example .env`
3. Edit `.env`: `CLAUDE_API_KEY=sk-ant-yourkey`
4. `npm install`
5. `npm start`

## API
- GET /tasks
- POST /tasks `{title: "Buy milk"}`
- POST /tasks/ai-generate `{prompt: "grocery"}` → AI tasks

## UI
Open `frontend.html` in browser.

Server on 5000, tested empty []. Ready for key.
