const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case "validation_input":
            res.status(400).json({ msg: "Input Tidak Valid" });
            break;
        case "id_pungutan_not_found":
            res.status(404).json({ msg: "Id Pungutan Tidak Ditemukan" });
            break;
        case "pungutan_not_found":
            res.status(404).json({ msg: "Data Pungutan Tidak Ditemukan" });
            break;
        default:
            res.status(500).json({ msg: "Internal server error" });
            break;
    }
};

module.exports = errorHandler;
