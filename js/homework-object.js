"use strict";
// просто об'єкт:

// let user1 = {
//   name: "leonid",
//   surName: "Shevchenko",
//   isMale: true,
//   countOfMessage: 5,

// userData: function () {
//   return (
//     "Користувач " +
//     this.name +
//     " " +
//     this.surName +
//     " стать:" +
//     this.isMale +
//     " Написав повідомлень: " +
//     this.countOfMessage
//   );
// },
//   textOfMessage: function (text) {
//     this.countOfMessage++;
//     return (
//       "Користувач " +
//       this.name +
//       " написав:" +
//       text +
//       "Кількість повідомлень:" +
//       this.countOfMessage
//     );
//   },
// };
// user1.userData();
// user1.textOfMessage("Good evening");

//Функція конструктор

function User(name, surName, isMale, countOfMessage, userData, textOfMessage) {
  let newUser = { name, surName, isMale, countOfMessage };

  textOfMessage = function (text) {
    this.countOfMessage++;
    return (
      "Користувач " +
      this.name +
      " написав:" +
      text +
      "Кількість повідомлень:" +
      this.countOfMessage
    );
  };
  userData = function () {
    return (
      "Користувач " +
      this.name +
      " " +
      this.surName +
      " стать:" +
      this.isMale +
      " Написав повідомлень: " +
      this.countOfMessage
    );
  };

  return newUser;
}
const user1 = new User("Leonid", "Shevchenko", true, 1);
//Як викликати тут функцію? Чи може взагалі не правильно
