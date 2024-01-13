const person = {
  name: "Robert",
  age: 16,
  occupation: "Student",
  parents: ["Ronald", "Maria"],
};

const { name, occupation, age, parents } = person;
console.log(name, occupation, age);

const [father, mother] = parents;
console.log(father, mother);

function createStudent({ name, occupation, parents }) {
  const classRoom = `${Math.floor(Math.random() * 9)}A`;
  return {
    name,
    classRoom,
    occupation,
    parents,
  };
}

const robert = createStudent(person);
console.log(robert);
