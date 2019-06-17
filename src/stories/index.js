import React from 'react';

import { storiesOf } from '@storybook/react';

import ViewOnlyNetworkGraph from './ViewOnlyNetworkGraph';
import NetworkGraphWithControls from './NetworkGraphWithControls';
import NetworkGraphWithCustomControls from './NetworkGraphWithCustomControls';

storiesOf('Network Graph', module)
  .add('View Only', () => <ViewOnlyNetworkGraph />)
  .add('With Controls', () => <NetworkGraphWithControls />)
  .add('With Custom Controls', () => <NetworkGraphWithCustomControls />);
