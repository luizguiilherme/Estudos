import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import {Nav} from './styles';
import Routes from '../../Routes';

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/54159155">Post</Link>
      </Nav>
      <Routes />
      {/* <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      /> */}
    </BrowserRouter>
  );
}
