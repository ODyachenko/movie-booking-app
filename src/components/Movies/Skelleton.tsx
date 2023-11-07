import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: FC = (props) => (
  <ContentLoader
    speed={2}
    width={230}
    height={394}
    viewBox="0 0 230 394"
    backgroundColor="#32363d"
    foregroundColor="#f2f2f2"
    {...props}
  >
    <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="12" ry="12" width="230" height="340" />
    <rect x="0" y="350" rx="0" ry="0" width="340" height="21" />
    <rect x="0" y="377" rx="0" ry="0" width="70" height="16" />
  </ContentLoader>
);

export default MyLoader;
