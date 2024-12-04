'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pungutans', [
      {
        nama: 'Pungutan 1',
        nilai: 1000,
        biayaTambahan: 100,
        biayaPengurangan: 50,
        voluntaryDeclaration: 100,
        nilaiAsuransi: 100,
        freight: 100,
        kurs: 1200,
        fob: 1150,
        cif: 1350,
        cifRp: 1620000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Pungutan 2',
        nilai: 2000,
        biayaTambahan: 200,
        biayaPengurangan: 100,
        voluntaryDeclaration: 20,
        nilaiAsuransi: 200,
        freight: 200,
        kurs: 1401,
        fob: 2120,
        cif: 2520,
        cifRp: 3530520,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pungutans', null, {});
  }
};
