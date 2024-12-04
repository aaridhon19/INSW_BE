const { Pungutan } = require("../models/index");

class PungutanController {
    static async createPungutan(req, res, next) {
        try {
            const { nama, nilai, biayaTambahan, biayaPengurangan, voluntaryDeclaration, nilaiAsuransi, freight, kurs } = req.body;
            if (!nama || !nilai || !biayaTambahan || !biayaPengurangan || !voluntaryDeclaration || !nilaiAsuransi || !freight || !kurs) {
                throw { name: "validation_input" };
            }
            const fob = nilai + biayaTambahan - biayaPengurangan + voluntaryDeclaration;
            const cif = fob + nilaiAsuransi + freight;
            const cifRp = cif * kurs;

            const newPungutan = await Pungutan.create({
                nama,
                nilai,
                biayaTambahan,
                biayaPengurangan,
                voluntaryDeclaration,
                nilaiAsuransi,
                freight,
                kurs,
                fob,
                cif,
                cifRp
            });
            res.status(201).json({ msg: "Data Pungutan Berhasil Ditambahkan", newPungutan });
        } catch (err) {
            next(err);
        }
    }

    static async getPungutan(req, res, next) {
        try {
            const dataPungutan = await Pungutan.findAll();
            res.status(200).json({ msg: "Data Pungutan", dataPungutan });
        } catch (err) {
            next(err);
        }
    }

    static async getPungutanById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw { name: "id_pungutan_not_found" };
            }
            const dataPungutan = await Pungutan.findByPk(id);
            if (!dataPungutan) {
                throw { name: "pungutan_not_found" };
            }
            res.status(200).json({ msg: "Data Pungutan", dataPungutan });
        } catch (err) {
            next(err);
        }
    }

    static async updatePungutan(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw { name: "id_pungutan_not_found" };
            }
            const { nama, nilai, biayaTambahan, biayaPengurangan, voluntaryDeclaration, nilaiAsuransi, freight, kurs } = req.body;
            if (!nama || !nilai || !biayaTambahan || !biayaPengurangan || !voluntaryDeclaration || !nilaiAsuransi || !freight || !kurs) {
                throw { name: "validation_input" };
            }
            const fob = nilai + biayaTambahan - biayaPengurangan + voluntaryDeclaration;
            const cif = fob + nilaiAsuransi + freight;
            const cifRp = cif * kurs;

            const updatedPungutan = await Pungutan.findByPk(id);
            if (!updatedPungutan) {
                throw { name: "pungutan_not_found" };
            }            
            
            await Pungutan.update({
                nama,
                nilai,
                biayaTambahan,
                biayaPengurangan,
                voluntaryDeclaration,
                nilaiAsuransi,
                freight,
                kurs,
                fob,
                cif,
                cifRp
            },
                {
                    where: { id }
                });
            res.status(200).json({ msg: "Data Pungutan Berhasil Diubah", data: updatedPungutan});
        } catch (err) {
            next(err);
        }
    }

    static async deletePungutan(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw { name: "id_pungutan_not_found" };
            }
            const dataPungutan = await Pungutan.findByPk(id);
            if (!dataPungutan) {
                throw { name: "pungutan_not_found" };
            }
            
            await Pungutan.destroy({ where: { id } });
            res.status(200).json({ msg: "Data Pungutan berhasil dihapus", data: dataPungutan });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = PungutanController;