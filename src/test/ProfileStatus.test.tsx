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

})