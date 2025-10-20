# Playwright Workshop Starter

Welcome to the Playwright Workshop! This repository contains exercises and examples to help you learn Playwright testing with TypeScript.

## Quick Start

```bash
# 1) Unpack & enter
unzip pw-workshop.zip && cd pw-workshop
```

### 2) Install Node.js

- Visit: https://nodejs.org
- Download the LTS (Long-Term Support) version
- Install like a regular program (Next → Next → Finish)

Verify installation:

```bash
node -v
```

Install dependencies and browsers:

```bash
npm install
npx playwright install
```

## Workshop Tasks

### 1. Basic Task: Login Test with Page Object Model
Create a login test using the Page Object Model pattern.

**Target URL:** https://the-internet.herokuapp.com/login

**Requirements:**
- Implement Page Object Model
- Create a login test
- Focus on proper page object structure

### 2. Advanced Task: Shopping Cart Testing
Create comprehensive tests for shopping cart functionality.

**Target URL:** https://www.saucedemo.com/

**Requirements:**
- Test adding items to basket
- Verify correct items are added
- Test removing items from basket
- Verify basket is empty after removal
- Focus on page objects

### 3. Enhanced Shopping Cart Test
Extend the shopping cart test with additional functionality.

**Requirements:**
- Randomly select users from a given list for login
- Sort products from low to high price
- Add at least 2 items to cart
- Complete checkout process
- Add appropriate value checking (expect statements) throughout
- Maintain focus on page objects

## Adding Tests During Workshop

Add new `*.spec.ts` files under `tests/` directory or complete the existing `tests/exercises/00-first-test.spec.ts` file.
Add new page objects under `pages/`.

## Available Scripts

- `npm test` - Run tests in headless mode
- `npm run test:ui` - Run tests with Playwright UI
- `npm run report` - Generate test report