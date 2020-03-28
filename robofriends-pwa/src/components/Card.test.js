import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("renders Card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
