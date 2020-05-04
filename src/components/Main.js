import React from 'react'
import PropTypes from 'prop-types'
import pic04 from '../images/self_bw_2.jpeg'
import Icarus from '../images/ic_lives.gif'
import Fdlogo from '../images/future_logo.png'
import Rklogo from '../images/rfk_logo_white.png'
import Lrlogo from '../images/whiterabbit.png'
import elyDesk from '../images/elysian_2.png'
import elyPhone from '../images/ely_phone.png'
import conKau from '../images/conKauri.png'
import inCo from '../images/inCo.png'
import pegMm from '../images/pegMm.png'
import myOmd from '../images/myOmd.png'
import openCV from '../images/openCv.gif'
import rKey from '../images/verify_key.png'
import rDash from '../images/r_dashboard.png'
import rIntro from '../images/r_intro.png'
import r_mobile from '../images/r_mobile.png'
import r_mobile_l from '../images/r_mobile_l.png'
import r_quest_m from '../images/r_quest_main.png'
import r_quest from '../images/r_quest.png'
import omd_poster from '../images/omd_poster.png'
import rapid_logo from '../images/rapidLogo.png'
import omd_badge from '../images/omd_badge.png'
import r_3box from '../images/threeBox.png'
import colors from '../images/colors.gif'
import r_d_white from '../images/r_dash_2.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
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
          {' '}
          {/* <Header></Header> */}
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <div className="rk-info">
            <h4>Focus</h4>
            <p>
              UX | UI | Development | Design | Developer Relations | Scrum
              Master
            </p>
            <h4>Stack</h4>
            <p>
              HTML5 | SCSS | JS | React | Python | Solidity | Figma | Sketch |
              PS
            </p>
            <p>
              I’m passionate about building out concepts that positively
              resonate with both the user and client. Focusing on the importance
              of aesthetics, relevance, and usability.
            </p>

            <p>
              Working within the Web3 / Blockchain space part of the{' '}
              <a href="https://onemilliondevs.com/" target="_blank">
                One Million Developers
              </a>{' '}
              movement alongside parallel outreach efforts contributing towards
              ecosystem development. Giving presentations to enable the curious
              to explore the bleeding edge.
            </p>
            <div></div>
            <p>
              Promotion of self organization within a cross-functional
              collaborative and or individual effort. A focus on team
              communication encouraging productive and positive atmospheres to
              successfully create quality deliverables within scope.
              Conversations to capture brand ethos and successfully implement
              journey mapping strategies to build case study dialogues. Problem
              solving, A/B testing, user research are all practices I find great
              value in.
            </p>
            <p>
              I would like to think of myself as a liaison between design and
              development.
            </p>
          </div>
          {close}
        </article>
        <article
          id="work"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="logoBlock"></div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="title">Work / Projects: </h2>
          <hr></hr>
          <h3>ICARUS LIVES </h3>

          <span className="image main">
            <img src={Icarus} alt="" />
          </span>
          <div className="workText">
            <h4></h4>
            <p>
              {' '}
              <b>Experiment:</b> Showcasing our solar system along with real
              time tracking of the ISS via API calls
            </p>
            <p>
              <b>Tech:</b> HTML5, SASS, JS, React, ThreeJS, API calls
            </p>
            <p>
              <b>Note: </b> Fully responsive across desktop, tablet, and mobile
            </p>
            <a href="https://www.icarus-lives.com" target="_blank">
              Live deployment
            </a>
            <hr></hr>
            <span className="image main">
              <h3>ERC-721 token generator </h3>

              <img src={colors} alt="" />
            </span>
            <p>
              {' '}
              <b>Experiment:</b> Minting non fungible ERC721 tokens based on
              #HEX color inputs by user
            </p>
            <p>
              <b>Tech:</b> HTML5, CSS, React, Solidity, Mocha, Chai Ganache
            </p>
            <p>
              <b>Note: </b> Giving user the ability to mint tokens using tested
              OpenZep contracts and using web3 imports with #HEX color inputs.
              Currently running off Ganache for testing.
            </p>

            <a
              href="https://github.com/Robbiekruszynski/ERC721-TOKENS-NFT"
              target="_blank"
            >
              Github
              <hr></hr>
            </a>

            <div className="flexWork">
              <span className="image main">
                <h3>ELYSIAN </h3>
                <img src={elyDesk} alt="" />
              </span>
              <img className="phonePort" src={elyPhone} alt="" />
            </div>

            <p>
              <b>Client project:</b> Elysian Collection limited wine laucnh
            </p>
            <p>
              <b>Tech: </b> HTML5, CSS, JS
            </p>
            <p>
              <b>Notes:</b> Building out full responsive splash page across
              multiple viewports Compatible with Mozilla, IE9, Chrome, Safari,
              Samsung Internet
            </p>
            <a href="http://www.elysianwines.com/" target="_blank">
              live site
            </a>
            <hr></hr>
            <span className="image main">
              <h3>Emotional Portal</h3>

              <img src={openCV} alt="" />
            </span>
            <p>
              <b>Experiment:</b> Real time face recognition utilizing canvas.
            </p>
            <p>
              <b>Tech:</b> React, JavaScript, face-api.js (tensorflow), and
              ThreeJS
            </p>
            <p>
              <b>Note:</b> Please allow camera usage. You are able to navigate
              the space/field clicking + holding outside the white parameters.
            </p>

            <a href="https://emotions-portal.netlify.com" target="_blank">
              Live deployment
            </a>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="logoBlock"></div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="title">WireFrames and Prototypes</h2>
          <hr></hr>
          <h3>Collection of designs using Figma & Sketch</h3>
          {/* <h3>Figma & Sketch</h3> */}

          <span className="image main">
            <img src={rIntro} alt="" />
            <hr></hr>
            <img src={r_3box} alt="" />
            <hr></hr>
            <img src={rKey} alt="" />
            <hr></hr>
            <img src={rDash} alt="" />
            <hr></hr>
            <img src={r_d_white} alt="" />
            <hr></hr>
            <div className="mobile-home">
              <div className="mobile-wire">
                <img src={r_mobile} alt="" />
              </div>
              <div className="mobile-wire">
                <img src={r_mobile_l} alt="" />
              </div>
            </div>{' '}
            <hr></hr>
            <img src={r_quest_m} alt="" />
            <hr></hr>
            <img src={r_quest} alt="" />
            <hr></hr>
          </span>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="logoBlock"></div>
          {close}
        </article>
        <article
          id="design"
          className={`${this.props.article === 'design' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="title">Design - Logo Creations</h2>
          <hr></hr>
          <div className="logoBlock">
            <div className="block-two">
              <div className="logo-text">
                <h3>RFK Logo</h3>
                <p>Personal logo Design </p>
              </div>
              <span className="logo">
                <img src={Rklogo} alt="" />
              </span>
            </div>
            <hr></hr>
            <div className="block-one">
              <span className="logo">
                <img src={rapid_logo} alt="" />
              </span>
              <div className="logo-text">
                <h3>RAPID</h3>
                <p> Logo design for internal spoke RAPID within ConsenSys</p>
              </div>
            </div>
            <hr></hr>
            <div className="block-three">
              <div className="logo-text">
                <h3>Lucky Rabbit</h3>
                <p>
                  Logo design for a web-based moto route tracking aplication.
                </p>
              </div>
              <span className="logo">
                <img src={Lrlogo} alt="" />
              </span>
            </div>
            <hr></hr>
            <div className="block-one">
              <span className="logo">
                <img src={Fdlogo} alt="" />
              </span>
              <div className="logo-text">
                <h3>Future Days</h3>
                <p> Logo design for a start up software / front end company.</p>
              </div>
            </div>
            <hr></hr>
            <div className="block-three">
              <div className="logo-text">
                <h3>ERC721 Kudos</h3>
                <p>Badge / kudos design for a EthDenver 2020</p>
              </div>
              <span className="logo">
                <img src={omd_badge} alt="" />
              </span>
            </div>
            <hr></hr>
            <div className="block-four">
              {/* <h2 className="title">Design - Poster Creations</h2> */}
              <div className="logo-text title">
                <h2 className="title">Design - Poster Creations</h2>
                <hr></hr>
                <h3>
                  ConsenSys spoke promotional material at Ethereum denver 2020
                </h3>
              </div>
            </div>
            <span className="image main">
              <img src={conKau} alt="" />
              <hr></hr>
              <img src={inCo} alt="" />
              <hr></hr>
              <img src={myOmd} alt="" />
              <hr></hr>
              <img src={pegMm} alt="" />
              <hr></hr>
            </span>
            <div className="block-five">
              <div className="logo-text title">
                <h3> One Million Developers promotional material</h3>
              </div>
            </div>
            <span className="image main">
              <img src={omd_poster} alt="" />
              <hr></hr>
            </span>
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
          <div className="logoBlock"></div>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <a class="mailto" href="mailto:robbiekruszynski@gmail.com">
            <h3>robbiekruszynski@gmail.com</h3>
          </a>
          {/* 
          <div className="dig-port-one">
            <a
              href="https://docs.google.com/presentation/d/1sL75Aqez-TWTaELnlZvwG2L_hYo4UMbG_qGcOKzX3D4/edit?usp=sharing"
              target="_blank"
            >
              <h4>Digital Portfolio</h4>
            </a>
          </div> */}
          {/* <div className="dig-port-two">
            <a href="https://www.linkedin.com/in/robbie-k/" target="_blank">
              <h4>Linkedin</h4>
            </a>
          </div> */}
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/robbie-k/"
                className="icon"
                target="_blank"
              >
                <span className="label">LI</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/robbiek.eth/"
                className="icon"
                target="_blank"
              >
                <span className="label">IG</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Robbiekruszynski"
                className="icon"
                target="_blank"
              >
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
