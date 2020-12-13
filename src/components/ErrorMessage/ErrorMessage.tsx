import React, { FC } from 'react';

import './ErrorMessage.styles.scss';

type ErrorMessage = { errorMessage: string };

export const ErrorMessage: FC<ErrorMessage> = ({
  errorMessage,
}: ErrorMessage) => <div className="error-wrapper">{errorMessage}</div>;
