const siswa = require("../models/siswa");

module.exports = {
  getAll: (req, res) => {
    siswa.getAll(req.con, (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  },

  getById: (req, res) => {
    siswa.getById(req.con, req.params.siswa_id, (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  },

  getByNis: (req, res) => {
    siswa.getByNis(req.con, req.params.siswa_nis, (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  },

  getTotal: (req, res) => {
    siswa.getTotal(req.con, (err, rows) => {
      if (err) throw err;
      res.json({ total: rows[0]["COUNT(*)"] });
    });
  },

  add: (req, res) => {
    siswa.add(req.con, req.body, res, (err, rows) => {
      if (err) throw err;
      res.send("add new siswa success.", 200);
    });
  },

  upload: (req, res) => {
    siswa.upload(req.con, req.files.filename, res, (err, rows) => {
      if (err) throw err;
      return res.json({ error: "false", message: "upload success", data: rows});
    });
  },

  update: (req, res) => {
    siswa.update(req.con, req.body, req.params.siswa_id, res);
  },

  delete: (req, res) => {
    siswa.delete(req.con, req.params.siswa_id, res, (err, rows) => {
      if (err) return res.send(err.sqlMessage, 400);
      res.send("success.", 200);
    });
  },
};   
