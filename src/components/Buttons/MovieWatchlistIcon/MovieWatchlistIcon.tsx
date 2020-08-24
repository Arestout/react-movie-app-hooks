import React from 'react';

import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
// import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';

import '../Buttons.styles.scss';

export const MovieWatchlistIcon: React.FC = () => {
  return (
    <button type="button" className="icon-button">
      <BookmarkBorderSharpIcon style={{ fontSize: 22 }} />
    </button>
  );
};
