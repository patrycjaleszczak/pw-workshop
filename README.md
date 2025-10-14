# Playwright Workshop Starter

Minimal scaffold ready for your attendees. Covers steps 1–5 from the setup guide.

## What’s included
- Node project with Playwright as a dev dependency (install step needed)
- TypeScript, ESLint, Prettier
- Basic `playwright.config.ts`
- Example smoke test + empty exercise
- Handy npm scripts

## Quick start
```bash
# 1) unpack & enter
unzip pw-workshop.zip && cd pw-workshop

# 2) install deps & browsers
npm install
npx playwright install

# 3) run tests
npm test
npm run test:ui
npm run report
```

## Add tests during the workshop
Add new `*.spec.ts` files under `tests/` or complete `tests/exercises/00-first-test.spec.ts`.

## Lint & format
```bash
npm run lint
npm run format
```
