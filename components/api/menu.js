import React from 'react';
import PropTypes from 'prop-types';

import './menuStyles.scss';

const MENU_OPTIONS = [
  {
    id: 'api-description',
    label: 'Description',
    hasNoDetails: true,
  },
  {
    id: 'access',
    label: 'Accès',
  },
  {
    id: 'contact',
    label: 'Support',
  },
  {
    id: 'monitoring',
    label: 'Supervision',
  },
  {
    id: 'rate_limiting',
    label: "Limite d'usage",
  },
  {
    id: 'partenaires',
    label: 'Partenaires',
  },
  {
    id: 'doc_tech',
    label: 'Documentation technique',
  },
  {
    id: 'services',
    label: 'Services',
    hasNoDetails: true,
  },
];

const Menu = ({ detail, selectedItem, select }) => {
  const onKeyDown = (keyEvent, id) => {
    // toggle on Space or Enter
    if (keyEvent.keyCode === 13) {
      select(id);
    }
  };
  return (
    <div id="api-page-menu">
      {MENU_OPTIONS.map(menu => (
        <div key={menu.id}>
          <div
            className={`item ${selectedItem === menu.id && 'selected'}`}
            role="button"
            tabIndex={0}
            onKeyDown={e => onKeyDown(e, menu.id)}
            onClick={() => select(menu.id)}
          >
            {menu.label}
            {!menu.hasNoDetails &&
              !detail[menu.id] &&
              menu.id !== 'partenaires' && (
                <div className="ui grey mini label">Non renseigné</div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default Menu;
