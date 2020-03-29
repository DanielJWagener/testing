import { shallow, mount } from "enzyme";
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
    searchField: "john"
  };
  const wrapper2 = shallow(<MainPage {...robotMockProps} />);
  expect(wrapper2.instance().filterRobots()).toEqual(robotMockProps.robots);
});

it("filters robots correctly 2", () => {
  const robotMockProps = {
    ...mockPropsBase,
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "a"
  };

  const wrapper3 = shallow(<MainPage {...robotMockProps} />);
  expect(wrapper3.instance().filterRobots()).toEqual([]);
});

it("renders a loading screen", () => {
  const pendingMockProps = {
    ...mockPropsBase,
    isPending: true
  };
  const wrapper4 = shallow(<MainPage {...pendingMockProps} />);

  const loading = wrapper4.find('[id="mainPageLoading"]');

  expect(loading.props().children).toEqual("Loading");
});
