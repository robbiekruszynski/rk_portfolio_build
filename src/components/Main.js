import React from 'react'
import PropTypes from 'prop-types'

// Image imports
import pic04 from '../images/self_bw_2.jpeg'
import Icarus from '../images/ic_lives.gif'
import coffeeSpecGif from '../images/coffeespec.gif'
import Fdlogo from '../images/future_logo.png'
import Rklogo from '../images/rfk_logo_white.png'
import conKau from '../images/conKauri.png'
import inCo from '../images/inCo.png'
import pegMm from '../images/pegMm.png'
import openCV from '../images/openCv.gif'
import rKey from '../images/verify_key.png'
import rDash from '../images/r_dashboard.png'
import rIntro from '../images/r_intro.png'
import r_quest_m from '../images/r_quest_main.png'
import r_quest from '../images/r_quest.png'
import omd_poster from '../images/omd_poster.png'
import rapid_logo from '../images/rapidLogo.png'
import r_3box from '../images/threeBox.png'
import colors from '../images/colors.gif'
import r_d_white from '../images/r_dash_2.png'
import omdLogo from '../images/omdLogo.png'
import mmQuest from '../images/mmQuest.png'
import buidl from '../images/buildB.png'
import eda from '../images/EDA.png'
import stepTwo from '../images/stepTwo.png'
import stepThree from '../images/step3.png'
import infura from '../images/infura.png'
import dotenv from '../images/dotenv.png'
import Chron from '../images/Chronicle_docs_1.png'
import Chron2 from '../images/Chronicle_docs_2.png'
import Ape from '../images/apechain.png'
import ApePortal from '../images/apePortal.png'
import ethgas from '../images/ethgas.gif'
import ethgas2 from '../images/ethgas2.png'

import DeepscryCarousel from './DeepscryCarousel'
import ValspinCarousel from './ValspinCarousel'

const ProjectCard = ({ title, tags, media, children, href, cta }) => (
  <article className="project-card fade-up">
    <div className="project-card-copy">
      <h3>{title}</h3>
      {tags && (
        <ul className="tag-list" aria-label={`${title} tech stack`}>
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <div className="project-description">{children}</div>
    </div>
    {media && <div className="project-media">{media}</div>}
    <a className="project-cta" href={href} target="_blank" rel="noopener noreferrer">
      {cta}
    </a>
  </article>
)

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { designTab: 'wireframes', workTab: 'web3' }
  }

  render() {
    return (
      <main ref={this.props.setWrapperRef} id="main">
        <section id="intro" className="portfolio-section section-dark fade-up">
          <div className="section-inner intro-grid">
            <div className="section-copy">
              <h2 className="section-title">About</h2>
              <div className="rk-info">
                <h4>Focus</h4>
                <p>Developer Relations Lead | Ecosystem Growth</p>
                <h4>Tech Stack</h4>
                <p>React, Next.js, Figma</p>
                <h4>Web3</h4>
                <p>Solidity</p>
                <h4>AI Stack</h4>
                <p>Cursor | Claude | Hermes | OpenClaw</p>
                <h4>Statement</h4>
                <p>
                  What I care about most is what happens after onboarding: developers finding their footing, staying engaged, and keep building. I lead teams and set strategy, but I stay close to the work because developer trust lives in the details. 50+ conferences, hackathons, docs, stage talks. I've worked every layer of the journey.
                </p>
              </div>
            </div>
            <span className="image main intro-image">
              <img src={pic04} alt="" />
            </span>
          </div>
        </section>

        <section id="build" className="portfolio-section section-light">
          <div className="section-inner">
            <p className="eyebrow">Build</p>
            <h2 className="section-title" id="work-section-title">
              Build
            </h2>
            <div
              className="design-tabs"
              role="tablist"
              aria-label="Build sections"
              aria-labelledby="work-section-title"
            >
              <button
                type="button"
                role="tab"
                id="work-tab-web3"
                aria-selected={this.state.workTab === 'web3'}
                aria-controls="work-panel-web3"
                tabIndex={this.state.workTab === 'web3' ? 0 : -1}
                className={this.state.workTab === 'web3' ? 'is-active' : ''}
                onClick={() => this.setState({ workTab: 'web3' })}
              >
                Web3 &amp; ecosystem
              </button>
              <button
                type="button"
                role="tab"
                id="work-tab-personal"
                aria-selected={this.state.workTab === 'personal'}
                aria-controls="work-panel-personal"
                tabIndex={this.state.workTab === 'personal' ? 0 : -1}
                className={this.state.workTab === 'personal' ? 'is-active' : ''}
                onClick={() => this.setState({ workTab: 'personal' })}
              >
                Personal projects
              </button>
            </div>

            <div
              id="work-panel-web3"
              className="project-grid"
              role="tabpanel"
              aria-labelledby="work-section-title work-tab-web3"
              hidden={this.state.workTab !== 'web3'}
            >
              <ProjectCard
                title="TG_Folder_Export"
                tags={['TypeScript', 'Node.js', 'Telegram Bot API']}
                href="https://github.com/robbiekruszynski/TG_Folder_Export"
                cta="Github Link"
                media={
                  <div className="work-project-video">
                    <video controls playsInline preload="metadata" title="TG_Folder_Export demo clip">
                      <source src="/videos/tg_export.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                }
              >
                <p>
                  <b>Project:</b> Built a TypeScript Telegram bot for searching across folders and conversations, including automated action item and calendar event detection. Designed for community managers and DevRel teams managing high-volume developer channels.
                </p>
                <p>
                  <b>Tech:</b> TypeScript, Node.js, Telegram Bot API
                </p>
                <p>
                  <b>Note:</b> Keyword search across message history, direct message deep-links, time-range filters, calendar event extraction, and action-item detection, built for real workflow in busy channels.
                </p>
              </ProjectCard>

              <ProjectCard
                title="Valspin"
                tags={['Python 3.10', 'Flask', 'React', 'Material UI (MUI)', 'NIVO charts', 'HTML/CSS']}
                href="https://github.com/robbiekruszynski/warsaw_hack"
                cta="Github Link"
                media={<ValspinCarousel />}
              >
                <p>
                  <b>Project:</b> Winning hackathon project at ETHWarsaw: Valspin, insurance and swap-style products to hedge ETH staking reward variance for validator operators, with Request Network-style settlement flows in scope. Includes Flask APIs for yield, swap, and insurance pricing plus an experimental live deployment.
                </p>
                <p>
                  <b>Tech:</b> Python 3.10, Flask, React, Material UI (MUI), NIVO charts, HTML/CSS
                </p>
                <p>
                  <b>Note:</b> Companion Python notebooks and sample curl endpoints document the modelling; if the hosted build hits CORS issues, the repo suggests Firefox or running locally (Flask + npm start).
                </p>
              </ProjectCard>

              <ProjectCard
                title="SaferBridge"
                tags={['React', 'Redux', 'React Router', 'Ethers', 'Material UI', 'Solidity', 'Wagmi / Viem']}
                href="https://github.com/robbiekruszynski/ist_bridge_2023"
                cta="Github Link"
                media={
                  <span className="image main">
                    <img src="/images/saferbridge.png" alt="SaferBridge hackathon UI" />
                  </span>
                }
              >
                <p>
                  <b>Project:</b> EthGlobal Istanbul 2023 build: SaferBridge explores a trust-minimized L2→L2 flow that moves value through L1 using each chain’s native bridge messaging, batching users to amortize gas (normal vs. fast modes) instead of relying on typical third-party relayer/LP bridge assumptions.
                </p>
                <p>
                  <b>Tech:</b> React, Redux, React Router, Ethers, Material UI, Solidity, Wagmi / Viem
                </p>
                <p>
                  <b>Note:</b> Hackathon prototype; the repo is explicit that this is not production-hardened code. The demo focused on proving the batched L2→L1→L2 steps on Sepolia test paths (e.g. Scroll) rather than two separate mainnet L2s.
                </p>
              </ProjectCard>

              <ProjectCard
                title="ERC-721 token generator"
                tags={['React', 'Solidity', 'Mocha', 'Chai', 'Ganache']}
                href="https://github.com/Robbiekruszynski/ERC721-TOKENS-NFT"
                cta="Github Link"
                media={
                  <span className="image main">
                    <img src={colors} alt="" />
                  </span>
                }
              >
                <p>
                  <b>Project:</b> Minting non fungible ERC721 tokens based on #HEX color inputs by user
                </p>
                <p>
                  <b>Tech:</b> React, Solidity, Mocha, Chai, Ganache
                </p>
                <p>
                  <b>Note:</b> Giving user the ability to mint tokens using tested OpenZep contracts and using web3 imports with #HEX color inputs. Currently running off Ganache for testing.
                </p>
              </ProjectCard>
            </div>

            <div
              id="work-panel-personal"
              className="project-grid"
              role="tabpanel"
              aria-labelledby="work-section-title work-tab-personal"
              hidden={this.state.workTab !== 'personal'}
            >
              <ProjectCard
                title="SkunkWorks"
                tags={['React', 'Vite', 'JavaScript', 'MediaPipe Hands', 'Canvas API']}
                href="https://github.com/robbiekruszynski/SkunkWorks"
                cta="Github Link"
                media={
                  <div className="work-project-video">
                    <video autoPlay loop muted playsInline preload="metadata" title="SkunkWorks demo clip">
                      <source src="/videos/skunkworks.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                }
              >
                <p>
                  <b>Project:</b> A gesture-driven knowledge graph interface. Point, pinch, and drag information nodes around your screen using your webcam and hand tracking, no mouse required. Nodes connect automatically through shared tags, building a visual web of linked ideas in real time. Mouse fallback always available.
                </p>
                <p>
                  <b>Tech:</b> React, Vite, JavaScript, MediaPipe Hands, Canvas API
                </p>
                <p>
                  <b>Note:</b> Built with MediaPipe Hands running in-browser via WASM. Supports pinch-to-grab, pinch-to-pan, and two-handed pinch-spread zoom. A debug panel (D key) exposes live hand landmark data for calibration. Node positions reset on refresh. Persistence not yet implemented, which is either a bug or a feature depending on your philosophy.
                </p>
              </ProjectCard>

              <ProjectCard
                title="Deepscry"
                tags={['Next.js', 'TypeScript', 'Tailwind CSS']}
                href="https://deepscry.netlify.app/"
                cta="Live deployment"
                media={<DeepscryCarousel />}
              >
                <p>
                  <b>Project:</b> Deepscry (Scry) is a Magic: The Gathering deck lab. Import a Commander decklist, simulate opening hands, and inspect mana curve, color spread, and draw probabilities. Compare your deck to benchmark metas (from precon-style through cEDH-style), review on-curve mana odds, and tag cards (ramp, interaction, draw, wincon) so the math matches how you actually play the deck.
                </p>
                <p>
                  <b>Tech:</b> Next.js, TypeScript, Tailwind CSS
                </p>
                <p>
                  <b>Note:</b> AI-assisted deck insight is on the roadmap; today the app focuses on simulation-backed stats, charts, and probability views for real decklists.
                </p>
              </ProjectCard>

              <ProjectCard
                title="ICARUS LIVES"
                tags={['React', 'ThreeJS', 'iss-api']}
                href="https://github.com/travisty12/solar-simulator"
                cta="Github Link"
                media={
                  <span className="image main">
                    <img src={Icarus} alt="" />
                  </span>
                }
              >
                <p>
                  <b>Project:</b> Showcasing our solar system along with real time tracking of the ISS via API calls
                </p>
                <p>
                  <b>Tech:</b> React, ThreeJS, iss-api
                </p>
                <p>
                  <b>Note:</b> Fully responsive across desktop, tablet, and mobile
                </p>
              </ProjectCard>

              <ProjectCard
                title="Emotional Portal"
                tags={['React', 'JavaScript', 'face-api.js (tensorflow)', 'ThreeJS']}
                href="https://emotions-portal.netlify.app/"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={openCV} alt="" />
                  </span>
                }
              >
                <p>
                  <b>Project:</b> Real time face recognition utilizing canvas.
                </p>
                <p>
                  <b>Tech:</b> React, JavaScript, face-api.js (tensorflow), and ThreeJS
                </p>
                <p>
                  <b>Note:</b> Please allow camera usage. You are able to navigate the space/field clicking + holding outside the white parameters.
                </p>
              </ProjectCard>

              <ProjectCard
                title="coffeeSpec"
                tags={['React 19', 'Vite', 'JavaScript', 'CSS', 'localStorage']}
                href="https://coffeespec.netlify.app/"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={coffeeSpecGif} alt="" />
                  </span>
                }
              >
                <p>
                  <b>Project:</b> A single-page coffee brewing calculator built to help dial in batch brew and espresso recipes. Estimates brew ratio, TDS, predicted extraction yield, water temperature, grind size, and brew time, then visualizes multi-stage pour schedules with cumulative volume and flow-rate diagrams. Includes a countdown brew timer, brew journaling, custom recipes, and grind notes scoped per method.
                </p>
                <p>
                  <b>Tech:</b> React 19, Vite, JavaScript, CSS, localStorage
                </p>
                <p>
                  <b>Note:</b> Built around Coffee Spec brewing method ratios (V60, Chemex, AeroPress, Cold Brew, Espresso, and more). All extraction/TDS/yield numbers are predictive models, not lab measurements, but they'll get you closer to a good cup than vibes alone.
                </p>
              </ProjectCard>
            </div>
          </div>
        </section>

        <section id="write" className="portfolio-section section-dark">
          <div className="section-inner">
            <p className="eyebrow">Write</p>
            <h2 className="section-title">Technical writing</h2>
            <div className="project-grid writing-grid">
              <ProjectCard
                title="ETHGas Documentation"
                tags={['Documentation', 'Technical writing']}
                href="https://docusaurus.ethgas.com/docs/overview/"
                cta="Deployment"
                media={
                  <span className="image main">
                    <img src={ethgas} alt="" />
                    <br />
                    <img src={ethgas2} alt="" />
                  </span>
                }
              >
                <p>ETHGas Documentation</p>
              </ProjectCard>

              <ProjectCard
                title="ApeChain Documentation"
                tags={['Documentation', 'Technical writing']}
                href="https://docs.apechain.com/"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={Ape} alt="" />
                    <br />
                    <img src={ApePortal} alt="" />
                  </span>
                }
              >
                <p>ApeChain Documentation</p>
              </ProjectCard>

              <ProjectCard
                title="Chronicle Labs Documentation"
                tags={['Documentation', 'Technical writing']}
                href="https://docs.chroniclelabs.org/"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={Chron2} alt="" />
                    <br />
                    <img src={Chron} alt="" />
                  </span>
                }
              >
                <p>Chronicle Labs Documentation</p>
              </ProjectCard>

              <ProjectCard
                title="ConsenSys Developer Portal Step 2"
                tags={['Documentation', 'Technical writing']}
                href="https://consensys.net/developers/onboarding-step-2/"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={stepTwo} alt="" />
                  </span>
                }
              >
                <p>ConsenSys Developer Portal Step 2</p>
              </ProjectCard>

              <ProjectCard
                title="ConsenSys Developer Portal Step 3"
                tags={['Documentation', 'Technical writing']}
                href="https://consensys.io/developers/onboarding-step-3"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={stepThree} alt="" />
                  </span>
                }
              >
                <p>ConsenSys Developer Portal Step 3</p>
              </ProjectCard>

              <ProjectCard
                title="Infura Blog: Ethereum JavaScript Libraries: web3.js vs. ethers.js (Part II)"
                tags={['Blog', 'Technical writing']}
                href="https://blog.infura.io/ethereum-javascript-libraries-web3-js-vs-ethers-js-part-ii/"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={infura} alt="" />
                  </span>
                }
              >
                <p>Infura Blog: Ethereum JavaScript Libraries: web3.js vs. ethers.js (Part II)</p>
              </ProjectCard>

              <ProjectCard
                title="Infura Blog: How to Use .env to Enhance Basic Security Within Your DApp"
                tags={['Blog', 'Technical writing']}
                href="https://blog.infura.io/how-to-use-dotenv-to-enhance-basic-security-within-your-dapp/?utm_content=179170480&utm_medium=social&utm_source=twitter&hss_channel=tw-761372197298528256"
                cta="Live deployment"
                media={
                  <span className="image main">
                    <img src={dotenv} alt="" />
                  </span>
                }
              >
                <p>Infura Blog: How to Use .env to Enhance Basic Security Within Your DApp</p>
              </ProjectCard>
            </div>
          </div>
        </section>

        <section id="design" className="portfolio-section section-light">
          <div className="section-inner">
            <p className="eyebrow">Design</p>
            <h2 className="section-title" id="design-section-title">
              Design & Wireframes
            </h2>
            <div
              className="design-tabs"
              role="tablist"
              aria-label="Design sections"
              aria-labelledby="design-section-title"
            >
              <button
                type="button"
                role="tab"
                id="design-tab-wireframes"
                aria-selected={this.state.designTab === 'wireframes'}
                aria-controls="design-panel-wireframes"
                tabIndex={this.state.designTab === 'wireframes' ? 0 : -1}
                className={this.state.designTab === 'wireframes' ? 'is-active' : ''}
                onClick={() => this.setState({ designTab: 'wireframes' })}
              >
                Wireframes
              </button>
              <button
                type="button"
                role="tab"
                id="design-tab-graphic"
                aria-selected={this.state.designTab === 'graphic'}
                aria-controls="design-panel-graphic"
                tabIndex={this.state.designTab === 'graphic' ? 0 : -1}
                className={this.state.designTab === 'graphic' ? 'is-active' : ''}
                onClick={() => this.setState({ designTab: 'graphic' })}
              >
                Graphic design
              </button>
              <button
                type="button"
                role="tab"
                id="design-tab-visual"
                aria-selected={this.state.designTab === 'visual'}
                aria-controls="design-panel-visual"
                tabIndex={this.state.designTab === 'visual' ? 0 : -1}
                className={this.state.designTab === 'visual' ? 'is-active' : ''}
                onClick={() => this.setState({ designTab: 'visual' })}
              >
                Visual
              </button>
            </div>

            <div
              id="design-panel-wireframes"
              className="design-panel fade-up"
              role="tabpanel"
              aria-labelledby="design-section-title design-tab-wireframes"
              hidden={this.state.designTab !== 'wireframes'}
            >
              <h3 className="sub-header">Wireframes &amp; prototypes</h3>
              <p className="design-panel-lede">
                Figma &amp; Sketch, from quick flows to polished UI, so product and engineering align before build.
              </p>
              <span className="image main wireframes-hero">
                <img src="/images/wireframes-hero.png" alt="" />
              </span>
              <span className="image main">
                <img src={rIntro} alt="" />
                <hr />
                <img src={r_3box} alt="" />
                <hr />
                <img src={rKey} alt="" />
                <hr />
                <img src={rDash} alt="" />
                <hr />
                <img src={r_d_white} alt="" />
                <hr />
                <img src={r_quest_m} alt="" />
                <hr />
                <img src={r_quest} alt="" />
                <hr />
                <img src={mmQuest} alt="" />
                <hr />
              </span>
            </div>

            <div
              id="design-panel-graphic"
              className="design-panel fade-up"
              role="tabpanel"
              aria-labelledby="design-section-title design-tab-graphic"
              hidden={this.state.designTab !== 'graphic'}
            >
              <h3 className="sub-header">Graphic design &amp; branding</h3>
              <p className="design-panel-lede">
                Logos, posters, and collateral for internal and ecosystem programs: identity work teams could ship.
              </p>
              <div className="logoBlock">
                <div className="block-one">
                  <span className="logo">
                    <img src={Rklogo} alt="" />
                  </span>
                  <div className="logo-text">
                    <h3>RFK Logo</h3>
                    <p>Personal logo Design</p>
                  </div>
                </div>
                <hr />
                <div className="block-one">
                  <span className="logo rapid">
                    <img src={rapid_logo} alt="" />
                  </span>
                  <div className="logo-text">
                    <h3>RAPID</h3>
                    <p>Logo design for internal spoke RAPID within ConsenSys</p>
                  </div>
                </div>
                <hr />
                <div className="block-one">
                  <span className="logo">
                    <img src={Fdlogo} alt="" />
                  </span>
                  <div className="logo-text">
                    <h3>Future Days</h3>
                    <p>Logo design for a start up software company.</p>
                  </div>
                </div>
                <hr />
                <div className="block-one">
                  <span className="logo">
                    <img src={eda} alt="" />
                  </span>
                  <div className="logo-text">
                    <h3>EDA</h3>
                    <p>Logo design for the Ethereum Developer Alliance</p>
                  </div>
                </div>
                <hr />
                <div className="block-one">
                  <span className="logo omd-logo">
                    <img src={omdLogo} alt="" />
                  </span>
                  <div className="logo-text">
                    <h3>One Million Developers Logo</h3>
                    <p>Badge / kudos design for OMD community</p>
                  </div>
                </div>
                <hr />
                <div className="block-four">
                  <div className="logo-text title">
                    <h2 className="title">Design - Poster Creations</h2>
                    <h3>ConsenSys spoke promotional material</h3>
                    <hr />
                  </div>
                </div>
                <div className="block-five">
                  <div className="logo-text title">
                    <h3>BUIDL Network brochure</h3>
                  </div>
                </div>
                <span className="image main">
                  <img src={buidl} alt="" />
                  <hr />
                </span>
                <div className="block-five">
                  <div className="logo-text title">
                    <h3>One Million Developers promotional material</h3>
                  </div>
                </div>
                <span className="image main">
                  <img src={omd_poster} alt="" />
                  <hr />
                </span>
                <span className="image main">
                  <img src={conKau} alt="" />
                  <hr />
                  <img src={inCo} alt="" />
                  <hr />
                  <img src={pegMm} alt="" />
                  <hr />
                </span>
              </div>
            </div>

            <div
              id="design-panel-visual"
              className="design-panel fade-up"
              role="tabpanel"
              aria-labelledby="design-section-title design-tab-visual"
              hidden={this.state.designTab !== 'visual'}
            >
              <h3 className="sub-header">React &amp; Three.js</h3>
              <p className="design-panel-lede">
                A visual study built with React and Three.js
              </p>
              <div className="work-project-video">
                <video autoPlay loop muted playsInline preload="metadata" title="React and Three.js visual study">
                  <source src="/videos/sm.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="portfolio-section section-dark contact-section fade-up">
          <div className="section-inner">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Contact</h2>
            <div className="contact-card">
              <div className="contact-callout">
                <span className="availability-dot" aria-hidden="true" />
                <p>Open to DevRel roles in Web3 and AI.</p>
              </div>
              <div className="contact-actions">
                <a className="mailto" href="mailto:robbiekruszynski@gmail.com">
                  <span>Email me</span>
                  <h3>robbiekruszynski[at]gmail.com</h3>
                </a>
                <ul className="icons" aria-label="Social links">
                  <li>
                    <a href="https://www.linkedin.com/in/robbie-k/" className="icon fa fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Ro_bbieK" className="icon fa fa-twitter" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                      <span className="label">X (Twitter)</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/ro_bbiek" className="icon fa fa-telegram" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                      <span className="label">Telegram</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Robbiekruszynski" className="icon fa fa-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  media: PropTypes.node,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
}

export default Main

