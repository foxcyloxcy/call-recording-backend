import {
    getAllRoles
  } from "../models/role.js";


  export const showAllRole = (req, res) => {
    // if ((check_token(req.header("token"))) !== 200) return res.status(check_token(req.header("token"))).send("")
    getAllRoles((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };