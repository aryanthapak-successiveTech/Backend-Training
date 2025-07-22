import { test, expect } from '@playwright/test';

test('API returns correct assignment data', async ({ request }) => {
  const response = await request.get('http://localhost:8000/api/v1/assignments/assignment-2?limit=1&page=1');
  expect(response.ok()).toBeTruthy();

  const json = await response.json();
  expect(json.status).toBe('Successful');
  expect(json.data[0].name).toBe('Leanne Graham');
});
