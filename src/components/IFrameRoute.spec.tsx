import React from "react";

import mount from "tests/utils/testMount";
import IFrameRoute from "./IFrameRoute";

describe("IFrameRoute", () => {
  it("renders an <iframe> element for the given route", () => {
    mount(<IFrameRoute name="test" iframeTargetUrl="http://example.com" />);

    cy.get("iframe").should("have.attr", "name", "test");
    cy.get("iframe").should("have.attr", "src", "http://example.com");
  });
});
