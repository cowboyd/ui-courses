import { test } from '@bigtest/suite';
import { Input, Button, Pane, Table, Authenticate } from './interactors';


export default test('UI Courses')
  .step('authenticate', Authenticate('diku_admin','admin'))
  .step('visit courses', () => Button('Courses').click())
  .child('Searching courses', test => test
    .step('executing a search for "calcu"', async () => {
      await Input.byAriaLabel('Search courses').type('calcu');
      await Button('Search').click();
    })
    .assertion('has three records', () => Table.byId('list-courses').has({ length: 3 }))
    .assertion('indicates there are three records', () => Pane('Courses').has({ subtitle: '3 records found' })));
