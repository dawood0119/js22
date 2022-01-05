// var student = {
//   name: 'Dawood',
//   fathername: 'kamran',
//   age: '18',
// };

// student.name = 'moosa';.............. for renaming
// delete student.age................... for deleting something\

// console.log(student);

var student1 = {
  rollnumber: "1",
  firstName: "Dawood",
  lastName: "yousuf",
  //   age: "18",
  isClearedInAllSubjects: true,
  //   phoneNumber: "03222747574",
  //   emailAddress: "dawood yousuf103@gmail.com",
};

var student2 = {
  rollnumber: "2",
  firstName: "Moosa",
  lastName: "yousuf",
  //   age: "18",
  isClearedInAllSubjects: true,
  //   phoneNumber: "03222747574",
  //   emailAddress: "moosayousuf103@gmail.com",
};

var student3 = {
  rollnumber: "3",
  firstName: "ali",
  lastName: "yousuf",
  //   age: "18",
  isClearedInAllSubjects: true,
  //   phoneNumber: "03222747574",
  //   emailAddress: "aliyousuf103@gmail.com",
};

var student4 = {
  rollnumber: "4",

  firstName: "sonu",
  lastName: "yousuf",
  //   age: "18",
  isClearedInAllSubjects: false,
  //   phoneNumber: "03222747574",
  //   emailAddress: "sonuyousuf103@gmail.com",
};

var student5 = {
  rollnumber: "5",

  firstName: "waris",
  lastName: "yousuf",
  //   age: "18",
  isClearedInAllSubjects: false,
  //   phoneNumber: "03222747574",
  //   emailAddress: "warisyousuf103@gmail.com",
};
var a = [student1, student2, student3, student4, student5];
for (var i = 0; i < a.length; i++) {
  a[i].id = i + 1;
  console.log(a[i]);
}

var table_result = document.getElementById("studentdata");
var tbody_result = table_result.getElementsByTagName("tbody")[0];

for (var i = 0; i < a.length; i++) {
  row = tbody_result.insertRow();
  td1 = row.insertCell();
  td2 = row.insertCell();
  td3 = row.insertCell();
  td4 = row.insertCell();
  td1.innerHTML = a[i].id;
  td2.innerHTML = a[i].firstName;
  td3.innerHTML = a[i].lastName;
  td4.innerHTML = a[i].isClearedInAllSubjects;
}

// console.log(student1, student2, student3, student4, student5);
