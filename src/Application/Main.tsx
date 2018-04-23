import React from 'react';

import * as Content from '../Content';
import { Text, View } from '../Core';
import { History } from '../History';
import { Routes } from '../Routes';
import * as Sidebar from '../Sidebar';

import './style.scss';

type Props = {};
type State = { path: string };

export class Main extends React.Component<Props, State> {

  state = { path: Routes[ 0 ].path };

  componentDidMount() {
    this.setState({
      path: History.location.pathname,
    });
    History.listen(location => this.setState({ path: location.pathname }));
  }

  render() {
    return (
      <View id="Application">
        <Sidebar.Main path={ this.state.path } />
        <Content.Main path={ this.state.path } />
      </View>
    );
  }

}
