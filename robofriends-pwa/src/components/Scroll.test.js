import { shallow } from "enzyme";
import React from "react";
import Scroll from "./Scroll";

it("renders Scroll component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
