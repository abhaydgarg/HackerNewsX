import React from 'react';

const RefreshContext = React.createContext({});

export default RefreshContext;
export const RefreshProvider = RefreshContext.Provider;
export const RefreshConsumer = RefreshContext.Consumer;
