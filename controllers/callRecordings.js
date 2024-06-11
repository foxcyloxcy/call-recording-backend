import {
    getCallRecordingM
  } from "../models/callRecording.js"
  
  // import function to check token
  // import check_token from "./functions.js";
  
  export const getCallRecording = (req, res) => {
    const data = req.body
    console.log(data)
    getCallRecordingM(data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
      console.log(res.json(results))
    });
  };