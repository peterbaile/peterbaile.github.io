import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => {
  const {
    site: {
      siteMetadata: { description, author, keywords },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Peter Baile Chen" />
      <meta property="og:url" content="https://peterbaile.github.io/" />
      <meta property="twitter:url" contet="https://peterbaile.github.io/" />
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>
        {!title ? 'Peter Baile Chen' : `Peter Baile Chen | ${title}`}
      </title>
    </Helmet>
  )
}

export default SEO
