"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  }
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  let intentName = req.body.queryResult.intent.displayName;
  var speech = '';
  if(intentName == 'Default Welcome Intent'){
    speech = "Welcome to Myelin Chatbot. How can I help you today?"
  }
  if(intentName == 'Echo'){
    let parameter = req.body.queryResult.parameters.echoText;
    speech = "Welcome to Echo Intent. Your parameter value is "+parameter;
  }
  
  
//   var speech =
//     req.body.result &&
//     req.body.result.parameters &&
//     req.body.result.parameters.echoText
//       ? req.body.result.parameters.echoText
//       : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});
