const request = require('supertest');

const app = require('../../src/app');

test('healthcheck', async () => {
  const res = await request(app).get('/users/api/healthcheck');

  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('status', 'ok');
});
