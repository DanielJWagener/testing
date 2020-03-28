import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
const mockPropsBase = {
  onRequestRobots: jest.fn(),
  robots: [],
  searchField: "",
  isPending: false
};
beforeEach(() => {
  const mockProps = mockPropsBase;
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const robotMockProps = {
    ...mockPropsBase,
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    serachField: "john"
  };
  const wrapper2 = shallow(<MainPage {...robotMockProps} />);
  expect(wrapper2.instance().filterRobots()).toEqual(robotMockProps.robots);
});
