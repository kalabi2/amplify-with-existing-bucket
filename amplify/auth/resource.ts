import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: 'eu-west-1_0bIJhzB7g',
  identityPoolId: 'eu-west-1:788c7171-e74c-48f3-b2e6-d393c565dea9',
  authRoleArn: 'arn:aws:iam::484907493866:role/amplify-d1udrw7f3bvbsj-ma-amplifyAuthauthenticatedU-5ixSVfoNXNfT',
  unauthRoleArn: 'arn:aws:iam::484907493866:role/amplify-d1udrw7f3bvbsj-ma-amplifyAuthunauthenticate-rxjndeEn5tSk',
  userPoolClientId: '7ahg3bv8gaqs0tv0bln910mpf3',
});