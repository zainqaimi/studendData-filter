var student = [
    {
      id: 101,
      details: {
        fname: "zain ul Abdin",
        fatherName: "qaimi",
        Age: 28,
        city: "karachi",
      },
    },
    {
      id: 102,
      details: {
        fname: "Owais",
        fatherName: "qaimi",
        Age: 30,
        city: "islamabad",
        
      },
    },
    {
      id: 103,
      details: {
        fname: "Abu Bakar",
        fatherName: "Madani",
        Age: 26,
        city: "lahor",
      },
    },
    {
      id: 104,
      details: {
        fname: "umair",
        fatherName: "Madani",
        Age: 32,
        city: "fasalabad",
      },
    },
    {
      id: 105,
      details: {
        fname: "Muhammad Shabaz",
        fatherName: "Madani",
        Age: 41,
        city: "multan",
      },
    },
  ]
  let RollNo = document.getElementById('RollNo')
let fname = document.getElementById('fname')
let fathName = document.getElementById('fathName')
let age = document.getElementById('age')
let city = document.getElementById('city')
function addStudent(){
  var std = {
    id: RollNo.value,
    details: {
      fname: fname.value,
      fatherName: fathName.value,
      Age: age.value,
      city: city.value,
    }
    
  }
  student.push(std)
}

  let addData = document.getElementById('addData')
  let mainData = document.getElementById('mainData')
  let rollNo = document.getElementById("rollNo")
// filter's start
for (i = 0 ; i <student.length ; i++){
    rollNo.innerHTML += `<option value="${student[i].id}">${student[i].id}</option>`
    addData.innerHTML += `<tr>
    <td>${student[i].id}</td>
    <td>${student[i].details.fname}</td>
    <td>${student[i].details.fatherName}</td>
    <td>${student[i].details.Age}</td>
    <td>${student[i].details.city}</td></tr>`
  }
rollNo.addEventListener('change',() => {
    var selId = rollNo.value;
    for (i = 0; i < student.length; i++) {
      if (student[i].id === parseInt(selId)) {
        addData.innerHTML = `
      <td>${student[i].id}</td>
      <td>${student[i].details.fname}</td>
      <td>${student[i].details.fatherName}</td>
      <td>${student[i].details.Age}</td>
      <td>${student[i].details.city}</td>`;
        //       var cities = document.getElementById("citiesdrop"); 
        //  cities.value = student[i].details.city    
      }
    }
  })
var studentname = document.getElementById("name");
for (i = 0 ; i <student.length ; i++){
    studentname.innerHTML += `<option value="${student[i].details.fname}">${student[i].details.fname}</option>`
}
studentname.addEventListener('change',function(){
  var selectName = studentname.value
  for (i = 0; i < student.length; i++) {
    if (student[i].details.fname === selectName) {
      addData.innerHTML = `
    <td>${student[i].id}</td>
    <td>${student[i].details.fname}</td>
    <td>${student[i].details.fatherName}</td>
    <td>${student[i].details.Age}</td>
    <td>${student[i].details.city}</td>`;}}
})

var Age = document.getElementById("Age");
for (i = 0 ; i <student.length ; i++){
    Age.innerHTML += `<option value="${student[i].details.Age}">${student[i].details.Age}</option>`
}
Age.addEventListener('change',function(){
  var selAge = Age.value
  console.log(selAge);
  for (i = 0; i < student.length; i++) {
    if (student[i].details.Age === parseInt(selAge)) {
      addData.innerHTML = `
    <td>${student[i].id}</td>
    <td>${student[i].details.fname}</td>
    <td>${student[i].details.fatherName}</td>
    <td>${student[i].details.Age}</td>
    <td>${student[i].details.city}</td>`;
  }}})
var FatherName = document.getElementById("FatherName");
for (i = 0 ; i <student.length ; i++){
    FatherName.innerHTML += `<option value="${student[i].details.fatherName}">${student[i].details.fatherName}</option>`
}
FatherName.addEventListener('change',function(){
  var selfathNm= FatherName.value
  console.log(selfathNm);
  for (i = 0; i < student.length; i++) {
    if (student[i].details.fatherName === selfathNm) {
      addData.innerHTML = `
    <td>${student[i].id}</td>
    <td>${student[i].details.fname}</td>
    <td>${student[i].details.fatherName}</td>
    <td>${student[i].details.Age}</td>
    <td>${student[i].details.city}</td>`;
  }}})


var City = document.getElementById("City");
for (i = 0 ; i <student.length ; i++){
    City.innerHTML += `<option value="${student[i].details.city}">${student[i].details.city}</option>`
}
City.addEventListener('change',() => {
    var selCity = City.value
    for (i = 0; i < student.length; i++) {
      if (student[i].details.city === selCity) {
        addData.innerHTML = `
    <td>${student[i].id}</td>
    <td>${student[i].details.fname}</td>
    <td>${student[i].details.fatherName}</td>
    <td>${student[i].details.Age}</td>
    <td>${student[i].details.city}</td>`
      }
    }
  })
 
// filter's End
