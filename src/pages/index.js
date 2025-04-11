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
            <p style={{ marginBottom: '2rem' }}>
              Hi! I am Peter (陳百樂), a PhD student at <a href="https://www.csail.mit.edu/">MIT CSAIL</a>. My research lies at the intersection of data systems and natural language processing. I work with <a href="https://www.csail.mit.edu/person/michael-cafarella">Mike Cafarella</a>, <a href="https://www.csail.mit.edu/person/michael-stonebraker">Mike Stonebraker</a>, and <a href="https://www.cis.upenn.edu/~danroth/">Dan Roth</a>. I graduated from
              the <a href="https://www.upenn.edu/">University of Pennsylvania</a> with a BSE degree. At Penn, I had the chance to work with <a href="https://www.cis.upenn.edu/~zives/">Zack Ives</a>, <a href="https://www.cis.upenn.edu/~sga001/">Sebastian Angel</a>, and <a href="https://vincen.tl/">Vincent Liu</a>. I am supported by <a href="https://scholars.croucher.org.hk/scholars/baile-chen">the Croucher scholarship</a>.
              {/* <br />
              <br />
              I am interested in improving the performance of LLMs in the context of information retrieval and complex reasoning. I also work on Machine Learning systems and data management. */}
            </p>
            
            <p>Data systems are typically efficient but lack flexibility, whereas large language models (LLMs) offer much greater adaptability, albeit with significantly higher computational demands.</p>
            
            <div style={{ background: 'rgba(0, 118, 223, 0.05)', padding: '1rem', marginBottom: '1rem' }}>
              <p><b>Data systems for LLMs: Can we embed core efficiency and systematic processing principles of data management to enhance LLMs?</b></p>
              <ul style={{ marginBottom: '0' }}>
                <li>
                  Inspired by join operators in data systems, I developed alignment-oriented retrieval (<a href="https://arxiv.org/abs/2501.18539">ARM</a> and <a href="https://arxiv.org/abs/2404.09889">JAR</a>) to ensure retrieval considers both query relevance and compatibility among results.
                </li>
                <li>
                  Inspired by data processing pipelines, I developed an <a href="https://arxiv.org/abs/2504.03598">offline information enrichment process</a> that deepens the semantic content of individual data items.
                </li>
              </ul>
            </div>

            <div style={{ background: 'rgba(0, 118, 223, 0.05)', padding: '1rem', marginBottom: '2rem' }}>
              <p><b>LLMs for data systems: Can the expressiveness of LLMs be harnessed to enhance data management?</b></p>
              <ul style={{ marginBottom: '0' }}>
                <li>
                  I investigate using LLMs for <a href="https://arxiv.org/abs/2409.02038">enterprise text-to-SQL</a> to simplify database querying for business users.
                </li>
              </ul>
            </div>

            <h4>News</h4>
            <ul>
              <li>(September 2024) Our paper on <a href="https://peterbaile.github.io/mdcr/">multi-document conditional reasoning (MDCR)</a> was accepted to EMNLP 2024 (findings).</li>
              <li>(August 2024) JAR was awarded the outstanding paper at <a href="https://knowledgeable-lm.github.io/">Towards Knowledgeable Language Models @ ACL 2024</a>.</li>
              <li>(May 2024) Our paper on <a href="https://arxiv.org/abs/2404.09889">join-aware multi-table retrieval (JAR)</a> was accepted to ACL 2024 (main).</li>
            </ul>
            {/* <p style={{ marginBottom: '2em' }}>
              Hi! I am Peter, a second-year PhD student at <a href="https://www.csail.mit.edu/">MIT CSAIL</a>, co-advised by <a href="https://www.csail.mit.edu/person/michael-cafarella">Mike Cafarella</a> and <a href="https://www.csail.mit.edu/person/michael-stonebraker">Mike Stonebraker</a>. I graduated Summa Cum Laude from&nbsp;
              the <a href="https://www.upenn.edu/">University of Pennsylvania</a> with a BSE degree in&nbsp;
              <a href="https://www.nets.upenn.edu/">Networked &#38; Social Systems Engineering (NETS)</a>.
              Baile (百樂) is my Chinese first name, meaning a hundred happiness.
              <br />
              <br />
              I am interested in improving the performance of LLMs in the context of information retrieval and complex reasoning. I also work on Machine Learning systems and data management.
              Previously, I was a member of the <a href="https://db.cis.upenn.edu/">Penn Database group</a> advised by&nbsp;
              <a href="https://www.cis.upenn.edu/~zives/">Professor Zack Ives</a>,
              building ML systems.
              Prior to this, I worked with <a href="https://www.cis.upenn.edu/~sokolsky/">Professor Oleg Sokolsky</a> from the <a href="https://precise.seas.upenn.edu/">PRECISE Center</a> on software analysis tools. I was also a member of the <a href="https://dsl.cis.upenn.edu/">Penn Distributed Systems Lab</a>, working with <a href="https://www.cis.upenn.edu/~sga001/">Professor Sebastian Angel</a> and <a href="https://vincen.tl/">Professor Vincent Liu</a>.
              Outside of research, I am the student instructor of&nbsp;
              <a href="https://www.seas.upenn.edu/~cis197/">CIS 197</a>&nbsp;and
              a teaching assistant for&nbsp;
              <a href="https://www.cis.upenn.edu/~cis455/">CIS 455/555</a>. 
              <br />
              <br />
              Things I do when I am free &#61;
              🏃‍♂️&nbsp;&nbsp;&#43;&nbsp;&nbsp;🏊&nbsp;&nbsp;&#43;&nbsp;&nbsp;🚴‍♂️
            </p> */}
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
