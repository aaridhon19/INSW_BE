'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pungutans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nilai: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      biayaTambahan: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0
      },
      biayaPengurangan: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0
      },
      voluntaryDeclaration: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0
      },
      nilaiAsuransi: {
        type: Sequelize.FLOAT, 
        allowNull: true,
        defaultValue: 0
      },
      freight: {
        type: Sequelize.FLOAT,  
        allowNull: true,
        defaultValue: 0
      },
      kurs: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 1
      },
      fob: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      cif: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      cifRp: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pungutans');
  }
};