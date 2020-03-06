import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

import { Unlock, Lock } from 'react-feather';
import { getUptimeState, roundUptime } from '../../utils/uptime';
import { textHighlighter } from './filtersLogic';

import './apiCardStyles.scss';

const { publicRuntimeConfig } = getConfig();
const DEFAULT_LOGO = publicRuntimeConfig.DEFAULT_LOGO || 'logo-beta-gouv.svg';

const ApiCard = ({
  title,
  url,
  contract,
  uptime,
  image,
  owner,
  description,
  matches = {},
}) => {
  return (
    <Link href={url}>
      <a className="ui fluid card api-card dont-apply-link-style">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={`/images/api-logo/${image || DEFAULT_LOGO}`}
            alt={image ? `logo de ${title}` : 'logo générique api.gouv'}
          />

          <div
            className="header"
            dangerouslySetInnerHTML={{
              __html: textHighlighter(matches.title, title),
            }}
          />

          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: textHighlighter(matches.description, description),
            }}
          />
        </div>

        <div className="card-extra">
          <div>
            <b>{owner.includes('&') ? 'Cop' : 'P'}roduit par :</b>{' '}
            <span
              dangerouslySetInnerHTML={{
                __html: textHighlighter(matches.owner, owner),
              }}
            />
          </div>
        </div>

        <div className="card-extra card-footer">
          <div className="badges">
            <div className="badge contract">
              {contract === 'OUVERT' ? (
                <>
                  <Unlock size={20} />
                  <div>Accès libre</div>
                </>
              ) : (
                <>
                  <Lock size={20} />
                  <div>Sous habilitation</div>
                </>
              )}
            </div>
            <div className="badge filler"></div>

            {uptime && (
              <div className="badge uptime">
                <div
                  className="uptime-stat"
                  style={{
                    backgroundColor: `${getUptimeState(uptime)}`,
                  }}
                />
                {roundUptime(2)(uptime)}% actif / dernier mois
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

ApiCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contract: PropTypes.string,
  image: PropTypes.string,
  owner: PropTypes.string,
  tagline: PropTypes.string,
  uptime: PropTypes.number,
};

ApiCard.defaultProps = {
  description: null,
  image: null,
  uptime: null,
};

export default ApiCard;
