import * as React from 'react';
import { GetBucketCorsCommand, S3Client, ListObjectsCommand} from "@aws-sdk/client-s3";
import {CognitoIdentityClient, fromCognitoIdentityPool} from "@aws-sdk/client-cognito-identity-provider"


//const {
  //fromCognitoIdentityPool,
//require("@aws-sdk/credential-provider-cognito-identity");



// Initialize the Amazon Cognito credentials provider
const REGION = "us-gov-west-1"; //e.g. "us-east-1"
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: "arc-stews-cog", // IDENTITY_POOL_ID e.g., eu-west-1:xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx
  }),
});

// Set the parameters
//const params = {
  //RoleArn: "ARN_OF_ROLE_TO_ASSUME", //ARN_OF_ROLE_TO_ASSUME
  //RoleSessionName: "session1",
  //DurationSeconds: 900,
//};

const run = async () => {
    try {
    // Create the parameters for calling
      const bucketParams = { Bucket: "esri-data" };
      const data = await s3.send(new GetBucketCorsCommand(bucketParams));
      console.log("Success", JSON.stringify(data.CORSRules));
      return data;
    }catch (err) {
      console.log(err, err.stack);
    }
    //Get Amazon Resource Name (ARN) of current identity
    //try {
      //const stsParams = { credentials: rolecreds };
      //const stsClient = new STSClient(stsParams);
      //const results = await stsClient.send(
        //new GetCallerIdentityCommand(rolecreds)
      //);
      //console.log("Success", results);
    //} catch (err) {
      //console.log(err, err.stack);
    //}
};

/*
// Set the AWS Region.
const REGION = "us-gov-west-1";

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });

export { s3Client };

import { GetBucketCorsCommand } from "@aws-sdk/client-s3";

export const run = async () => {
  console.log("Fired Bucket Call")
  try {
    const data = await s3Client.send(new GetBucketCorsCommand(bucketParams));
    console.log("Success", JSON.stringify(data.CORSRules));
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
*/
const Extent = () => {

  //The HTMLish stuff for the form
  return (
    <button onClick={run}>Check CORS</button>
  );
}

export default Extent;