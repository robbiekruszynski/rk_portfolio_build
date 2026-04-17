import React from 'react'
import PropTypes from 'prop-types'

// Image imports
import pic04 from '../images/self_bw_2.jpeg'
import Icarus from '../images/ic_lives.gif'
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
import py from '../images/py.gif'
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

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { designTab: 'wireframes', workTab: 'web3' }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article === 'design' && this.props.article !== 'design') {
      this.setState({ designTab: 'wireframes' })
    }
    if (prevProps.article === 'work' && this.props.article !== 'work') {
      this.setState({ workTab: 'web3' })
    }
  }

  render() {
    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <div className="rk-info">
            <h4>Focus</h4>
            <p>Developer Relations Lead | Community Strategy | Technical Documentation | Developer Onboarding | Ecosystem Growth</p>
            <h4>Tech Stack</h4>
            <p>React : Next | Solidity</p>
            <h4>Design Stack</h4>
            <p>Figma</p>
            <h4>Statement</h4>
            <p>
              Technical documentation, hackathons, webinars, stage talks, community metrics, 50+ conferences — I've worked every layer of the developer journey. I lead teams and set strategy, but I stay close to the work because the details matter. What I care about most is what happens after onboarding: that developers find their footing, stay engaged, and keep building.
            </p>
          </div>
          {close}
        </article>

        <article
          id="technical-writing"
          className={`${this.props.article === 'write' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="title">Technical writing:</h2>
          <p>ETHGas Documentation</p>
          <a href="https://docusaurus.ethgas.com/docs/overview/" target="_blank" rel="noopener noreferrer">
            Deployment
          </a>
          <span className="image main">
            <img src={ethgas} alt="" />
            <br />
            <img src={ethgas2} alt="" />
          </span>
          <hr />
        
          <p>ApeChain Documentation</p>
          <a href="https://docs.apechain.com/" target="_blank" rel="noopener noreferrer">
            Live deployment
          </a>
          <span className="image main">
            <img src={Ape} alt="" />
            <br />
            <img src={ApePortal} alt="" />
          </span>
          <hr />
          <p>Chronicle Labs Documentation</p>
          <a href="https://docs.chroniclelabs.org/" target="_blank" rel="noopener noreferrer">
            Live deployment
          </a>
          <span className="image main">
            <img src={Chron2} alt="" />
            <br />
            <img src={Chron} alt="" />
          </span>
    
          <hr />
          <p>ConsenSys Developer Portal Step 2</p>
          <a href="https://consensys.net/developers/onboarding-step-2/" target="_blank" rel="noopener noreferrer">
            Live deployment
          </a>
          <span className="image main">
            <img src={stepTwo} alt="" />
          </span>
          <hr />
          <p>ConsenSys Developer Portal Step 3</p>
          <a href="https://consensys.io/developers/onboarding-step-3" target="_blank" rel="noopener noreferrer">
            Live deployment
          </a>
          <span className="image main">
            <img src={stepThree} alt="" />
          </span>
          <hr />
          <p>Infura Blog: Ethereum JavaScript Libraries: web3.js vs. ethers.js (Part II)</p>
          <a href="https://blog.infura.io/ethereum-javascript-libraries-web3-js-vs-ethers-js-part-ii/" target="_blank" rel="noopener noreferrer">
            Live deployment
          </a>
          <span className="image main">
            <img src={infura} alt="" />
          </span>
          <hr />
          <p>Infura Blog: How to Use .env to Enhance Basic Security Within Your DApp</p>
          <a href="https://blog.infura.io/how-to-use-dotenv-to-enhance-basic-security-within-your-dapp/?utm_content=179170480&utm_medium=social&utm_source=twitter&hss_channel=tw-761372197298528256" target="_blank" rel="noopener noreferrer">
            Live deployment
          </a>
          <span className="image main">
            <img src={dotenv} alt="" />
          </span>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="title" id="work-section-title">
            Build
          </h2>
          <hr />
          <div
            className="design-tabs work-tabs"
            role="tablist"
            aria-label="Project categories"
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
            role="tabpanel"
            aria-labelledby="work-tab-web3"
            hidden={this.state.workTab !== 'web3'}
          >
            <h3>TG_Folder_Export</h3>
            <div className="workText">
              <div className="work-project-video">
                <video controls playsInline preload="metadata" title="TG_Folder_Export demo clip">
                  <source src="/videos/tg_export.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p>
                <b>Project:</b> Built a TypeScript Telegram bot for searching across folders and conversations — includes automated action item and calendar event detection. Designed for community managers and DevRel teams managing high-volume developer channels.
              </p>
              <p>
                <b>Tech:</b> TypeScript, Node.js, Telegram Bot API
              </p>
              <p>
                <b>Note:</b> Keyword search across message history, direct message deep-links, time-range filters, calendar event extraction, and action-item detection—built for real workflow in busy channels.
              </p>
              <a href="https://github.com/robbiekruszynski/TG_Folder_Export" target="_blank" rel="noopener noreferrer">
                Github Link
              </a>
              <hr />
            </div>
            {/* bd_discord_bot: hidden for now — restore from git history if needed */}
            <h3>Valspin</h3>
            <div className="workText">
              <div className="work-project-video">
                <video controls playsInline preload="metadata" title="Valspin demo clip">
                  <source src="/videos/warsaw_hack.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p>
                <b>Project:</b> Winning hackathon project at ETHWarsaw: Valspin—insurance and swap-style products to hedge ETH staking reward variance for validator operators, with Request Network–style settlement flows in scope. Includes Flask APIs for yield, swap, and insurance pricing plus an experimental live deployment.
              </p>
              <p>
                <b>Tech:</b> Python 3.10, Flask, React, Material UI (MUI), NIVO charts, HTML/CSS
              </p>
              <p>
                <b>Note:</b> Companion Python notebooks and sample curl endpoints document the modelling; if the hosted build hits CORS issues, the repo suggests Firefox or running locally (Flask + npm start).
              </p>
              <a href="https://github.com/robbiekruszynski/warsaw_hack" target="_blank" rel="noopener noreferrer">
                Github Link
              </a>
              <hr />
            </div>
            <h3>SaferBridge</h3>
            <div className="workText">
              <p>
                <b>Project:</b> EthGlobal Istanbul 2023 build: SaferBridge explores a trust-minimized L2→L2 flow that moves value through L1 using each chain’s native bridge messaging—batching users to amortize gas (normal vs. fast modes) instead of relying on typical third-party relayer/LP bridge assumptions.
              </p>
              <p>
                <b>Tech:</b> React, Redux, React Router, Ethers, Material UI, Solidity, Wagmi / Viem
              </p>
              <p>
                <b>Note:</b> Hackathon prototype; the repo is explicit that this is not production-hardened code. The demo focused on proving the batched L2→L1→L2 steps on Sepolia test paths (e.g. Scroll) rather than two separate mainnet L2s.
              </p>
              <a href="https://github.com/robbiekruszynski/ist_bridge_2023" target="_blank" rel="noopener noreferrer">
                Github Link
              </a>
              <hr />
            </div>
            <h3>ERC-721 token generator</h3>
            <span className="image main">
              <img src={colors} alt="" />
            </span>
            <div className="workText">
              <p>
                <b>Project:</b> Minting non fungible ERC721 tokens based on #HEX color inputs by user
              </p>
              <p>
                <b>Tech:</b> React, Solidity, Mocha, Chai, Ganache
              </p>
              <p>
                <b>Note:</b> Giving user the ability to mint tokens using tested OpenZep contracts and using web3 imports with #HEX color inputs. Currently running off Ganache for testing.
              </p>
              <a href="https://github.com/Robbiekruszynski/ERC721-TOKENS-NFT" target="_blank" rel="noopener noreferrer">
                Github Link
              </a>
              <hr />
            </div>
          </div>

          <div
            id="work-panel-personal"
            role="tabpanel"
            aria-labelledby="work-tab-personal"
            hidden={this.state.workTab !== 'personal'}
          >
            <h3>Deepscry</h3>
            <DeepscryCarousel />
            <div className="workText">
              <p>
                <b>Project:</b> Deepscry (Scry) is a Magic: The Gathering deck lab—import a Commander decklist, simulate opening hands, and inspect mana curve, color spread, and draw probabilities. Compare your deck to benchmark metas (from precon-style through cEDH-style), review on-curve mana odds, and tag cards (ramp, interaction, draw, wincon) so the math matches how you actually play the deck.
              </p>
              <p>
                <b>Tech:</b> Next.js, TypeScript, Tailwind CSS
              </p>
              <p>
                <b>Note:</b> AI-assisted deck insight is on the roadmap; today the app focuses on simulation-backed stats, charts, and probability views for real decklists.
              </p>
              <a href="https://deepscry.netlify.app/" target="_blank" rel="noopener noreferrer">
                Live deployment
              </a>
              <hr />
            </div>
            <h3>ICARUS LIVES</h3>
            <span className="image main">
              <img src={Icarus} alt="" />
            </span>
            <div className="workText">
              <p>
                <b>Project:</b> Showcasing our solar system along with real time tracking of the ISS via API calls
              </p>
              <p>
                <b>Tech:</b> React, ThreeJS, iss-api
              </p>
              <p>
                <b>Note:</b> Fully responsive across desktop, tablet, and mobile
              </p>
              <a href="https://github.com/travisty12/solar-simulator" target="_blank" rel="noopener noreferrer">
                Github Link
              </a>
              <hr />
            </div>
            <h3>Emotional Portal</h3>
            <span className="image main">
              <img src={openCV} alt="" />
            </span>
            <div className="workText">
              <p>
                <b>Project:</b> Real time face recognition utilizing canvas.
              </p>
              <p>
                <b>Tech:</b> React, JavaScript, face-api.js (tensorflow), and ThreeJS
              </p>
              <p>
                <b>Note:</b> Please allow camera usage. You are able to navigate the space/field clicking + holding outside the white parameters.
              </p>
              <a href="https://emotions-portal.netlify.app/" target="_blank" rel="noopener noreferrer">
                Live deployment
              </a>
              <hr />
            </div>
          </div>
          {close}
        </article>

        <article
          id="design"
          className={`${this.props.article === 'design' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="title" id="design-section-title">
            Design & Wireframes
          </h2>
          <hr />
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
          </div>

          <div
            id="design-panel-wireframes"
            role="tabpanel"
            aria-labelledby="design-section-title design-tab-wireframes"
            hidden={this.state.designTab !== 'wireframes'}
          >
            <h3 className="sub-header">Wireframes &amp; prototypes</h3>
            <p className="design-panel-lede">
              Figma &amp; Sketch—from quick flows to polished UI—so product and engineering align before build.
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
            role="tabpanel"
            aria-labelledby="design-section-title design-tab-graphic"
            hidden={this.state.designTab !== 'graphic'}
          >
            <h3 className="sub-header">Graphic design &amp; branding</h3>
            <p className="design-panel-lede">
              Logos, posters, and collateral for internal and ecosystem programs—identity work teams could ship.
            </p>
            <hr />
            <div className="logoBlock">
              <div className="block-two">
                <div className="logo-text">
                  <h3>RFK Logo</h3>
                  <p>Personal logo Design</p>
                </div>
                <span className="logo">
                  <img src={Rklogo} alt="" />
                </span>
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
              <div className="block-two">
                <span className="logo-text">
                  <h3>Future Days</h3>
                  <p>Logo design for a start up software company.</p>
                </span>
                <div className="logo-text">
                  <img src={Fdlogo} alt="" />
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
              <div className="block-four">
                <div className="logo-text">
                  <h3>One Million Developers Logo</h3>
                  <p>Badge / kudos design for OMD community</p>
                </div>
                <span className="logo">
                  <img src={omdLogo} alt="" />
                </span>
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
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">Contact</h2>
          <a className="mailto" href="mailto:robbiekruszynski@gmail.com">
            <h3>robbiekruszynski@gmail.com</h3>
          </a>
          <ul className="icons">
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
          {close}
        </article>
      </div>
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

export default Main

