import React from 'react';

import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';

import '../Buttons.styles.scss';

interface IWatchList {
  isLoading: boolean;
  onClick: () => void;
  isWatchList: () => boolean;
}

export const MovieWatchlistIcon: React.FC<IWatchList> = (props) => {
  const { onClick, isLoading, isWatchList } = props;

  return (
    <button
      type="button"
      className="icon-button"
      onClick={onClick}
      disabled={isLoading}
    >
      {isWatchList() ? (
        <BookmarkSharpIcon
          className="icon-button__svg"
          style={{ fontSize: 22 }}
        />
      ) : (
        <BookmarkBorderSharpIcon
          className="icon-button__svg"
          style={{ fontSize: 22 }}
        />
      )}
    </button>
  );
};
