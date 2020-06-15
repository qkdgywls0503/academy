import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MainComponent1 from "../components/MainComponent1";
import MainComponent2 from "../components/MainComponent2";

class ACSC00 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 1,
    };
  }
  render() {
    const { currentTab } = this.state;

    return (
      <div className="ACSC00">
        <div className="ACSC00__bg">
          <div className="ACSC00__bg__desc">
            <h2>맞춤형 교육 시스템</h2>
            <p>전국 최초 학생형 맞춤 교육</p>
            <p>입분부터 개발자까지 한방에</p>
          </div>
          <div className="ACSC00__bg__arrow">
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="ACSC00__contents">
          <button
            className={
              currentTab === 1
                ? "ACSC00__contents__btn active"
                : "ACSC00__contents__btn"
            }
            onClick={() => this._changeTabHandler(1)}
          >
            NEWS
          </button>
          <button
            className={
              currentTab === 2
                ? "ACSC00__contents__btn active"
                : "ACSC00__contents__btn"
            }
            onClick={() => this._changeTabHandler(2)}
          >
            GALLREY
          </button>
        </div>

        <div className="ACSC00__desc">
          {currentTab === 1 ? <MainComponent1 /> : null}
          {currentTab === 2 ? <MainComponent2 /> : null}
        </div>
      </div>
    );
  }
  _changeTabHandler = (tab) => {
    this.setState({
      currentTab: tab,
    });
  };
}
export default ACSC00;
