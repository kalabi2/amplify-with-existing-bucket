import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    userPoolId: 'eu-west-1_0bIJhzB7g',
    userPoolWebClientId: '5gq7rtkmks8vkribkieebmdsqo',
    identityPoolId: 'eu-west-1:788c7171-e74c-48f3-b2e6-d393c565dea9', 
    region: 'eu-west-1',
    authenticationFlowType: 'USER_SRP_AUTH',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);