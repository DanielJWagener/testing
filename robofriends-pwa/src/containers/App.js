import React from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

import MainPage from "../components/MainPage";

import "./App.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

const App = props => <MainPage {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(App);
