import { Notes } from '@core/models/user.model';
import moment from 'moment';

const coachName = 'James';

const mockText1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque erat in lacinia ullamcorper.';
const mockText2 =
  'Vivamus sed lacus eget mi sollicitudin vehicula. Nunc nec laoreet leo, a rutrum diam.';
const mockText3 =
  'Vivamus dictum nisi in auctor lobortis. Quisque cursus vehicula nulla ac ornare. Praesent id tincidunt neque.';
const mockText4 =
  'Praesent vehicula, tellus nec fringilla mollis, nisl neque mollis erat, in condimentum metus sapien ac metus.';
const mockText5 =
  'Cras pulvinar, ipsum id sagittis condimentum, orci quam eleifend enim, id fringilla eros lectus id quam.';

const date = moment('1/1/2022');

const notesMock: Notes[] = [
  {
    coachName: coachName,
    content: mockText1,
    createdAt: date.toDate(),
    isFlagged: false,
  },
  {
    coachName: coachName,
    content: mockText2,
    createdAt: date.add(2, 'days').toDate(),
    isFlagged: true,
  },
  {
    coachName: coachName,
    content: mockText3 + mockText4,
    createdAt: date.add(2, 'days').toDate(),
    isFlagged: false,
  },
  {
    coachName: coachName,
    content: mockText4,
    createdAt: date.add(4, 'days').toDate(),
    isFlagged: false,
  },
  {
    coachName: coachName,
    content: mockText5,
    createdAt: date.add(3, 'days').toDate(),
    isFlagged: true,
  },
];

export const mockNotesByPatient = [
  {
    patientId: '111',
    notes: notesMock,
  },
  {
    patientId: '222',
    notes: notesMock,
  },
];
