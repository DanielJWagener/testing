import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

it("renders SearchBox component", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
