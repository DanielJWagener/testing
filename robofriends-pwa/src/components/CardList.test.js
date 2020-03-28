import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("renders CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jon Snow",
      username: "JonJon",
      email: "jon@gmail.com"
    },
    {
      id: 2,
      name: "Ramsey Snow",
      username: "RamseyRamsey",
      email: "Ramsey@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
