import '@stoplight/elements-core/styles.css';

import { API } from '@stoplight/elements';
import { Box } from '@stoplight/mosaic';
import React, { useContext } from 'react';

import { GlobalContext } from '../context';

function urlWithCorsProxy(url: string): string {
  const cors = new URL('https://cors-anywhere-ybtjbo45iq-uc.a.run.app');
  cors.searchParams.set('u', url);
  return cors.href;
}

export const ElementsAPI: React.FC = () => {
  const { apiDescriptionUrl } = useContext(GlobalContext);

  const specUrlWithProxy =
    apiDescriptionUrl && window.location.origin === 'https://taichunmin.idv.tw'
      ? urlWithCorsProxy(apiDescriptionUrl)
      : apiDescriptionUrl;

  return (
    <Box flex={1} overflowY="hidden">
      <API apiDescriptionUrl={specUrlWithProxy} router="hash" />
    </Box>
  );
};
