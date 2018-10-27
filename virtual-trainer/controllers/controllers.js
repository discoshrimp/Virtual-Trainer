const db = require("../Models");
// const passport = require("passport");
// const localStrategy = require("passport-local").Strategy;

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

  getSessionData: (req, res) => {
    db.Users.findOne(_id);
    console.log("session id: ", res._id);
  },

  createUser: (req, res) => {
    const { userName, password } = req.body;
    console.log("user to be saved: ", userName, password);
    //Adding the validation
    db.User.findOne({ userName: userName }, (err, userMatch) => {
      if (userMatch) {
        return res.json({ error: "Username has already been taken." });
      }
      db.User.create(req.body)
        .then(data => {
          console.log("create user: ", data._id);
          res.json(data);
        })
        .catch(err => {
          console.log(err);
          res.status(422).json(err);
        });
    });
  },

  updateUser: (req, res) => {
    console.log("in controller: ", req.body);
    db.User.findOneAndUpdate(
      { userName: req.body.user },
      {
        userName: req.body.user,
        age: req.body.age,
        sex: req.body.gender,
        weight: req.body.weight,
        height: req.body.height,
        phoneNumber: req.body.phoneNumber,
        goal: req.body.goal,
        recommendedInTake: req.body.recommendedInTake
      },
      { new: true, upsert: true },
      (error, result) => {
        console.log("result: ", result);
        res.send(result);
      }
    );
  },

  logoutUser: (req, res) => {
    db.User.remove({ _id: req.params.id })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
