import React from 'react';
import { storiesOf } from '@storybook/react';

import { AppHeading } from '../components';

const stories = storiesOf('App Test', module);

stories.add('App', () => <AppHeading />);
