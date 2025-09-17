import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "eu-west-1_0bIJhzB7g",
      userPoolClientId: "5gq7rtkmks8vkribkieebmdsqo",
      identityPoolId: "eu-west-1:788c7171-e74c-48f3-b2e6-d393c565dea9",
    },
  },
})