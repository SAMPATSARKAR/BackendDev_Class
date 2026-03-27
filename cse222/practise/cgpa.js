const fs = require("fs");
const readline = require("readline");

const studentsFile = "students.json";
const usersFile = "users.json";

if (!fs.existsSync(studentsFile)) fs.writeFileSync(studentsFile, "[]");
if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, "[]");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomId() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function loadStudents() {
  return JSON.parse(fs.readFileSync(studentsFile));
}

function saveStudents(data) {
  fs.writeFileSync(studentsFile, JSON.stringify(data, null, 2));
}

function loadUsers() {
  return JSON.parse(fs.readFileSync(usersFile));
}

function saveUsers(data) {
  fs.writeFileSync(usersFile, JSON.stringify(data, null, 2));
}

function grade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

function mainMenu(user) {
  console.clear();
  console.log(`Welcome ${user.name}`);
  console.log("1 Create Record");
  console.log("2 Search Record");
  console.log("3 Modify Record");
  console.log("4 Delete Record");
  console.log("5 Display Records");
  console.log("6 Logout");

  rl.question("Choice: ", c => {

    switch (c) {
      case "1": createRecord(user); break;
      case "2": searchRecord(user); break;
      case "3": modifyRecord(user); break;
      case "4": deleteRecord(user); break;
      case "5": displayRecords(user); break;
      case "6": start(); break;
      default: mainMenu(user);
    }

  });
}

function createRecord(user) {

  rl.question("Student name: ", name => {

    rl.question("Attendance: ", att => {
      rl.question("CA: ", ca => {
        rl.question("Midterm: ", mte => {
          rl.question("Endterm: ", ete => {

            const students = loadStudents();

            students.push({
              id: randomId(),
              name,
              att: parseFloat(att),
              ca: parseFloat(ca),
              mte: parseFloat(mte),
              ete: parseFloat(ete)
            });

            saveStudents(students);

            console.log("Record created");
            mainMenu(user);

          });
        });
      });
    });

  });
}

function searchRecord(user) {

  rl.question("Enter student ID: ", id => {

    const students = loadStudents();

    const s = students.find(x => x.id == id);

    if (!s) console.log("Not found");
    else {

      const avg = (s.att + s.ca + s.mte + s.ete) / 4;

      console.log(s);
      console.log("Grade:", grade(avg));
    }

    mainMenu(user);

  });
}

function modifyRecord(user) {

  rl.question("ID to modify: ", id => {

    let students = loadStudents();

    const index = students.findIndex(x => x.id == id);

    if (index === -1) {
      console.log("Not found");
      mainMenu(user);
      return;
    }

    rl.question("New Attendance: ", att => {
      rl.question("New CA: ", ca => {
        rl.question("New MTE: ", mte => {
          rl.question("New ETE: ", ete => {

            students[index].att = parseFloat(att);
            students[index].ca = parseFloat(ca);
            students[index].mte = parseFloat(mte);
            students[index].ete = parseFloat(ete);

            saveStudents(students);

            console.log("Record modified");

            mainMenu(user);

          });
        });
      });
    });

  });
}

function deleteRecord(user) {

  rl.question("ID to delete: ", id => {

    let students = loadStudents();

    students = students.filter(s => s.id != id);

    saveStudents(students);

    console.log("Record deleted");

    mainMenu(user);

  });
}

function displayRecords(user) {

  const students = loadStudents();

  students.forEach(s => {

    const avg = (s.att + s.ca + s.mte + s.ete) / 4;

    console.log(
      s.id,
      s.name,
      s.att,
      s.ca,
      s.mte,
      s.ete,
      grade(avg)
    );

  });

  mainMenu(user);
}

function register() {

  rl.question("Name: ", name => {

    rl.question("Password: ", pass => {

      const users = loadUsers();

      const id = randomId() + "@" + name;

      users.push({ id, name, pass });

      saveUsers(users);

      console.log("Your ID:", id);

      start();

    });

  });
}

function login() {

  rl.question("ID: ", id => {

    rl.question("Password: ", pass => {

      const users = loadUsers();

      const user = users.find(u => u.id === id && u.pass === pass);

      if (!user) {
        console.log("Invalid login");
        start();
      }
      else {
        mainMenu(user);
      }

    });

  });
}

function start() {

  console.clear();

  console.log("*** CA Evaluator System ***");
  console.log("1 Register");
  console.log("2 Login");
  console.log("3 Exit");

  rl.question("Choice: ", c => {

    if (c === "1") register();
    else if (c === "2") login();
    else process.exit();

  });

}

start();