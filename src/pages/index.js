import React from 'react'
import s from 'styled-components'

// import components
import Nav from '../components/Nav'
import SEO from '../components/seo'
import VisibleText from '../components/VisibleText'

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

const Quote = s.div`
  border-left: 4px solid #ccc;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  color: #555;
  background-color: #f9f9f9;
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
              Hi! I am Peter (陳百樂), a PhD student at <a href="https://www.csail.mit.edu/">MIT CSAIL</a>. My research lies at the intersection of data systems and natural language processing. I am fortunate to work with <a href="https://www.csail.mit.edu/person/michael-cafarella">Mike Cafarella</a>, <a href="https://www.csail.mit.edu/person/michael-stonebraker">Mike Stonebraker</a>, <a href="https://db.csail.mit.edu/madden/">Sam Madden</a>, <a href="https://www.cis.upenn.edu/~danroth/">Dan Roth</a>, and <a href="https://www.mit.edu/~jda/">Jacob Andreas</a>. I graduated from
              the <a href="https://www.upenn.edu/">University of Pennsylvania</a> with a BSE degree. At Penn, I had the chance to work with <a href="https://www.cis.upenn.edu/~zives/">Zack Ives</a>, <a href="https://www.cis.upenn.edu/~sga001/">Sebastian Angel</a>, and <a href="https://vincen.tl/">Vincent Liu</a>. I am supported by <a href="https://scholars.croucher.org.hk/scholars/baile-chen">the Croucher scholarship</a> and Google PhD Fellowship in collaboration with MIT.
              {/* <br />
              <br />
              I am interested in improving the performance of LLMs in the context of information retrieval and complex reasoning. I also work on Machine Learning systems and data management. */}
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              As a researcher working at the crossroads of <b>data management</b> and <b>NLP</b>, my goal is to contribute fresh insights by connecting data management methodologies with recent developments in artificial intelligence.
              <ul style={{ marginBottom: 0 }}>
                <li>
                  <b>Conventional data management systems</b> are designed to support querying over large-scale databases and are optimized for efficiency and precision by carefully managing all phases of the query lifecycle—from offline data storage and ingestion to online query execution. <i>These systems, however, often sacrifice versatility and expressiveness for performance.</i>
                </li>
                <li>
                  On the other hand, <b>LLMs</b> have demonstrated capabilities to query diverse and complex data sources with far greater flexibility. <i>Yet, this comes with a significant computational cost. Moreover, they lack the systematic problem-solving strategies typical of traditional data systems, and as a result, exhibit surprising failures.</i>
                </li>
              </ul>
              This contrast presents an intriguing challenge:
              <br/>
              <br/>
              <h5><b>Is it possible to blend the strengths of data management and LLM paradigms?</b></h5>
            </div>
            
            <div style={{ background: 'rgba(0, 118, 223, 0.05)', padding: '1rem', marginBottom: '1rem' }}>
              <p><b>Data systems for LLMs: Can we embed core efficiency and systematic processing principles of data management to enhance LLMs?</b></p>
              <p style={{ textDecoration: 'underline', marginBottom: '0' }}>Reasoning inefficiency</p>
              <ul style={{ marginBottom: '0' }}>
                <li>
                  Embedding view maintenance into LLMs (<a href="https://peterbaile.github.io/lag/">LAG</a>)
                  <VisibleText>
                    <ul style={{ marginBottom: '0' }}>
                      <li>
                        Current LLMs and their agentic variants handle user tasks in isolation, without remembering prior interactions. This lack of memory hinders their ability to reuse past reasoning, resulting in repetitive thought processes and an inability to reflect on previous tasks.
                      </li>
                      <Quote>
                        For instance, when solving <span style={{ textDecoration: 'underline' }}>task 1</span> composed of three sub-tasks: A &rarr; C &rarr; D, an LLM decomposes it and address each step sequentially. Later, when presented with <span style={{ textDecoration: 'underline' }}>task 2</span>, which consists of B &rarr; C &rarr; D, the LLM repeats the process from scratch, unaware that the reasoning for sub-tasks C and D has already been performed and could be reused.
                      </Quote>
                      <li>
                        In contrast, databases use view maintenance, preserving the results of key queries to reuse them. Inspired by this, we introduce log-augmented generation, a method that allows LLMs to reuse prior computations and reasoning from past logs during inference, leading to substantial improvements in both accuracy and efficiency.
                      </li>
                    </ul>
                  </VisibleText>
                </li>
              </ul>
              <p style={{ textDecoration: 'underline', marginTop: '1rem'}}>Retrieval inefficiency</p>
              <ul style={{ marginBottom: '0' }}>
                <li>
                  Embedding formal data management operators into LLMs (<a href="https://peterbaile.github.io/arm/">ARM</a> and <a href="https://peterbaile.github.io/jar/">JAR</a>)
                  <VisibleText>
                    <ul style={{ marginBottom: '0' }}>
                      <li>
                        Current LLM-based query methods often follow an ad-hoc, agent-like approach—treating models as humans that semantically explore relevant information iteratively, typically without convergence guarantees. While intuitive and easy to implement, this can be inefficient and lead to incomplete answers due to missing connections between data sources.
                      </li>
                      <Quote>
                        For instance, to answer <i>How many students are in schools across all California counties?</i>, the model might retrieve data on schools and student counts, and separately a list of California counties. However, without an explicit mapping between school locations and counties, the model cannot integrate evidence from different sources.
                      </Quote>
                      <li>
                        In contrast, a key principle in traditional databases is to employ well-defined operators like joins, which explicitly connect related data elements. In our research, we showed that equipping LLMs with a systematic module to assess and leverage joinability can significantly improve both their accuracy and efficiency.
                      </li>
                    </ul>
                  </VisibleText>
                </li>
                <li>
                  Embedding offline data processing pipelines into LLMs (<a href="https://peterbaile.github.io/enrichindex/">EnrichIndex</a>)
                  <VisibleText>
                    <ul style={{ marginBottom: '0' }}>
                      <li>
                        LLM-based methods often rely on complex, costly online computations to boost performance, overlooking the potential of offline improvements.
                      </li>
                      <li>
                        Traditional data systems, however, utilize data processing pipelines to enhance data quality before it is queried. Inspired by this, we designed an offline information enrichment process that deepens the semantic content of individual data items. Our findings show this offline strategy can greatly improve the efficiency of downstream tasks while maintaining—or even improving—overall performance.
                      </li>
                    </ul>
                  </VisibleText>
                </li>
              </ul>
            </div>

            <div style={{ background: 'rgba(0, 118, 223, 0.05)', padding: '1rem', marginBottom: '2rem' }}>
              <p><b>LLMs for data systems: Can the expressiveness of LLMs be harnessed to enhance data management?</b></p>
              <ul style={{ marginBottom: '0' }}>
                <li>
                Leveraging LLMs to translate natural language questions into SQL in enterprise contexts (<a href="https://arxiv.org/abs/2409.02038">Beaver</a>)
                <VisibleText>
                  <ul style={{ marginBottom: '0' }}>
                    <li>
                      Writing SQL to query databases—especially for complex, enterprise-level queries—can be challenging, particularly for non-experts.
                    </li>
                    <li>
                      In our recent work, we explored using LLMs to translate natural language questions into SQL in enterprise contexts. While LLMs demonstrate strong reasoning capabilities, they often fall short when domain-specific knowledge—such as internal terminology or business rules—is required. 
                    </li>
                    <Quote>
                    For instance, if a user query involves the location of the Chemistry department but the database only lists building numbers, the model may fail without knowing which number maps to that department. This information, while not stored in tables, might exist in documents like building floor plans.
                    </Quote>
                    <li>
                      We are currently exploring ways to integrate such domain-specific knowledge into LLMs—potentially from multi-modal sources—in a scalable, generalizable manner without resorting to expensive fine-tuning. We believe that enhancing LLMs in other key aspects can better unlock their expressiveness and significantly benefit existing data management systems.
                    </li>
                  </ul>
                </VisibleText>
                </li>
              </ul>
            </div>

            <h4>News</h4>
            <ul>
              <li>(May 2025) Our paper on <a href="https://peterbaile.github.io/arm/">alignment-oriented retrieval (ARM)</a> was accepted to ACL 2025 (main).</li>
              <li>(May 2025) I am honored to be a Schwarzman College of Computing Future Research Cohort fellow, funded by Google.</li>
              <li>(September 2024) Our paper on <a href="https://peterbaile.github.io/mdcr/">multi-document conditional reasoning (MDCR)</a> was accepted to EMNLP 2024 (findings).</li>
              <li>(August 2024) JAR was awarded the outstanding paper at <a href="https://knowledgeable-lm.github.io/">Towards Knowledgeable Language Models @ ACL 2024</a>.</li>
              <li>(May 2024) Our paper on <a href="https://peterbaile.github.io/jar/">join-aware multi-table retrieval (JAR)</a> was accepted to ACL 2024 (main).</li>
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
