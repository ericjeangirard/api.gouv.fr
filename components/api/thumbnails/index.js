import React from 'react';
import { Lock, Unlock, Activity, Calendar, User, Sliders } from 'react-feather';

import Thumbnail from './thumbnail';
import { getUptimeState, roundUptime } from '../../../utils/uptime';

import './styles.scss';

const Thumbnails = ({ is_open, uptime, lastUpdate, owner, rate_limiting }) => {
  return (
    <div className="content-container" id="thumbnail-wrapper">
      {is_open ? (
        <Thumbnail title="Accès" icon={<Unlock />}>
          API ouvert à tous
        </Thumbnail>
      ) : (
        <Thumbnail title="Accès" icon={<Lock />}>
          Sous habilitation
        </Thumbnail>
      )}
      {uptime && (
        <Thumbnail title="Disponibilité" icon={<Activity />}>
          <div className="badge uptime">
            <div
              className="uptime-stat"
              style={{ backgroundColor: getUptimeState(uptime) }}
            />
            {roundUptime(2)(uptime)}% actif / dernier mois
          </div>
        </Thumbnail>
      )}
      <Thumbnail title="Activité" icon={<Calendar />}>
        Dernière modification le {lastUpdate}
      </Thumbnail>
      <Thumbnail title="Producteur" icon={<User />}>
        {owner}
      </Thumbnail>
      {rate_limiting && (
        <Thumbnail title="Limite d’usage" icon={<Sliders />}>
          <div>
            {rate_limiting.split('/').map(rate => (
              <div className="rate" key={rate}>
                {rate}
              </div>
            ))}
          </div>
        </Thumbnail>
      )}
    </div>
  );
};

export default Thumbnails;
