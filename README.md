# Unit Test

## About
- use jest to unit test simple functions

### Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

### Then, create a file named `sum.test.js`. This will contain our actual test:
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### Add the following section to your `package.json`:
```
{
  "scripts": {
    "test": "jest"
  }
}
```

### Finally, `npm run test` and Jest will print this message:

## To learn more about jest
Visit `https://jestjs.io/docs/getting-started`
## Getting started
- git clone repository
- run `npm install`
- Explore the world of testing 😉😊