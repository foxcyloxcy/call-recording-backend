import db from '../config/database.js'

import axios, * as others from 'axios'
// import moment from 'moment'

//? Get All Individuals
export const getAllIndividuals = (result) => {
  db.query(
    // "SELECT (GROUP_CONCAT(role.role_name SEPARATOR',')) AS _roles_name, individual.* FROM individual LEFT JOIN role ON role.role_id = individual.roles GROUP BY individual.ind_id",
    `SELECT ind.email, ind.name, ind.password, ind.confirm_password, r.role_name, ind.role, ind_id 
    FROM individual ind 
    LEFT JOIN roles r ON r.role_id = ind.role`,
    (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    }
  )
}


export const loginCredentialsM = (data, result) => {
  console.log(data)
  db.query(
    // "SELECT (GROUP_CONCAT(role.role_name SEPARATOR',')) AS _roles_name, individual.* FROM individual LEFT JOIN role ON role.role_id = individual.roles GROUP BY individual.ind_id",
    `SELECT * FROM individual WHERE email = '${data.email}' AND password = '${data.password}' LIMIT 1`,
    [],
    (err, results) => {
      if (err) {
        result(err, null)
      }else {
          if(results.length === 1) {
              result(null, {"status" : 1, "message" : "Login Successful!", "email" : results[0].email, "ind_id": results[0].ind_id, "role": results[0].role, "name": results[0].name } )
          }
          else {
              result(null, {"status" : 0, "message" : "Email and password is incorrect, please try again.", "email" : null })
          }
      }
    }
  )
}

export const checkEmailExistM = (data, result) => {
  console.log(data)
  db.query(
    // "SELECT (GROUP_CONCAT(role.role_name SEPARATOR',')) AS _roles_name, individual.* FROM individual LEFT JOIN role ON role.role_id = individual.roles GROUP BY individual.ind_id",
    `SELECT * FROM individual WHERE email = '${data.email}'`,
    [],
    (err, results) => {
      if (err) {
        result(err, null)
      }else {
          if(results.length === 1) {
              result(null, {"status" : 1, "message" : "Email is already registered to another account! Please try another email.", "email" : results[0].email, "ind_id": results[0].ind_id, "role": results[0].role })
          }
          else {
              result(null, {"status" : 0, "message" : "Email is unique. proceeding to save record.", "email" : null })
          }
      }
    }
  )
}


export const insertIndividualM = (data, result) => {
  db.query(
    `INSERT INTO individual (email, name, password, role, confirm_password, created_at, modified_at, created_by, modified_by) 
    VALUES (?, ?, ?, ?, ?, NOW(), NOW(), ?, ?)`,
    [
      data.email,
      data.name,
      data.password,
      data.role,
      data.confirm_password,
      data.created_by,
      data.modified_by,
    ],
    (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    }
  )
}


export const getIndividualByEmailM = (data, result) => {
  db.query(
    // "SELECT (GROUP_CONCAT(role.role_name SEPARATOR',')) AS _roles_name, individual.* FROM individual LEFT JOIN role ON role.role_id = individual.roles GROUP BY individual.ind_id",
    `SELECT * FROM individual WHERE email = '${data.email}'`,
    [],
    (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    }
  )
}


export const deleteIndividualByEmailM = (email, indId, result) => {
  console.log("from backend email",email)
  db.query(
    // "SELECT (GROUP_CONCAT(role.role_name SEPARATOR',')) AS _roles_name, individual.* FROM individual LEFT JOIN role ON role.role_id = individual.roles GROUP BY individual.ind_id",
    `DELETE FROM individual WHERE email = '${email}' AND ind_id = ${indId}`,
    [],
    (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    }
  )
}

export const updateIndividualByEmailM = (email, indId, data, result) => {
  console.log(email, indId, data)
  db.query(
    `UPDATE individual SET name = '${data.name}', password = '${data.password}', confirm_password = '${data.confirm_password}',  role = ${data.role}, created_at = NOW(), created_by = ${data.created_by}, modified_at = NOW(), modified_by = ${data.modified_by} WHERE email = '${email}' AND ind_id = ${indId}`,
    [],
    (err, results) => {
      if (err) {
        console.log(err)
        result(err, null)
      } else {
        result(null, results)
      }
    }
  )
}