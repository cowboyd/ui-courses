import { test } from '@bigtest/suite';
import { Accordion, Card, Input, Button, Key, Pane, Table, TableCell, Authenticate } from './interactors';


export default test('UI Courses')
  .step('authenticate', Authenticate('diku_admin', 'admin'))
  .step('visit courses', () => Button('Courses').click())
  .child('Searching courses', test => test
    .step('executing a search for "calcu"', async () => {
      await Input.byAriaLabel('Search courses').type('calcu');
      await Button('Search').click();
    })
    .assertion('has three records', () => Table.byId('list-courses').has({ length: 3 }))
    .assertion('indicates there are three records', () => Pane('Courses').has({ subtitle: '3 records found' }))
    .assertion('has three calculus records', async () => {
      await TableCell('Calculus 101').exists();
      await TableCell('Calculus 201').exists();
      await TableCell('Calculus 301').exists();
    })
    .child('reseting filters', test => test
      .step('click the reset button', () => Button('Reset all').click())
      .assertion('it restores the original records', () => Pane('Courses').has({ subtitle: '5 records found' }))))
  .child('filtering by department', test => test
    .step('selecting Mathmatics', async () => {
      await Accordion('Department').toggle();
      await Accordion('Department').select('Mathematics');
    })
    .assertion('there are 4 records', () => Pane('Courses').has({ subtitle: '4 records found' })))
  .child('filtering by course type', test => test
    .step('selecting Online and Online/In-Person', async () => {
      await Accordion('Course type').toggle();
      await Accordion('Course type').select('Online');
      await Accordion('Course type').select('Online/In person');
    })
    .assertion('there are 4 records', () => Pane('Courses').has({ subtitle: '4 records found' })))
  .child('filtering by term', test => test
    .step('selecting Michaelmas 2019', async () => {
      await Accordion('Term').toggle();
      await Accordion('Term').select('Michaelmas 2019');
    })
    .assertion('there is 1 record', () => Pane('Courses').has({ subtitle: '1 record found' })))
  .child('inspecting a single record', test => test

    .step('selecting the record', () => TableCell('Calculus 101').click())
    .assertion('shows the course card', () => Card('Calculus 101').exists())
    .assertion('shows the detail card', () => Card('Calculus 101').exists())
    .assertion('shows the department card', () => Card('Calculus 101').exists())
    .assertion('shows the location card', () => Card('Calculus 101').exists())
    .assertion('shows the instructors', () => Card('Calculus 101').exists())
    .assertion('shows the term', () => Card('Calculus 101').exists())
    .assertion('shows the items details', async () => {
      await Card('Item title:  A semantic web primer').exists();
      await Card('Item title:  A semantic web primer')
        .find(Key('Permanent location')).has({ value: 'Main Library' });
      await Card('Item title:  A semantic web primer')
        .find(Key('Call number')).has({ value: 'TK5105.88815 . A58 2004 FT MEADE' });
    }));



// Column("Course name").has({ first: 'Calculus 101' });
// Column("Course name").has({ first: 'Calculus 301' });
