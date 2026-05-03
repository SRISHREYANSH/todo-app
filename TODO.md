# Todo-App Claude AI Integration TODO

## Steps:
- [x] 1. Update package.json: Add @anthropic-ai/sdk dependency.
- [x] 2. Create .env.example for CLAUDE_API_KEY.
- [x] 3. Update server.js: Add AI endpoint POST /tasks/ai-generate.
- [x] 4. Install dependencies: cd todo-app && npm install
- [ ] 5. Test integration (user sets .env, runs server, tests endpoint).

All code changes complete. User: 1. Visit Claude OAuth URL and get API key. 2. Copy .env.example to .env, add key. 3. Run `npm start`. 4. Test `curl -X POST http://localhost:5000/tasks/ai-generate -H "Content-Type: application/json" -d "{\"prompt\":\"plan a party\"}`.
