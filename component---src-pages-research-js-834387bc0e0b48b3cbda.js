(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JYrY:function(e){e.exports=JSON.parse('{"paper":[{"title":"Searching Data Lakes for Nested and Joined Data","conference":"VLDB 2024","authors":"Yi Zhang, <b>Peter Baile Chen</b>, Zack Ives","links":{"Paper":"https://dl.acm.org/doi/10.14778/3681954.3682005"},"bibtex":"@article{zhang2024searching,\\ntitle={Searching Data Lakes for Nested and Joined Data},\\nauthor={Zhang, Yi and Chen, Peter Baile and Ives, Zachary G},\\njournal={Proceedings of the VLDB Endowment},\\nvolume={17},\\nnumber={11},\\npages={3346--3359},\\nyear={2024},\\npublisher={VLDB Endowment}\\n}"},{"title":"MDCR: A Dataset for Multi-Document Conditional Reasoning","authors":"<b>Peter Baile Chen</b>, Yi Zhang, Chunwei Liu, Sejal Gupta, Yoon Kim, Michael Cafarella","links":{"Paper":"https://arxiv.org/abs/2406.11784"},"bibtex":"@article{chen2024mdcr,\\ntitle={MDCR: A Dataset for Multi-Document Conditional Reasoning},\\nauthor={Chen, Peter Baile and Zhang, Yi and Liu, Chunwei and Gupta, Sejal and Kim, Yoon and Cafarella, Michael},\\njournal={arXiv preprint arXiv:2406.11784},\\nyear={2024}\\n}"},{"title":"Is Table Retrieval a Solved Problem? Exploring Join-Aware Multi-Table Retrieval","authors":"<b>Peter Baile Chen</b>, Yi Zhang, Dan Roth","conference":"ACL 2024","links":{"Paper":"https://arxiv.org/abs/2404.09889"},"bibtex":"@article{chen2024table,\\ntitle={Is Table Retrieval a Solved Problem? Join-Aware Multi-Table Retrieval},\\nauthor={Chen, Peter Baile and Zhang, Yi and Roth, Dan},\\njournal={arXiv preprint arXiv:2404.09889},\\nyear={2024}\\n}"},{"title":"Optimization in Universal Health Coverage Design in South Africa Considering Both Health Outcomes and Health-Induced Poverty Outcomes","conference":"ISPOR 2024","authors":"<b>Peter Baile Chen</b>, Yizhi Liang","links":{"Abstract":"https://www.ispor.org/heor-resources/presentations-database/presentation/intl2024-3900/139849","Poster":"https://www.ispor.org/docs/default-source/intl2024/ispor24chenhpr144poster139849-pdf.pdf?sfvrsn=92ceedb8_0"}},{"title":"Fault-tolerant and Transactional Stateful Serverless Workflows","authors":"Haoran Zhang, Adney Cardoza, <b>Peter Baile Chen</b>, Sebastian Angel, Vincent Liu","conference":"OSDI 2020","links":{"Paper":"https://www.usenix.org/system/files/osdi20-zhang_haoran.pdf","Code":"https://github.com/eniac/Beldi"},"bibtex":"@inproceedings {258880,\\nauthor = {Haoran Zhang and Adney Cardoza and Peter Baile Chen and Sebastian Angel and Vincent Liu},\\ntitle = {Fault-tolerant and transactional stateful serverless workflows},\\nbooktitle = {14th USENIX Symposium on Operating Systems Design and Implementation (OSDI 20)},\\nyear = {2020},\\nisbn = {978-1-939133-19-9},\\npages = {1187--1204},\\nurl = {https://www.usenix.org/conference/osdi20/presentation/zhang-haoran},\\npublisher = {USENIX Association},\\nmonth = nov\\n}"}],"projects":[{"head":"Embedding for log-related tasks","summary":"This project aims to construct better log embeddings to improve the performance of log-related downstream tasks (e.g. anomaly detection, log analysis).","desc":["Advised by Professor Mike Cafarella"]},{"head":"Program Analysis","summary":"This project aims to extend software/ program analysis tools from a single function to a state machine.","desc":["Indepdent project; Advised by Professor Oleg Sokolsky"]},{"head":"ReSolution","summary":"This project aims to tackle the prolonged reinferencing time upon retraining of ML models. One of the applications is the incremental maintenance of entity matching in knowledge graphs and associated query results.","desc":["Independent project; Advised by Professor Zack Ives","Devised the algorithm that uses existing inference results as threshold for subsequent inference results","Adapted techniques from relational databases such as incremental view maintenance to graph databases"]},{"head":"JUpyter Notebook with Enhanced Access and Understanding (JUNEAU)","summary":"JUNEAU is a system of holistic data management tools which can find, standardize, and benefit from the existing resources in the data lake. With much improved scalability, the latest version of Juneau supports searching hierarchical and joined data as well as detecting composite data profiles.","desc":["Advised by Professor Zack Ives","Developed the recursive parsing algorithm that normalizes hierarchical data into base relational tables","Initiated the use of sketching techniques to speed up the process of creating and matching data profiles","Enhanced scalability through pre-computations, incremental techniques, and in-database implementations"],"links":{"Code":"https://github.com/juneau-project/juneau"}}]}')},LTVh:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("vOnD"),o=t("85Sb"),s=t("vrFN");const l=e=>{let{children:a,handleCopyClick:t}=e;return r.a.createElement("div",{className:"bibtex",style:{position:"relative",backgroundColor:"#f5f5f5",padding:"15px",borderRadius:"3px",margin:"15px 0"}},r.a.createElement("pre",{style:{margin:0,fontSize:"0.9em"}},a),r.a.createElement("button",{className:"bibtex-copy",onClick:t,style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer",backgroundColor:"#aaa",color:"#fff",border:"0",borderRadius:"3px",padding:"5px",outline:"none",fontSize:"0.8em",fontFamily:"sans-serif"}},"Copy"))};var c=e=>{let{children:a,withToggle:t}=e;const{0:i,1:o}=Object(n.useState)(!1),s=e=>{o(!i),e.preventDefault()},c=()=>{navigator.clipboard.writeText(a)};return t?i?r.a.createElement(r.a.Fragment,null,"| ",r.a.createElement("a",{href:"#",onClick:s},"Hide BibTeX"),r.a.createElement(l,{handleCopyClick:c},a)):r.a.createElement(r.a.Fragment,null,"| ",r.a.createElement("a",{href:"#",onClick:s},"View BibTeX")):r.a.createElement(l,{handleCopyClick:c},a)},d=t("JYrY");const h=i.a.div.withConfig({displayName:"research__Wrapper",componentId:"sc-2pluk3-0"})(["margin-top:4em;padding:0em 5rem;@media screen and (max-width:768px){padding:0 2em;margin-top:2em;}"]),{paper:m,projects:p}=d,u=e=>{let{title:a,authors:t,conference:n,links:i,bibtex:o}=e;return r.a.createElement("li",{style:{margin:"0.5rem 0"}},r.a.createElement("p",{style:{fontSize:"1.2rem",margin:"0"}},r.a.createElement("em",null," ",a," ")," ",n&&r.a.createElement(r.a.Fragment,null,"| ",n)),r.a.createElement("p",{style:{fontSize:"0.9rem",margin:"0"},dangerouslySetInnerHTML:{__html:t}}),i&&Object.keys(i).map((e,a)=>r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:""+i[e]},e)," ",a<Object.keys(i).length-1?"|":""," ")),o&&r.a.createElement(c,{withToggle:!0},o))};a.default=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"Research"}),r.a.createElement("div",{className:"container-fluid h-100"},r.a.createElement("div",{className:"row h-100"},r.a.createElement(o.a,null),r.a.createElement(h,{className:"col-md-9 body-content"},r.a.createElement("p",{style:{fontSize:"2rem",fontWeight:"800",marginBottom:"0.5rem"}},"Publications"),r.a.createElement("ul",null,m.map(e=>r.a.createElement(u,e)))))))}}]);
//# sourceMappingURL=component---src-pages-research-js-834387bc0e0b48b3cbda.js.map