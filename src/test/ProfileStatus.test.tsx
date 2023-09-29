import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "../components/Profile/ProfileStatus";

describe("ProfileStatus component", () => {
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={() => {}}/>);
    const root = component.root;
    let span = root.findByType("span").instance;
    expect(span.length).toBe(1);
  });
  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={() => {}}/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });
})