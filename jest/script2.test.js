const fetch = require("node-fetch");
const swapi = require("./script2");

const expectedCount = 87;
const minExpectedLength = 5;

it("calls swapi to get people", done => {
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(expectedCount);
    done();
  });
});

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(expectedCount);
    expect(data.results.length).toBeGreaterThan(minExpectedLength);
  });
});

it("has getPeople return count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: expectedCount,
          results: [0, 1, 2, 3, 4, 5, 7]
        })
    })
  );

  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
    expect(data.count).toEqual(expectedCount);
    expect(data.results.length).toBeGreaterThan(minExpectedLength);
  });
});
