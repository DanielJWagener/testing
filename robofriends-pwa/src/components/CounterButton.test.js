import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("renders CounterButton component", () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});
