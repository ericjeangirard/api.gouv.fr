import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './pageHeaderStyles.scss';

const Title = ({ title, logo }) => (
  <div id="api-page-title">
    <img src={`/images/api-logo/${logo}`} alt={title} className="ui image" />
    <h1>{title}</h1>
  </div>
);

const PageHeader = ({ title, logo, tagline }) => (
  <section id="mission-statement">
    <Link href="/rechercher-api">
      <a className="back-button">← Retour</a>
    </Link>
    <div className="content-container content">
      <Title title={title} logo={logo} />
      <h2>{tagline}</h2>
    </div>
  </section>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default PageHeader;
