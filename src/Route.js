import React from 'react';
import { Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

export default function AppRoute (props) {
  const { title = 'HackerNewsX', ...rest } = props;
  return (
    <DocumentTitle title={`${title} | HackerNewsX`}>
      <Route {...rest} />
    </DocumentTitle>
  );
}
