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

const AboutPage = () => (
  <>
    <SEO title="About" />
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Nav />

        <Wrapper className="col-md-9 body-content">
          <div className="text-center" style={{ marginBottom: '3em' }}>
            <img
              src="/images/profile_picture.jpg"
              className="img-fluid"
              alt="profile"
              height="30%"
              width="30%"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div>
            <p className="text-justify" style={{ marginBottom: '2em' }}>
              Hi! I am Peter, a senior studying&nbsp;
              <a href="https://www.nets.upenn.edu/">
              Networked &#38; Social Systems Engineering (NETS)
              </a>
              &nbsp;at the&nbsp;
              <a href="https://www.upenn.edu/">University of Pennsylvania</a>.
              Baile (百樂) is my Chinese first name, meaning a hundred
              happiness. I am interested in the intersection of databases,
              systems, and machine learning. Currently, I am a member of the
              PennDB group advised by&nbsp;
              <a href="https://www.cis.upenn.edu/~zives/">Prof. Zack Ives</a>,
              building systems for ML. Outside of research, I am the student
              instructor of&nbsp;
              <a href="https://www.seas.upenn.edu/~cis197/">CIS 197</a>&nbsp;and a
              teaching assistant for&nbsp;
              <a href="https://www.cis.upenn.edu/~cis455/">CIS 455/555</a>.
              <br />
              <br />
              Things I do when I am free &#61;
              🥊&nbsp;&nbsp;&#43;&nbsp;&nbsp;🏃&nbsp;&nbsp;&#43;&nbsp;&nbsp;🎮
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
