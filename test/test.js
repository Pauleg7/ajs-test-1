import getLevelHealth from '../src/js/app';

const user = [
  {name: 'Маг', health: 90},
  {name: 'Маг', health: 30},
  {name: 'Маг', health: 15}
]

test('should healthy', () => {
  const expected = 'healthy';  
  const received = getLevelHealth(user[0]);

  expect(received).toBe(expected);
});

test('should wounded', () => {
  const expected = 'wounded';  
  const received = getLevelHealth(user[1]);

  expect(received).toBe(expected);
});

test('should critical', () => {
  const expected = 'critical';  
  const received = getLevelHealth(user[2]);

  expect(received).toBe(expected);
});

