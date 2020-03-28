import { shallow } from "enzyme";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

it("renders ErrorBoundary component", () => {
  expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});
