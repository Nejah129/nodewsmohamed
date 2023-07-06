const findeUser = (tab, userName) => {
  return tab.filter((el) => el.name === userName)
    ? `welcome ${userName}`
    : `${userName} , your are not on the list`;
};

const AgeMoy = (arr) =>arr.map((el) => el.age).reduce((acc, curr) => acc + curr) / arr.length;

module.exports = {findeUser,AgeMoy};
