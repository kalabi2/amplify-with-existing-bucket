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
  userPoolId: 'eu-west-1_Vnb6T8L0Z',
  identityPoolId: 'eu-west-1:788c7171-e74c-48f3-b2e6-d393c565dea9',
  authRoleArn: 'arn:aws:iam::484907493866:role/service-role/amplify-identity-pool-role',
  unauthRoleArn: 'arn:aws:iam::484907493866:role/service-role/amplify-identity-pool-role',
  userPoolClientId: '4rj7jni406iha44qubt4u7vape',
  
});