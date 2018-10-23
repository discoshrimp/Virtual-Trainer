const db = require("../Models");

module.exports = {
  findAllFood: (req, res) => {
    db.Food.find()
      .sort({ _id: -1 })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },

  findOneFood: (req, res) => {
    db.Food.findOne({ _id: req.params.id })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },

  createFood: (req, res) => {
    db.Food.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },

  deleteFood: (req, res) => {
    db.Food.remove({
      _id: req.params.id
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  findAllUsers: (req, res) => {
    db.User.find()
      .sort({ _id: -1 })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  findOneUser: (req, res) => {
    db.User.findOne()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  createUser: (req, res) => {
    const { userName, password } = req.body;
    console.log("user to be saved: ", userName, password);
    //Adding th validation
    db.User.findOne({ userName: userName }, (err, userMatch) => {
      if (userMatch) {
        return res.json({ error: "Username has already been taken." });
      }
      db.User.create(req.body)
        .then(data => {
          console.log("create user: ", data);
          res.json(data);
        })
        .catch(err => {
          console.log(err);
          res.status(422).json(err);
        });
    });
  },
  deleteUser: (req, res) => {
    db.User.remove({ _id: req.params.id })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
