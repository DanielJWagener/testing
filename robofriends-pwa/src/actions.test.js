import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import { apiCall } from "./api/api";
import nock from "nock";

import fetch from "node-fetch";

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
  it("handles requesting robots API", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction);
  });

  // CODE IN QUESTION STARTS HERE:
  it("sends API call data to store", done => {
    expect.assertions(1);
    const store = mockStore();

    // ONLY RETURNS [TypeError: Network request failed]
    const robotsDB = nock("https://jsonplaceholder.typicode.com/users")
      .get("/")
      .reply(
        200,
        {
          data: { name: "Jim" }
        },
        {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json"
        }
      );

    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: { data: { name: "Jim" } }
    };

    store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction);
      done();
      robotsDB.isDone();
    });
  });
});
