import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import fetchMock from "fetch-mock";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

import * as actions from "./actions";

const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "woo";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("handles requesting robots API", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("sends API call data to store", done => {
    expect.assertions(1);
    const store = mockStore();

    fetchMock.mock("glob:https://jsonplaceholder.typicode.com/users", {
      data: { name: "Jim" }
    });

    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: { data: { name: "Jim" } }
    };

    store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
      done();
    });
  });

  it("sends errors to store", done => {
    expect.assertions(1);
    const store = mockStore();

    fetchMock.mock("glob:https://jsonplaceholder.typicode.com/users", {
      status: "400",
      throws: new TypeError("Failed to fetch")
    });

    const expectedAction = {
      type: REQUEST_ROBOTS_FAILED,
      payload: new TypeError("Failed to fetch")
    };

    store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
      done();
    });
  });
});
