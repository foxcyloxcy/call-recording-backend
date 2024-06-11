import db from '../config/database.js'

import axios, * as others from 'axios'
// import moment from 'moment'

//? Get Call Recordings
export const getCallRecordingM = (data, result) => {

    // QUERY FOR SEARCHING BY ALL INPUT FIELDS done
    if (data.dateFrom && data.dateTo && data.agentName && data.phoneNumber && data.callId) {
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE startTime BETWEEN '${data.dateFrom}' 
            AND '${data.dateTo}' 
            AND agentName LIKE '%${data.agentName}%' 
            AND cidNumber LIKE '%${data.phoneNumber}%'
            AND queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR DATE_FROM, DATE_TO, AGENT_NAME AND PHONE# done
    }else if(data.dateFrom && data.dateTo && data.agentName && data.phoneNumber && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE startTime BETWEEN '${data.dateFrom}' 
            AND '${data.dateTo}' 
            AND agentName LIKE '%${data.agentName}%' 
            AND cidNumber LIKE '%${data.phoneNumber}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY DATE_FROM, DATE_TO AND AGENT_NAME done
    }else if(data.dateFrom && data.dateTo && data.agentName && data.phoneNumber === "" && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE startTime BETWEEN '${data.dateFrom}' 
            AND '${data.dateTo}' 
            AND agentName LIKE '%${data.agentName}%' 
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY DATE_FROM AND DATE_TO done
    }else if(data.dateFrom && data.dateTo && data.agentName === "" && data.phoneNumber === "" && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE startTime BETWEEN '${data.dateFrom}' 
            AND '${data.dateTo}'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY DATE_FROM, DATE_TO AND PHONE # done
    }else if(data.dateFrom && data.dateTo && data.agentName === "" && data.phoneNumber && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE cidNumber LIKE '%${data.phoneNumber}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        //QUERY FOR SEARCHING BY DATE_FROM, DATE_TO AND CALL_ID done
    }else if(data.dateFrom && data.dateTo && data.agentName === "" && data.phoneNumber === "" && data.callId){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY AGENTNAME, PHONE_NUMBER AND CALL_ID done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName && data.phoneNumber  && data.callId){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE agentName LIKE '%${data.agentName}%' 
            AND cidNumber LIKE '%${data.phoneNumber}%'
            AND queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY AGENT_NAME AND PHONE_NUMBER done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName && data.phoneNumber  && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE agentName LIKE '%${data.agentName}%' 
            AND cidNumber LIKE '%${data.phoneNumber}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY AGENT_NAME ONLY done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName && data.phoneNumber === ""  && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE agentName LIKE '%${data.agentName}%' 
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY PHONE_NUMBER AND CALL_ID
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName === "" && data.phoneNumber && data.callId){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE cidNumber LIKE '%${data.phoneNumber}%'
            AND queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY PHONE_NUMBER ONLY done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName === "" && data.phoneNumber && data.callId === ""){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE cidNumber LIKE '%${data.phoneNumber}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY CALL_ID AND AGENT_NAME done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName && data.phoneNumber === "" && data.callId){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE agentName LIKE '%${data.agentName}%'
            AND queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY CALL_ID AND PHONE_NUMBER done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName === "" && data.phoneNumber && data.callId){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE cidNumber LIKE '%${data.phoneNumber}%'
            AND queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
            (err, results) => {
                if (err) {
                console.log(err)
                result(err, null)
                } else {
                result(null, results)
                }
            }
        )
        // QUERY FOR SEARCHING BY CALL_ID done
    }else if(data.dateFrom === "" && data.dateTo === "" && data.agentName === "" && data.phoneNumber === "" && data.callId){
        db.query(
            `SELECT startTime as date, 
            agentName, cidNumber as phoneNumber,
            queueCallManagerID as callId,
            mixmonFileName as callRecordingLink
            FROM queueCDR WHERE queueCallManagerID LIKE '%${data.callId}%'
            ORDER BY startTime LIMIT 100`,
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
}