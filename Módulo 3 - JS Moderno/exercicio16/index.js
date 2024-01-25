const dayjs = require("dayjs");

const person = {
  name: "Igor S.",
  dateOfBirth: "2001-12-27",
};

const displayBirthday = ({ dateOfBirth }) => {
  const { name } = person;
  const today = dayjs();

  const birth = dayjs(dateOfBirth);
  const age = today.diff(birth, "year");
  const nextBirth = birth.add(age + 1, "year");
  const daysOfNextBirth = nextBirth.diff(today, "day");

  console.log(
    `${name} tem ${age} anos e fará ${age + 1} no dia ${nextBirth.format(
      "DD / MM / YYYY"
    )}. Faltam ${daysOfNextBirth} dias.`
  );
};

displayBirthday(person);
