const request = require('supertest');

const app = require('../../src/app');

test('healthcheck', async () => {
  const { status, body } = await request(app).get('/users/api/healthcheck');

  expect(status).toBe(200);
  expect(body).toHaveProperty('status', 'ok');

  expect(body).toHaveProperty('database');
  expect(body.database).not.toBe('disconnecting');
  expect(body.database).not.toBe('disconnected');
});
