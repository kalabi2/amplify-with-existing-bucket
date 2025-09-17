import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
      region: 'eu-west-1'
      userPoolId: "eu-west-1_0bIJhzB7g",
      userPoolClientId: "7ahg3bv8gaqs0tv0bln910mpf3",
      identityPoolId: "eu-west-1:788c7171-e74c-48f3-b2e6-d393c565dea9",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    
  },
})