import React from "react";
import Lnb from "../components/Lnb";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

class ACSC03 extends React.Component {
  render() {
    return (
      <div>
        <Lnb title="Notice" column="HOME > Notice" link="/" />
        <Fade left>
          <p>안녕하세요? 금학해법수학학원입니다.</p>
        </Fade>
        <Fade bottom>
          <p>안녕하세요? 금학해법수학학원입니다.</p>
        </Fade>
        <Flip top>
          <p>천둥번개 우루루쾅쾅</p>
        </Flip>
        <Bounce right>
          <p>bouncebouncebouncebouncebounce</p>
        </Bounce>
        <Slide left>
          <p>slideslideslideslidslideslide</p>
        </Slide>
        <Roll top>
          <p>rollrollrollrollrollrollroll</p>
        </Roll>
        <LightSpeed right>
          <p>rightrightrightrightrightright</p>
        </LightSpeed>
        <Rotate left>
          <p>rotaterotaterotaterotaterotate</p>
        </Rotate>
        <Zoom right>zoomzoomzoomzoomzoomzoomzoom</Zoom>
      </div>
    );
  }
}

export default ACSC03;
