

import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'eu-west-1_0bIJhzB7g',
  identityPoolId: 'eu-west-1:788c7171-e74c-48f3-b2e6-d393c565dea9',
  authRoleArn: 'arn:aws:iam::484907493866:role/service-role/amplify-identity-pool-role',
  unauthRoleArn: 'arn:aws:iam::484907493866:role/service-role/amplify-identity-pool-role',
  userPoolClientId: '7ahg3bv8gaqs0tv0bln910mpf3',
});