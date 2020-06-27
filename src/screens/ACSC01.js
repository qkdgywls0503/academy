import React from "react";
import Lnb from "../components/Lnb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ACSC01 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
      txtValue: "",
    };
  }

  render() {
    const { dataList, txtValue } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      afterChange: () => console.log("afterChange"),
      centerMode: true,
    };
    return (
      <div>
        <Lnb title="About" column="HOME > About" link="/" />
        <Slider {...settings}>
          <div className="slick__Box">
            <h3 className="slick__Box__1">1</h3>
          </div>
          <div className="slick__Box">
            <h3 className="slick__Box__2">2</h3>
          </div>
          <div className="slick__Box">
            <h3 className="slick__Box__3">3</h3>
          </div>
          <div className="slick__Box">
            <h3 className="slick__Box__4">4</h3>
          </div>
          <div className="slick__Box">
            <h3 className="slick__Box__5">5</h3>
          </div>
          <div className="slick__Box">
            <h3 className="slick__Box__6">6</h3>
          </div>
        </Slider>
        <div className="controller">
          <div className="chatArea"></div>
          <input
            type="text"
            id="txt"
            name="txtValue"
            value={txtValue}
            onChange={this._valueChangeHandler}
          />
          <input type="button" value="확인" onClick={this._inputHandler} />
        </div>
      </div>
    );
  }
  _valueChangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _inputHandler = () => {
    const txt = document.getElementById("txt");

    console.log(txt.value);
  };
}

export default ACSC01;
