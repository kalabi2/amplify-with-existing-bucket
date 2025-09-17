import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';
import Background from './Modern.jpg';
import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react';

// Configure Amplify in index file or root file
const amplifyConfig = {
  ...awsExports,
  ...config,
};


Amplify.configure(amplifyConfig);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  const appStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div style={appStyle}>
      <Authenticator hideSignUp>
        {({ signOut }) => (
          <>
            <div className="header">
              <Heading level={4}> AWS Storage Browser Portal</Heading>
              <Button onClick={signOut} variation="primary">
                Sign out
              </Button>
            </div>
            <div style={{ padding: '0 2rem' }}>
              <StorageBrowser />
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default App;