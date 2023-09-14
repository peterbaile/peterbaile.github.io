import React from 'react'
import s from 'styled-components'

// import components
import Nav from '../components/Nav'
import SEO from '../components/seo'

const Wrapper = s.div`
  margin-top: 4em;
  margin-bottom: 2em;
  padding: 0em 8em;

  @media screen and (max-width: 768px) {
    padding: 0 2em;
    margin-bottom: 0;
  }
`

const Img = s.img`
  width: 20%;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

const AboutPage = () => (
  <>
    <SEO />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <Wrapper className="col-md-9 body-content">
          <div className="text-center" style={{ marginBottom: '3em' }}>
            <Img
              src="/images/headshot.jpg"
              className="img-fluid"
              alt="profile"
            />
          </div>
          <div>
            <p className="text-justify" style={{ marginBottom: '2em' }}>
              Hi! I am Peter, a second-year PhD student in <a href="http://dsg.csail.mit.edu/">MIT DSG group</a>, co-advised by <a href="https://www.csail.mit.edu/person/michael-cafarella">Mike Cafarella</a> and <a href="https://www.csail.mit.edu/person/michael-stonebraker">Mike Stonebraker</a>. I graduated Summa Cum Laude from&nbsp;
              <a href="https://www.upenn.edu/">University of Pennsylvania</a> with a BSE degree in&nbsp;
              <a href="https://www.nets.upenn.edu/">Networked &#38; Social Systems Engineering (NETS)</a>.
              Baile (百樂) is my Chinese first name, meaning a hundred happiness.
              <br />
              <br />
              I am interested in Machine Learning systems, Natural Language Processing, and data management.
              Previously, I am a member of <a href="https://db.cis.upenn.edu/">Penn Database group</a> advised by&nbsp;
              <a href="https://www.cis.upenn.edu/~zives/">Professor Zack Ives</a>,
              building systems for ML.
              Prior to this, I worked with <a href="https://www.cis.upenn.edu/~sokolsky/">Professor Oleg Sokolsky</a> from the <a href="https://precise.seas.upenn.edu/">PRECISE Center</a> on software analysis tools. I was also a member of the <a href="https://dsl.cis.upenn.edu/">Penn Distributed Systems Lab</a>, working with <a href="https://www.cis.upenn.edu/~sga001/">Professor Sebastian Angel</a> and <a href="https://vincen.tl/">Professor Vincent Liu</a>.
              {/* Outside of research, I am the student instructor of&nbsp;
              <a href="https://www.seas.upenn.edu/~cis197/">CIS 197</a>&nbsp;and
              a teaching assistant for&nbsp;
              <a href="https://www.cis.upenn.edu/~cis455/">CIS 455/555</a>. */}
              <br />
              <br />
              Things I do when I am free &#61;
              🏃‍♂️&nbsp;&nbsp;&#43;&nbsp;&nbsp;🏊&nbsp;&nbsp;&#43;&nbsp;&nbsp;🚴‍♂️
            </p>
            {/* <a
                className="btn btn-outline-info"
                href="/files/resume.pdf"
                target="_blank"
              >
                View My Resume &#8594;
              </a> */}
          </div>
        </Wrapper>
      </div>
    </div>
  </>
)

export default AboutPage
