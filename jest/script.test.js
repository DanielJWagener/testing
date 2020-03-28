const googleSearch = require("./script.js");

dbMock = ["dog.com", "cheesepuff.com", "dogpics.com", "lol.com", "nose.come"];

describe("googleSearch", () => {
  it("is searching Google", () => {
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpics.com"]);
    expect(googleSearch("asdfasdf", dbMock)).toEqual([]);
  });

  it("works with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than three matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
