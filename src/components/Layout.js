/* eslint no-unused-expressions:0 */

import { SEO } from 'components';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import moment from 'moment-jalaali';

injectGlobal`
@font-face {
  font-family: Shabnam;
  src: url('/fonts/Shabnam-FD.eot');
  src: url('/fonts/Shabnam-FD.eot?#iefix') format('embedded-opentype'),
       url('/fonts/Shabnam-FD.woff2') format('woff2'),
       url('/fonts/Shabnam-FD.woff') format('woff'),
       url('/fonts/Shabnam-FD.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Shabnam;
  src: url('/fonts/Shabnam-Bold-FD.eot');
  src: url('/fonts/Shabnam-Bold-FD.eot?#iefix') format('embedded-opentype'),
       url('/fonts/Shabnam-Bold-FD.woff2') format('woff2'),
       url('/fonts/Shabnam-Bold-FD.woff') format('woff'),
       url('/fonts/Shabnam-Bold-FD.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Shabnam;
  src: url('/fonts/Shabnam-Light-FD.eot');
  src: url('/fonts/Shabnam-Light-FD.eot?#iefix') format('embedded-opentype'),
       url('/fonts/Shabnam-Light-FD.woff2') format('woff2'),
       url('/fonts/Shabnam-Light-FD.woff') format('woff'),
       url('/fonts/Shabnam-Light-FD.ttf') format('truetype');
  font-weight: 300;
}

  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
  direction: rtl
    background: ${theme.colors.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  p {
  direction: ltr;
    margin: 0;
  }
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SEO />
          {children}
          <Footer>
            <p>اجرا شده با ❤️ در تهران</p>
            <a href="https://github.com/ReactConf/blog" target="_blank">سورس کد</a> <br />
            <span> آخرین نسخه بیلد: {moment(data.site.buildTime).format('jYYYY/jMM/jD')}</span>
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
