const findTheOldest = function (arr) {
  let max = 0;
  let resultName;
  arr.forEach((person) => {
    oldest = getAge(person.yearOfBirth, person.yearOfDeath);
    if (oldest > max) {
      max = oldest;
      resultName = person;
    }
  });
  //given a array with people,
  //compare their age with others
  //if a death year is not decleared, calculate their age using today's year - birthyear
  //return the person with greater age
  return resultName;
};

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
