// import { defineAuth } from '@aws-amplify/backend';

// /**
//  * Define and configure your auth resource
//  * @see https://docs.amplify.aws/gen2/build-a-backend/auth
//  */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//   },
//   groups: ['admin']
// });


import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'eu-west-1_zBJNBJaTu',
  identityPoolId: 'eu-west-1:4b6c1042-d067-4b25-87a5-b79f39079101',
  authRoleArn: 'arn:aws:iam::484907493866:role/amplify-d1udrw7f3bvbsj-ma-amplifyAuthauthenticatedU-5ixSVfoNXNfT',
  unauthRoleArn: 'arn:aws:iam::484907493866:role/amplify-d1udrw7f3bvbsj-ma-amplifyAuthauthenticatedU-5ixSVfoNXNfT',
  userPoolClientId: '6nqembempmhv6j9tjj4jpsotui',
});