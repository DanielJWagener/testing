import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

it("renders Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
