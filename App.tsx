import React from 'react';
import {App} from '@app/App'
import { ThemeProvider } from '@rneui/themed';

export default function Index() {
  return (
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  )
}
