import { test } from '@bigtest/suite';

import { Pane, Button, Heading, NavButton, Authenticate } from './interactors';

const SearchTab = locator => Pane('Search & filter').find(Button(locator));

export default test('Basic Test')
  .step('authenticate', Authenticate('diku_admin', 'admin'))
  .assertion('Welcome message visible', async () => {
    await Heading('Welcome, the Future Of Libraries Is OPEN!').exists();
  })

  .child('navigating to courses via the navigation bar', test => test
    .step('clicking on the courses nav button', () => NavButton('Courses').click())
    .assertion('it shows the "courses" pane', () => Pane('Courses').exists())
    .assertion('it has a new course button', () => Button('Create course').exists())
    .assertion('the courses search is selected', () => SearchTab('Courses').is({ selected: true }))
    .assertion('the reserves search is not selected', () => SearchTab('Reserves').is({ selected: false }))

    .child('navigating to the reserves tab', test => test
      .step('clicking on the reserves search tab', () => SearchTab('Reserves').click())
      .assertion('it navigates to the reserves pane', () => Pane('Reserves').exists())
      .assertion('the reserves tab is selected', () => SearchTab('Reserves').is({ selected: false }))
      .assertion('the coursese tab is unselected', () => SearchTab('Courses').is({ selected: false }))));
