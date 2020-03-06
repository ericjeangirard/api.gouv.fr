import React from 'react';

import ApiCard from '../searchApis/apiCard';
import { ButtonLink } from '../../uiComponents';

import './apiTripletSectionStyles.scss';

const ApiTripletSection = ({ apiList }) => (
  <section id="apis">
    <div className="content-container">
      <h3>Découvrez des APIs du service public&nbsp;:</h3>
      <div className="ui three stackable cards">
        {apiList
          .sort((a, b) => (a.visits_2019 > b.visits_2019 ? -1 : 1))
          .slice(0, 3)
          .map(api => (
            <ApiCard key={api.title} {...api} />
          ))}
      </div>
    </div>
    <div className="layout-center">
      <ButtonLink href="rechercher-api" large alt>
        Voir toutes les APIs ☞
      </ButtonLink>
    </div>
  </section>
);

export default ApiTripletSection;
