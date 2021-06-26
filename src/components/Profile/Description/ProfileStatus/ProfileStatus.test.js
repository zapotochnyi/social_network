import React from "react";
import TestRenderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

//повернися до теми тестів і виріши баг з cтворенням компонентів
describe("ProfileStatus tests", () => {
   test("status from props must be in the state", () => {
       let component = TestRenderer.create(<ProfileStatus status="new status!!!" />)
       const instance = component.getInstance();
       expect(instance.state.status).toBe('new status!!!');
   })
});