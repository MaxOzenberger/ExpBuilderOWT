import * as React from 'react';
const { GetBucketCorsCommand, S3Client, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand, DeleteObjectsCommand } = require("@aws-sdk/client-s3");
const { CognitoIdentityClient} = require("@aws-sdk/client-cognito-identity");
const { fromCognitoIdentityPool} = require("@aws-sdk/credential-provider-cognito-identity");


// Initialize the Amazon Cognito credentials provider
const REGION = "us-gov-west-1"; //e.g. "us-east-1"
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    //identityPoolId: "us-gov-west-1: arc-stews-cog", // IDENTITY_POOL_ID e.g., eu-west-1:xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx
    identityPoolId: "us-gov-west-1:7fa20706-075c-41ac-b6ef-aad508be05fb",
  }),
});

const bucketName = "esri-data";

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
};

const Extent = () => {

  //The HTMLish stuff for the form
  return (
    <button onClick={run}>Check CORS</button>
  );
}

export default Extent;