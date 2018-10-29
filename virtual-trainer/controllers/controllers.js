const db = require("../Models");
const request = require('request')
const moment = require('moment')

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

  findDateFood: (req, res) => {
  const today = moment().startOf('day')
  const tomorrow = moment(today).endOf('day')
  console.log(`-----\ntoday:${today}\n-----\ntomorrow: ${tomorrow}\n-----`)

    db.Food.find({date: {$gt:today, $lt: tomorrow}})
      .then(data => {
        console.log(`dbData: ${data}`)
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
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
    const app_key = '88aaf88bd591b1d07bffc2ee29030aa5'
    const app_id = 'e5ea3d28'
    const edamam = `http://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`
    request.post({
      headers: 'Content-Type: application/json',
      url: edamam,
      body: req.body,
      json: true
    },
      (err, response, body) => {
        // console.log(`----\n(44) response: ${JSON.stringify(response)}\n----\nbody:${JSON.stringify(body)}\n----\nerr:${err}\n----`)
        const nutrition = {
          name: req.body.title,
          calories: body.totalNutrients.ENERC_KCAL.quantity,
          protein: body.totalNutrients.PROCNT.quantity,
          fat: body.totalNutrients.FAT.quantity,
          carbs: body.totalNutrients.CHOCDF.quantity
          
        }
        // console.log(nutrition)
        db.Food.create(nutrition)
          .then(data => {
            res.json(data);
          })
          console.log(data)
          .catch(err => {
            res.json(err);
          });
      })
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
    console.log(req.body)
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
