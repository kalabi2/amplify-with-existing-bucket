
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { Policy, PolicyStatement, Effect } from "aws-cdk-lib/aws-iam";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
});

/**
 * Note: This code assumes the existence of an S3 bucket named 'my-existing-bucket'.
 * Replace 'my-existing-bucket' with your actual bucket name and adjust the paths and permissions as needed.
 * For more information on authorization access, visit: https://docs.amplify.aws/react/build-a-backend/storage/authorization/#available-actions
 *
 * Requirements for this sample:
 * 1. An S3 bucket named 'my-existing-bucket' must exist in your AWS account.
 * 2. The bucket should contain two folders:
 *    - 'public/' - Accessible by all authenticated and unauthenticated users.
 *    - 'admin/' - Accessible only by users in the admin group and authenticated users.
 *
 * Note: Ensure the bucket exists before deploying this code, as it only sets up IAM policies and does not create the S3 bucket.
 */
const customBucketName = "dedicated-switch-bucket";

backend.addOutput({
  version: "1.3",
  storage: {
    aws_region: "eu-west-1",
    bucket_name: customBucketName,
    buckets: [
      {
        name: customBucketName,
        bucket_name: customBucketName,
        aws_region: "eu-west-1",

        paths: {
          "admin1/*": {
            authenticated: ["get", "list", "write", "delete"],
          },
          "admin2/*": {
            authenticated: ["get", "list", "write", "delete"],
          },
          "admin3/*": {
            authenticated: ["get", "list", "write", "delete"],
          },
        },
      },
    ],
  },
});

/**
 * Define an inline policy to attach to Amplify's un-auth role
 * This policy defines how unauthenticated users can access your existing bucket
 */
const admin1 = new Policy(backend.stack, "customBucketadmin1", {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:GetObject"],
      resources: [`arn:aws:s3:::${customBucketName}/admin1/*`],
    }),
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:ListBucket"],
      resources: [`arn:aws:s3:::${customBucketName}`],
      conditions: {
        StringLike: {
          "s3:prefix": ["admin1/*", "admin1/"],
        },
      },
    }),
  ],
});

/**
 * Define an inline policy to attach to Amplify's auth role
 * This policy defines how authenticated users can access your existing bucket
 */
const admin2 = new Policy(backend.stack, "customBucketadmin2", {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      resources: [
        `arn:aws:s3:::${customBucketName}/admin2/*`,
        `arn:aws:s3:::${customBucketName}/admin2/*`,
      ],
    }),
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:ListBucket"],
      resources: [
        `arn:aws:s3:::${customBucketName}`,
        `arn:aws:s3:::${customBucketName}/*`,
      ],
      conditions: {
        StringLike: {
          "s3:prefix": ["admin2/*", "admin2/"],
        },
      },
    }),
  ],
});

/**
 * Define an inline policy to attach to Admin user role
 * This policy defines how authenticated users can access your existing bucket
 */
const admin3 = new Policy(backend.stack, "customBucketadmin3", {
  statements: [
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      resources: [`arn:aws:s3:::${customBucketName}/admin3/*`],
    }),
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:ListBucket"],
      resources: [
        `arn:aws:s3:::${customBucketName}`,
        `arn:aws:s3:::${customBucketName}/*`,
      ],
      conditions: {
        StringLike: {
          "s3:prefix": ["admin3/*", "admin3/"],
        },
      },
    }),
  ],
});

// Add the policies to the admin1 user role
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(admin1);

// Add the policies to the admin2 user role
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(admin2);

// Add the policies to the admin3 user role
backend.auth.resources.authenticatedUserIamRole.attachInlinePolicy(admin3);
