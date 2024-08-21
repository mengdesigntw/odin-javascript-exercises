const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  for (let person of people) {
    if (!person.yearOfDeath) person.yearOfDeath = currentYear;
  }
  const sorted = people.sort(function (last, next) {
    const lastAge = last.yearOfDeath - last.yearOfBirth;
    const nextAge = next.yearOfDeath - next.yearOfBirth;
    if (lastAge > nextAge) return -1;
    return 1;
  });
  return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
