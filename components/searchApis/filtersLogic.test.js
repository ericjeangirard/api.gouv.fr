const filters = require('./filtersLogic');

const time = (callBack, iteration = 1) => {
  const t0 = performance.now();
  for (let i = 0; i < iteration; i++) {
    callBack();
  }
  return performance.now() - t0;
};

test('Performance : 100 search should not exceed 300 milli seconds', () => {
  const t = time(
    () => filters.computeSearchResults(['France', 'France COnnect', 'Geo']),
    100
  );
  expect(t).toBeLessThan(300);
}, 4000);

test('Random search : should never fail', () => {
  const randomString = Math.random().toString(36);
  console.log(randomString);
  console.log(filters.computeSearchResults([randomString]));

  expect(true).toBe(true);
}, 600);
