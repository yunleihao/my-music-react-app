import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router'


import WYMAppHeader from '@/components/app-header';
import WYMAppFooter from '@/components/app-footer';


export default memo(function App() {
  return (
    <HashRouter>
      <WYMAppHeader></WYMAppHeader>
      {renderRoutes(routes)}
      <WYMAppFooter></WYMAppFooter>
    </HashRouter>
  )
})
