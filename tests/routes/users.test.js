const request = require('supertest');

const app = require('../../src/app');

test('users', async () => {
  const { status, body } = await request(app).post('/users/api/users')
    .send({ username: 'firstuser', password: '123' });

  expect(status).toBe(200);
  expect(body).toHaveProperty('username', 'firstuser');
});
