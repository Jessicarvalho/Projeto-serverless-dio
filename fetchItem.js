"use strict"

const AWS = require("aws-sdk");

const fetchItem = async (event) => {
    
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters
    
    let item;

    try {
        const results = await dynamoDB.scan({
            TableName: "ItemTable",
            Key: {id}
        }).promise();

        item = resust.Item

    } catch (error) {

        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
}

module.exports = {
    handler:fetchItem
}