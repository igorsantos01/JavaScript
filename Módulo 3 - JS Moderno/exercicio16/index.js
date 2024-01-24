const dayjs = require("dayjs");

const person = {
  name: "Igor S.",
  dateOfBirth: "2001-12-27",
};

const displayBirthday = ({ dateOfBirth }) => {
  const { name } = person;
  const birth = dayjs(dateOfBirth);
  const age = dayjs().diff(birth, "year") + 1;
  const nextBirth = birth.add(age, "year").format("DD / MM / YYYY");
  console.log(`${name} fará ${age} anos no dia ${nextBirth}`);
};

displayBirthday(person);
