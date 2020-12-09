import React from 'react';

import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface IFavorite {
  isLoading: boolean;
  onClick: () => void;
  isFavorite: () => boolean;
}

export const MovieFavoriteIcon: React.FC<IFavorite> = (props) => {
  const { onClick, isLoading, isFavorite } = props;

  return (
    <button
      type="button"
      className="icon-button"
      onClick={onClick}
      disabled={isLoading}
    >
      {isFavorite() ? (
        <FavoriteIcon className="icon-button__svg" style={{ fontSize: 22 }} />
      ) : (
        <FavoriteBorderSharpIcon
          className="icon-button__svg"
          style={{ fontSize: 22 }}
        />
      )}
    </button>
  );
};
