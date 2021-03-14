/* eslint-disable no-undef */
/**
 *
 * Tests for Keeper
 *
 *
 */

import React from "react";
import { renderProvider } from "../../utils/testUtils";
import { AppTest as Game } from "../App";

describe("<Game Keeper /> container tests", () => {
  beforeEach(() => {});
  it("should render and match the snapshot", () => {
    const { baseElement } = renderProvider(<Game />);
    expect(baseElement).toMatchSnapshot();
  });
});
