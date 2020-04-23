import React from 'react'
import PropTypes from 'prop-types'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import pic04 from '../images/self_bw_2.jpeg'
import pic05 from '../images/dark_bounce.gif'
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
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <div className="rk-info">
            <p>
              UX | UI | Development | Design | Developer Relations | Scrum
              Master
            </p>
            <p>Working within the web3 / blockchain space</p>
            <p>
              Part of the{' '}
              <a href="https://onemilliondevs.com/" target="_blank">
                One Million Developers
              </a>{' '}
              movement alongside other outreach efforts to help grow the eth
              ecosystem. Giving presentations to enable the curious to explore
              the bleeding edge.
            </p>
            <div></div>
            <p>
              Focusing on the importance of aesthetics, relevance, and
              usability. Through my interest in artistic expression, I cultivate
              my principles through illustrative websites and creations.
            </p>
            <p>
              I’m passionate about building out concepts that positively
              resonate with both the user and client.
            </p>
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
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3>Projects</h3>
          <span className="image main">
            <img src={Icarus} alt="" />
          </span>
          <div className="workText">
            <h4>ICARUS LIVES </h4>
            <p>
              Custom built project implementing threeJS within React along with
              live deployment
            </p>
            <p>
              Showcasing our solar system along with real time tracking of the
              ISS via API calls
            </p>
            <p>Fully responsive across desktop, tablet, and mobile</p>
            <a href="https://www.icarus-lives.com" target="_blank">
              Live deployment
            </a>
            <hr></hr>
            <div className="flexWork">
              <span className="image main">
                <img src={elyDesk} alt="" />
              </span>
              <img className="phonePort" src={elyPhone} alt="" />
            </div>

            <h4>ELYSIAN </h4>
            <p>Client project</p>
            <p>
              Building out full responsive splash page across multiple viewports
            </p>
            <p>
              Compatible with Mozilla, IE9, Chrome, Safari, Samsung Internet
            </p>
            <a href="http://www.elysianwines.com/" target="_blank">
              live site
            </a>
            <hr></hr>

            <span className="image main">
              <img src={openCV} alt="" />
            </span>
            <h4>Emotional Portal</h4>
            <p>Real time face recognition utilizing canvas.</p>
            <p>JavaScript, face-api.js (tensorflow), and ThreeJS</p>
            <p>
              Please allow camera usage. You are able to navigate the
              space/field clicking + holding outside the white parameters.
            </p>

            <a href="https://emotions-portal.netlify.com" target="_blank">
              Live deployment
            </a>
          </div>
          {close}
        </article>
        <hr></hr>

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
          <h2 className="major">Stack</h2>

          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <div className="stack">
            <div class="inner-one">
              <ul>
                <li> HTML 5 </li>
                <li> MUI </li>
                <li> SCSS </li>
                <li> Styled Components </li>
                <li> JavaScript </li>
              </ul>
            </div>
            <div class="inner-two">
              <ul>
                <li> ThreeJS </li>
                <li> React </li>
                <li> Python </li>
                <li> PHP </li>
                <li> Solidity </li>
              </ul>
            </div>
            <div class="inner-three">
              <ul>
                <li> Sketch </li>
                <li> Figma </li>
                <li> InVision </li>
                <li> PhotoShop </li>
                <li> LightRoom </li>
              </ul>
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
          <h2 className="major">Design</h2>
          <h4>Logo Creations</h4>
          <hr></hr>
          <div className="logoBlock">
            <div className="block-two">
              <div className="logo-text">
                <h4>RFK Logo</h4>
                <p>Personal logo Design </p>
              </div>
              <span className="logo">
                <img src={Rklogo} alt="" />
              </span>
            </div>
            <hr></hr>
            <div className="block-one">
              <span className="logo">
                <img src={Fdlogo} alt="" />
              </span>
              <div className="logo-text">
                <h4>Future Days</h4>
                <p> Logo design for a start up software / front end company.</p>
              </div>
            </div>
            <hr></hr>
            <div className="block-three">
              <div className="logo-text">
                <h4>Lucky Rabbit</h4>
                <p>
                  Logo design for a web-based moto route tracking aplication.
                </p>
              </div>
              <span className="logo">
                <img src={Lrlogo} alt="" />
              </span>
            </div>
            <hr></hr>
            <div className="block-five">
              <div className="logo-text">
                <h4>Poster Designs</h4>
                <p> ConsenSys spoke promotion at Ethereum denver 2020</p>
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
          <div className="dig-port-two">
            <a href="https://www.linkedin.com/in/robbie-k/" target="_blank">
              <h4>Linkedin</h4>
            </a>
          </div>
          <ul className="icons">
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
