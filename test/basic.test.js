import { test } from "@bigtest/suite";
import { bigtestGlobals } from "@bigtest/globals";
import { App } from "@bigtest/interactor";
import localforage from 'localforage';

import { Input, Button, Heading, NavButton, Authenticate } from './interactors';

export default test('Basic Test')
  .step('authenticate', Authenticate('diku_admin', 'admin'))
  .assertion('Welcome message visible', async () => {
    await Heading('Welcome, the Future Of Libraries Is OPEN!').exists();
  })
  .child('navigating to courses via the navigation bar', test => test
         .step("clicking on the courses nav button", () => NavButton("Courses").click()))
  .child('the course app', test => test
         .step("visit /courses", () => App.visit('/courses')));
