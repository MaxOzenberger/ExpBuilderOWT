var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
const { GetBucketCorsCommand, S3Client, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand, DeleteObjectsCommand } = require("@aws-sdk/client-s3");
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const { fromCognitoIdentityPool } = require("@aws-sdk/credential-provider-cognito-identity");
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
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create the parameters for calling
        const bucketParams = { Bucket: "esri-data" };
        const data = yield s3.send(new GetBucketCorsCommand(bucketParams));
        console.log("Success", JSON.stringify(data.CORSRules));
        return data;
    }
    catch (err) {
        console.log(err, err.stack);
    }
});
const Extent = () => {
    //The HTMLish stuff for the form
    return (React.createElement("button", { onClick: run }, "Check CORS"));
};
export default Extent;
//# sourceMappingURL=Extent.js.map