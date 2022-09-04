const getData = require('./connection');

getData().then((resp) => {
    resp.find().toArray().then((data) => {
        console.log(data);
    });
});

{
    "responseId": "94a474e9-bebf-4146-8684-36196496b2de-3d49d937",
        "queryResult": {
        "queryText": "hey",
            "action": "input.welcome",
                "parameters": { },
        "allRequiredParamsPresent": true,
            "fulfillmentText": "Type \"Book\" in this chat for further instructions",
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [
                                "Welcome to We-care Hospital"
                            ]
                        }
                    },
                    {
                        "text": {
                            "text": [
                                "Would you like to book an appointment?"
                            ]
                        }
                    },
                    {
                        "text": {
                            "text": [
                                "Type \"Book\" in this chat for further instructions"
                            ]
                        }
                    }
                ],
                    "outputContexts": [
                        {
                            "name": "projects/doctorsappoinment-jlfu/agent/sessions/deb6de03-ec04-59ea-3cb2-836220e95734/contexts/global-context",
                            "lifespanCount": 100,
                            "parameters": {
                                "conversationHistory": [
                                    {
                                        "userResponse": "hey",
                                        "botResponse": "Type \"Book\" in this chat for further instructions"
                                    }
                                ]
                            }
                        }
                    ],
                        "intent": {
            "name": "projects/doctorsappoinment-jlfu/agent/intents/fd7de5ff-e9a0-451d-b2a8-ee723faea0be",
                "displayName": "Welcome"
        },
        "intentDetectionConfidence": 1,
            "diagnosticInfo": {
            "webhook_latency_ms": 427
        },
        "languageCode": "en",
            "sentimentAnalysisResult": {
            "queryTextSentiment": {
                "score": 0.2,
                    "magnitude": 0.2
            }
        }
    },
    "webhookStatus": {
        "message": "Webhook execution successful"
    }
}