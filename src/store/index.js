import {createStore, reducer} from 'easy-peasy';
import {persist} from 'easy-peasy';
import user from './models/user';
import student from './models/student';
import teacher from './models/teacher';

const store = createStore(
  persist({
    user,
    student,
    teacher,
  }),
  {
    disableImmer: true,
  },
);

export default store;
