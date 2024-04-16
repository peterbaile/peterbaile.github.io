import React from 'react'
import s from 'styled-components'

import Nav from '../components/Nav'
import SEO from '../components/seo'
import Bibtex from '../components/Bibtex'

import ResearchJSON from '../json/research.json'

const Wrapper = s.div`
  margin-top: 4em;
  padding: 0em 5rem;

  @media screen and (max-width: 768px) {
    padding: 0 2em;
    margin-top: 2em;
  }
`

const { paper, projects } = ResearchJSON

const Paper = ({ title, authors, conference, links, bibtex }) => (
  <li style={{ margin: '0.5rem 0' }}>
    <p style={{ fontSize: '1.2rem', margin: '0'}}>
      <em> {title} </em> {conference && <>| {conference}</>}
    </p>
    <p style={{ fontSize: '0.9rem', margin: '0' }} dangerouslySetInnerHTML={{__html: authors}} />
    {Object.keys(links).map((k, idx) => (
      <><a href={`${links[k]}`}>{k}</a> {idx < Object.keys(links).length - 1 ? '|' : ''} </>
    ))}
    {bibtex && <Bibtex withToggle>{bibtex}</Bibtex>}
  </li>
)

const Project = ({ head, summary, desc, links }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <em style={{ fontSize: '1.2rem' }}> {head} </em>
    {Boolean(summary) && (
      <ul style={{ margin: '0.3rem 0', listStyleType: 'none', textAlign: 'justify' }}>
        <li> {summary} </li>
      </ul>
    )}
    {Boolean(desc.length) && (
      <ul style={{ marginBottom: '0' }}>
        {desc.map(e => (
          <li style={{ fontWeight: '300' }}> {e} </li>
        ))}
      </ul>
    )}
    {links && Object.keys(links).map(k => (
      <><a href={`${links[k]}`}>[ {k} ]</a> &nbsp;</>
    ))}
  </div>
)

const Research = () => (
  <>
    <SEO title="Research" />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <Wrapper className="col-md-9 body-content">
          <p style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Publications</p>
          <ul>
            {paper.map(e => (
              <Paper {...e} />
            ))}
          </ul>
          {/* <div style={{ margin: '4rem 0' }} />
          <p style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Projects</p>
          {projects.map(e => (
            <Project {...e} />
          ))} */}
        </Wrapper>
      </div>
    </div>
  </>
)

export default Research
