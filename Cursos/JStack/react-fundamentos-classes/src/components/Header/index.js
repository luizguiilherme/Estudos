import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Header extends Component {
 static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    selectedTheme: PropTypes.string.isRequired,
  }

  render() {
    const { selectedTheme, onToggleTheme} = this.props;
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button
          type="button"
          onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌝️' : '🌚️'}
        </button>
      </Container>
    );
  }
}