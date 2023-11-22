"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userId: 1,
          userName: "Some",
          userEmail: "123@mail.ru",
          password: "123",
          phone: "+74955555555",
          firstName: "Nick",
          lastName: "Luis",
          role: "klient",
          age: 30,

        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
	await queryInterface.bulkDelete("Users", null, {});
 },
};
