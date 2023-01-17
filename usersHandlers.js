const database = require("./database");

const getUsers = (req, res) => {
  database
    .query("select * from Users")
    .then(([Users]) => {
      res.json(Users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query(`select * from Users where id = ?`, [id])
    .then(([Users]) => {
      if (Users[0] != null) {
        res.json(Users[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUsers,
  getUsersById,
};
