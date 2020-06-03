// todo
// get all students
// display all of them
// profit
import utils from '../../helpers/utils';

import studentData from '../../helpers/data/studentData';

import './studentList.scss';


const createStudentList = () => {
  const allStudents = studentData.getStudents();
  let domString = '<ul class="student-list">';

  allStudents.forEach((student) => {
    domString += `<li>${student.name}</li>`;
  });

  domString += '</ul>';

  utils.printToDom('#all-students', domString);
};

export default { createStudentList };
