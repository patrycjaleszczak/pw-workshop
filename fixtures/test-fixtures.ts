import { test as base } from '@playwright/test';

type Fixtures = {
  apiBase: string;
};

export const test = base.extend<Fixtures>({
  apiBase: async ({}, use) => {
    await use('https://api.example.com');
  },
});
export const expect = test.expect;
