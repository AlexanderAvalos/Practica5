const { db } = require("../config/config.js");

exports.obtener = async (req, res) => {
  const [user] = await db.query(`select * from Persona`);
  return res.status(200).json({ resultado: user[0] });
};
