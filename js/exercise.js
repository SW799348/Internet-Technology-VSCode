//exercise

getStudentMarks("sama", 92);
getStudentMarks("sama", 73);
getStudentMarks("sama", 78);
getStudentMarks("sama", 100);
getStudentMarks("sama", 12);
getStudentMarks("sama", 38);
getStudentMarks("sama", 59);
getStudentMarks("sama", 62);
getStudentMarks("sama", -10);

function checkGrades(mark) {
  let grade;
  if (mark < 0) {
    grade = "invalid marks";
  } else if (mark < 35) {
    grade = "F";
  } else if (mark < 54) {
    grade = "S";
  } else if (mark < 64) {
    grade = "C";
  } else if (mark < 74) {
    grade = "B";
  } else if (mark < 79) {
    grade = "A";
  } else if (mark < 89) {
    grade = "A-";
  } else if (mark <= 100) {
    grade = "A+";
  }

  return grade;
}

function getStudentMarks(name, mark) {
  const grade = checkGrades(mark);
  console.log(name, "s grade for ", mark, "-->", grade);
}

console.log("========================== sir =========================================================================");

let studentArray = [
    {
        name: 'kamal',
        marks:92
    },
    {
        name: 'namal',
        marks:73
    },
    {
        name: 'kamal',
        marks:78
    },
    {
        name: 'kamal',
        marks:100
    },
    {
        name: 'kamal',
        marks:100
    },
    {
        name: 'kamal',
        marks:12
    },
    {
        name: 'kamal',
        marks:38
    },
    {
        name: 'kamal',
        marks:59
    },
    {
        name: 'kamal',
        marks:62
    },
    {
        name: 'kamal',
        marks:-10
    },

]

function checkGrade(mark) {
    if (mark >= 90 && mark <= 100) {
      return "A+";
    } else if (mark >= 80 && mark <= 89) {
      return "A+";
    } else if (mark >= 75 && mark <= 79) {
      return "A-";
    } else if (mark >= 65 && mark <= 74) {
      return "A";
    } else if (mark >= 55 && mark <= 64) {
      return "B";
    } else if (mark >= 35 && mark <= 54) {
      return "C";
    } else if (mark <= 35 && mark > 0) {
      return "S";
    } else if (mark=== 0) {
      return "f";
    } else if (mark < 0) {
      return "invalid mark";
    }
  }
  
