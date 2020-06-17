import React from 'react'
const providers = [
  require('./MuiProvider').default, 
  require('./ReduxProvider').default, 
];

const Providers = ({
  children, 
}) => {
  return (
    providers.reduce((children, Provider) => (
      <Provider>
        {children}
      </Provider>
    ), children)
  );
}

export default Providers
