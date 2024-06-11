import {
  getAllIndividuals,
  loginCredentialsM,
  insertIndividualM,
  checkEmailExistM,
  getIndividualByEmailM,
  deleteIndividualByEmailM,
  updateIndividualByEmailM
} from "../models/Individual.js";

// import function to check token
// import check_token from "./functions.js";

// Get All Individual
export const showAllIndividual = (req, res) => {
  // if ((check_token(req.header("token"))) !== 200) return res.status(check_token(req.header("token"))).send("")
  getAllIndividuals((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const loginCredentials = (req, res) => {
  // if ((check_token(req.header("token"))) !== 200) return res.status(check_token(req.header("token"))).send("")
  const data = req.body
  loginCredentialsM(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const checkEmailExist = (req, res) => {
  // if ((check_token(req.header("token"))) !== 200) return res.status(check_token(req.header("token"))).send("")
  const data = req.body
  checkEmailExistM(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createIndividual = (req, res) => {
  const data = req.body;
  insertIndividualM(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};



export const getIndividualByEmail = (req, res) => {
  const data = req.body
  getIndividualByEmailM(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const deleteIndividualByEmail = (req, res) => {
  const email = req.params.email
  const indId = req.params.indId
  deleteIndividualByEmailM(email, indId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateIndividualByEmail = (req, res) => {
  const email = req.params.email
  const indId = req.params.indId
  const data = req.body
  console.log(email, indId, data)
  updateIndividualByEmailM(email, indId, data,(err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};