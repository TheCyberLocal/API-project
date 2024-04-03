"use strict";

const { Review } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  // define your schema in options object
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Review.bulkCreate(
      [
        {
          id: 1,
          spotId: 1,
          userId: 1,
          review: "The best home I ever bought.",
          stars: 5,
        },
        {
          id: 2,
          spotId: 2,
          userId: 2,
          review: "This home is the best.",
          stars: 5,
        },
        {
          id: 3,
          spotId: 3,
          userId: 3,
          review: "I admired the vivid mountainous landscape.",
          stars: 5,
        },
        {
          id: 4,
          spotId: 1,
          userId: 2,
          review: "I liked my own home better, but it had a pretty view.",
          stars: 3,
        },
        {
          id: 5,
          spotId: 1,
          userId: 3,
          review: "I didn't have much taste for the architecture.",
          stars: 4,
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options, null, {});
  },
};