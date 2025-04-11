/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-HJMLC60W00"
    />,
    <script
      key="gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HJMLC60W00');
        `,
      }}
    />,
  ])
}