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

class Main extends React.Component {
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
            <p>Developer Relations | Community Growth | Development | UX/UI | Scrum Master</p>
            <h4>Tech Stack</h4>
            <p>React / Next | Solidity</p>
            <h4>Design Stack</h4>
            <p>Figma | Sketch</p>
            <h4>Statement</h4>
            <p>
              I'm passionate about creating strategies with an array in range that positively resonates with both the user(s) and client(s). Focusing on the importance of relevance, approachability, and scalability allows for organic/sustainable growth.
            </p>
            <p>
              I'm currently working within the Web3 space as lead of Developer Relations with a focus on community & development growth strategies.
            </p>
            <p>
              With an overall attitude of self-organization within a cross-functional team, I promote a collaborative approach with a focus on communication to encourage both productive and positive atmospheres. I strive to create conversations that capture strategy efforts to then successfully implement journey mapping strategies that build case study dialogues. Problem solving, A/B testing, community research are all practices I find great value in. Acting as a liaison between development, design, and community allows me to deliver a cohesive approach to my work.
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
          <a href="https://consensys.net/developers/onboarding-step-2/" target="_blank" rel="noopener noreferrer">
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
          id="speak"
          className={`${this.props.article === 'speak' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h1 className="title">Page is being updated</h1>
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
          <h2 className="title">Work / Projects:</h2>
          <hr />
          <h3>ICARUS LIVES</h3>
          <span className="image main">
            <img src={Icarus} alt="" />
          </span>
          <div className="workText">
            <p>
              <b>Experiment:</b> Showcasing our solar system along with real time tracking of the ISS via API calls
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
            <span className="image main">
              <h3>ERC-721 token generator</h3>
              <img src={colors} alt="" />
            </span>
            <p>
              <b>Experiment:</b> Minting non fungible ERC721 tokens based on #HEX color inputs by user
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
            <span className="image main">
              <h3>Emotional Portal</h3>
              <img src={openCV} alt="" />
            </span>
            <p>
              <b>Experiment:</b> Real time face recognition utilizing canvas.
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
          </div>
          <hr />
          {close}
        </article>

        <article
          id="wireframes"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="title">WireFrames and Prototypes</h2>
          <hr />
          <h3 className="sub-header">
            Collection of designs using Figma & Sketch with a range in fidelity to share process
          </h3>
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
          <h2 className="title">Design - Logo Creations</h2>
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
              <a href="https://www.linkedin.com/in/robbie-k/" className="icon" target="_blank" rel="noopener noreferrer">
                <span className="label">LI</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Ro_bbieK" className="icon" target="_blank" rel="noopener noreferrer">
                <span className="label">CT</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/ro_bbiek" className="icon" target="_blank" rel="noopener noreferrer">
                <span className="label">TG</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Robbiekruszynski" className="icon" target="_blank" rel="noopener noreferrer">
                <span className="label">GH</span>
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

