import React from "react";
import Lnb from "../components/Lnb";

class ACSC04 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txtValue1: "",
      txtValue2: "",
      txtValue3: "",
    };
  }
  render() {
    const { txtValue1, txtValue2, txtValue3 } = this.state;
    return (
      <div>
        <Lnb title="Contect" column="HOME > Contect" link="/" />
        <input
          type="text"
          id="txt"
          name="txtValue1"
          value={txtValue1}
          onChange={this._onchangeHandler}
        />
        <input
          type="text"
          id="txt"
          name="txtValue2"
          value={txtValue2}
          onChange={this._onchangeHandler}
        />
        <input
          type="text"
          id="txt"
          name="txtValue3"
          value={txtValue3}
          onChange={this._onchangeHandler}
        />
        <input
          type="button"
          id="txt"
          value="확인"
          onClick={this._onclickHandler}
        />
      </div>
    );
  }
  _onchangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _onclickHandler = () => {
    const { txtValue1, txtValue2, txtValue3 } = this.state;

    console.log(txtValue1);
    console.log(txtValue2);
    console.log(txtValue3);
  };
}

export default ACSC04;
