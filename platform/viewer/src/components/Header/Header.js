import { AboutContent, Dropdown, withModal } from '@ohif/ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import OHIFLogo from '../OHIFLogo/OHIFLogo.js';
import Logout from '../Header/Logout.js';

import { UserPreferences } from './../UserPreferences';
import './Header.css';

function Header(props) {
  const {
    t,
    user,
    userManager,
    modal: { show },
    useLargeLogo,
    linkPath,
    linkText,
    location,
    children,
  } = props;

  const [options, setOptions] = useState([]);
  const hasLink = linkText && linkPath;

  useEffect(() => {
    //console.log(hasLink, linkText, linkPath);
    const optionsValue = [
      {
        title: t('About'),
        icon: { name: 'info' },
        onClick: () =>
          show({
            content: AboutContent,
            title: t('OHIF Viewer - About'),
          }),
      },
      {
        title: t('Preferences'),
        icon: {
          name: 'user',
        },
        onClick: () =>
          show({
            content: UserPreferences,
            title: t('User Preferences'),
          }),
      },
    ];

    if (user && userManager) {
      optionsValue.push({
        title: t('Logout'),
        icon: { name: 'power-off' },
        onClick: () => userManager.signoutRedirect(),
      });
    }

    setOptions(optionsValue);
  }, [setOptions, show, t, user, userManager]);

  return (
    <>
      {/* <div className="notification-bar">{t('INVESTIGATIONAL USE ONLY')}</div> */}
      <div
        className={classNames('entry-header', { 'header-big': useLargeLogo })}
      >
        <div className="header-left-box">
          {location && location.studyLink && (
            <Link
              to={location.studyLink}
              className="header-btn header-viewerLink"
            >
              {t('Back to Viewer')}
            </Link>
          )}

          {children}

          {hasLink && (
            <Link
              className="header-btn header-studyListLinkSection"
              to={{
                pathname: linkPath,
                state: { studyLink: location.pathname },
              }}
            >
              {t(linkText)}
            </Link>
          )}
        </div>
        <div className="header-menu">
          {/* <span className="research-use">{t('INVESTIGATIONAL USE ONLY')}</span> */}
          <Dropdown title={t('Options')} list={options} align="right" />
        </div>
        {Logout()}
      </div>
    </>
  );
}

Header.propTypes = {
  // Study list, /
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  useLargeLogo: PropTypes.bool,
  //
  location: PropTypes.object.isRequired,
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
  userManager: PropTypes.object,
  user: PropTypes.object,
  modal: PropTypes.object,
};

Header.defaultProps = {
  useLargeLogo: false,
  children: OHIFLogo(),
};

export default withTranslation(['Header', 'AboutModal'])(
  withRouter(withModal(Header))
);
