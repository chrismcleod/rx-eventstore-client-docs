import React from 'react';
import ReactDOM from 'react-dom';

import * as Application from './Application';
import * as Content from './Content';

class Root extends React.Component {
  public render() {
    return (
      <Application.Main />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root')!);
