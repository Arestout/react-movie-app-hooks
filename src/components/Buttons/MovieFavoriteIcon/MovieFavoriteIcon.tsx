import React from 'react';

import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';

export const MovieFavoriteIcon: React.FC = () => {
  return (
    <button type="button" className="icon-button">
      <FavoriteBorderSharpIcon
        className="icon-button__svg"
        style={{ fontSize: 22 }}
      />
    </button>
  );
};
