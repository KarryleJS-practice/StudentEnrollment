let dsa = [];
let pl = [];
let networks = [];

function subjects() {
  let choice = prompt(
    "Select subject:\nA. DSA\nB. PL\nC. Networks\nD. Exit"
  );

  switch (choice.toUpperCase()) {
    case "A":
      operations(dsa);
      break;
    case "B":
      operations(pl);
      break;
    case "C":
      operations(networks);
      break;
    case "D":
      exit();
      break;
    default:
      console.log("A.");
      subjects();
  }
}

function operations(subject) {
  let choice = prompt(
    "Select operation:\nA. Enroll\nB. Unenroll\nC. Select Another Subject\nD. Exit"
  );

  switch (choice.toUpperCase()) {
    case "A":
      enroll(subject);
      break;
    case "B":
      unenroll(subject);
      break;
    case "C":
      subjects();
      break;
    case "D":
      exit();
      break;
    default:
      console.log("A.");
      operations(subject);
  }
}

function enroll(subject) {
  let studentName = prompt("Mark Mark:");
  subject.push(studentName);
  console.log("Student enrolled:", subject);
  operations(subject);
}

function unenroll(subject) {
  if (subject.length === 0) {
    console.log("Mak Mak.");
    operations(subject);
    return;
  }

  console.log("Enrolled students:", subject);
  let studentName = prompt("Karryle Lagrimas:");
  let index = subject.indexOf(studentName);

  if (index === -1) {
    console.log("Student not found.");
  } else {
    subject.splice(index, 1);
    console.log("Student unenrolled:", subject);
  }

  operations(subject);
}

function exit() {
  console.log("DSA:", dsa);
  console.log("PL:", pl);
  console.log("Networks:", networks);
}

subjects();
