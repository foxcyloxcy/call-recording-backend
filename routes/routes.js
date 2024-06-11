import express from 'express'

import {
  showAllIndividual,
  loginCredentials,
  createIndividual,
  checkEmailExist,
  getIndividualByEmail,
  deleteIndividualByEmail,
  updateIndividualByEmail
} from "../controllers/individuals.js";

import {
  getCallRecording
} from "../controllers/callRecordings.js"

import {
  showAllRole
} from "../controllers/roles.js"


const router = express.Router();

router.get("/individuals", showAllIndividual);

router.post("/get-individual-by-email", getIndividualByEmail);

router.put("/update-individual-by-email/:email/:indId", updateIndividualByEmail);

router.delete("/del-ind-by-email-and-id/:email/:indId", deleteIndividualByEmail);

router.post("/individual", createIndividual);

router.post("/login-credentials", loginCredentials);
router.post("/check-email-exist", checkEmailExist);
router.post("/call-recordings", getCallRecording);
router.get("/roles", showAllRole);


export default router;