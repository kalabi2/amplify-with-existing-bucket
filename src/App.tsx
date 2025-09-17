import React from 'react';
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';
import Background from './bg.jpg';
import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, Flex, Heading } from '@aws-amplify/ui-react';

Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  const appStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: '1800px 1800px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div style={appStyle}>
      <Authenticator hideSignUp>
        {({ signOut }) => (
          <>
            <Flex direction="row" alignItems="center" wrap="nowrap" gap="1rem" style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem' }}>
              <Heading level={4} style={{ color: 'white' }}>
                CSO AWS Storage Browser Portal
              </Heading>
              <Button onClick={signOut}>Sign out</Button>
            </Flex>
            <StorageBrowser />
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default App;