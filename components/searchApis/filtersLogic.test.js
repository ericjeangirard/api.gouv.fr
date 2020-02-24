const computeSearchResults = require('./filtersLogic');

const time = (callBack, iteration = 1) => {
  const t0 = performance.now();
  for (i = 0; i < iteration; i++) {
    callBack();
  }
  return performance.now() - t0;
};

test('Performance', () => {
  expect(time(() => computeSearchResults('heeey'), 10)).toBeLesserThan(3000);
});
