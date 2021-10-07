import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import primeira from './components/pagina-1/primeira.js';
import segunda from './components/Pagina-2/segunda.js';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={primeira}/>
        <Route path="/segunda" exact component={segunda}/>
      </Switch>
    </BrowserRouter>
  );
}
