const mongodb = require("../models/connect");

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingleData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    const contact = lists.find((obj) => obj._id.toString() === req.params.id);
    if (!contact)
      res.status(404).send("The contact with the given ID doesn't exist");
    res.status(200).json(contact);
  });
};
module.exports = { getData, getSingleData };
