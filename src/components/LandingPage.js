import React, {Component} from "react";

class LandingPage extends Component {

    render () {
        return (
        <div className="tile">
            <div className="tile-pnl tile-pnl--fcs">
              <div className="tile-pnl__cntnt bd--white tx--white">
                <h1>Pure CSS masonry layout</h1>
              </div>
            </div>

            <div className="tile-pnl">
                <div className="tile-pnl__cntnt img-hover-zoom--colorize">
                <img src={ require("../images/Which_Train_When.png")} className="tile-pnl__cntnt img-hover-zoom--colorize" alt=""/>
                </div>
            </div>

            <div className="tile-pnl tile-flp tile-flp--lg tile-pnl--fcs tile-pnl--pls">
              <div className="tile-pnl__cntnt tile-flp__cntnt">
                <div className="tile-flp__pnl tile-flp__pnl--frnt tx--white bd--white tx--center">
                  <img src={ require("../images/FF_Landing.png") } className="tile-pnl__cntnt" alt=""/>
                </div>
                <div className="tile-flp__pnl tile-flp__pnl--bck bd--white tx--white tx--center bg--purple">
                  <h4>Description</h4>
                  <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <a href="http://fledgling-fitness.herokuapp.com/" target="blank">The App</a>
                </div>
              </div>
            </div>
        </div>  
        );
    }
}

export default LandingPage;
