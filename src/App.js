import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';
import './App.css';
import { Component } from 'react';

const client = createReactClient({
  provider: studioProvider({ apiKey: 'yourStudioApiKey' }),
});

function App() {
  return (
  <LivepeerConfig client={client}>
    <Component />
  </LivepeerConfig>
  );
}

export default App;
