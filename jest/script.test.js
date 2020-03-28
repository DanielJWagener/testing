const googleSearch = require("./script.js");

dbMock = ["dog.com", "cheesepuff.com", "dogpics.com"];

it("is searching Google", () => {
  expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpics.com"]);
  expect(googleSearch("asdfasdf", dbMock)).toEqual([]);
});
