import React from 'react';

const itemContext = React.createContext({
  passData: () => { },
  resetData: () => { },
})

export default itemContext;