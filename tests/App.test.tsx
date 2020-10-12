import React from "react";
import { App } from "../src/App";
import { shallow, mount } from "enzyme";

describe("App.tsx - basics", () => {
  test("Shallow mounts", () => {
    shallow(<App />);
  });

  test("Full mounts", () => {
    mount(<App />);
  });
});

describe("App.tsx - behavior", () => {
  test.skip("Print layout", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  })

  test("No selection by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".column-selected").length).toBe(0);
    expect(wrapper.find('.ghost-name').length).toBe(12);
    expect(wrapper.find('.row-crossed-out').length).toBe(0);
  });

  test("Can select evidence", () => {
    const wrapper = shallow(<App />);
    let spiritBoxColumn = wrapper.find('th.cursor-pointer').first();
    expect(spiritBoxColumn.text()).toBe("Spirit Box");
    expect(spiritBoxColumn.hasClass("cursor-pointer")).toBe(true);
    expect(spiritBoxColumn.hasClass("column-selected")).toBe(false);

    spiritBoxColumn.simulate('click');

    spiritBoxColumn = wrapper.find('th.cursor-pointer').first();
    expect(spiritBoxColumn.hasClass("cursor-pointer")).toBe(true);
    expect(spiritBoxColumn.hasClass("column-selected")).toBe(true);
  });

  test("Selecting evidence crosses out rows", () => {
    const wrapper = shallow(<App />);
    const spiritBoxColumn = wrapper.find('th.cursor-pointer').first();
    spiritBoxColumn.simulate('click');
    expect(wrapper.find('.row-crossed-out').length).toBe(5);
  });
});
