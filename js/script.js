import users from "./users.js";

// <<-- Завдання 1 -->>
// Отримати масив імен всіх користувачів (поле name).

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));

// <<-- Завдання 2 -->>
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// <<-- Завдання 3 -->>
// Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log(getUsersWithGender(users, "male"));

// <<-- Завдання 4 -->>
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users));

// <<-- Завдання 5 -->>
// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// <<-- Завдання 6 -->>
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

// <<-- Завдання 7 -->>
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users));

// <<-- Завдання 8 -->>
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// <<-- Завдання 9 -->>
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  return [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// <<-- Завдання 10 -->>
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = (users) => {
  return users
    .reduce(function (acc, user) {
      user.skills.forEach((skill) => {
        if (!acc.includes(skill)) {
          acc.push(skill);
        }
      });
      return acc;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
