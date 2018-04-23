import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Highlight from 'react-highlight';
import Icon from 'react-simple-line-icons';

import './Code.scss';
import './HLJsNord.scss';
import { View } from './View';

interface Props {
  code?: string;
  langauge?: string;
}

interface State {
  showCopied: boolean;
}

export class Code extends React.Component<Props, State> {

  state = { showCopied: false };

  render() {
    const { code: tCode, langauge } = this.props;
    const code = tCode || this.props.children as string || '';
    const count = code.trim().split('\n').length;
    return (
      <View className="Code" >
        <CopyToClipboard text={ code.trim() } onCopy={ this.showCopied }>
          <View className="Copy">
            <Icon name="docs" />
          </View>
        </CopyToClipboard>
        { this.state.showCopied && (
          <View className="Copied">
            <span>📋 Copied to clipboard</span>
          </View>
        ) }
        <View className="Lines">
          {
            Array(count).fill(0).map((_, index) => (
              <span key={ index } className="Line">{ index + 1 }</span>
            ))
          }
        </View>
        <View className="Source">
          <Highlight className={ langauge || 'typescript' }>{ code.trim() }</Highlight>
        </View>
      </View>
    );
  }

  private showCopied = () => {
    this.setState({ showCopied: true }, () => {
      setTimeout(this.hideCopied, 2000);
    });
  }

  private hideCopied = () => {
    this.setState({ showCopied: false });
  }
}
