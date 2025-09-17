import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, Flex, Heading } from '@aws-amplify/ui-react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  return (
    <Authenticator hideSignUp>
      {({ signOut }) => (
        <>
          <Flex direction="row" alignItems="center" wrap="nowrap" gap="1rem">
            <Heading level={4}>{`CSO AWS Storage Browser Portal`}</Heading>
            <Button onClick={signOut}>Sign out</Button>
           </Flex>
          <StorageBrowser />
        </>
      )}
    </Authenticator>

 
    <StorageImage
      alt="CSO Image"
      path={({ identityId }) => `public/${identityId}/cat.jpg`}
    />
    </>
  );

}

export default App;