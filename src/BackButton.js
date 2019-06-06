import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBack = ({ history }) => (
  <div onClick={() => history.goBack()} alt="Go back">
    Back{' '}
  </div>
);

export default withRouter(GoBack);
