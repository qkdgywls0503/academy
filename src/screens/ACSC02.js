import React from "react";
import Lnb from "../components/Lnb";
import axios from "axios";

class ACSC02 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: "",

      file: null,
      filename: "-",
    };
  }

  componentDidMount = async () => {
    // await axios.get(
    //   "http://localhost:5000/api/testRest",
    //   {},
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    await axios.post(
      "http://localhost:5000/api/dataTest",
      {
        params: "테스트 데이터 전송",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  render() {
    const { startDate, endDate, filename } = this.state;

    return (
      <div className="ACSC02">
        <Lnb title="Info" column="HOME > Info" link="/" />

        <div className="dateBox">
          <div className="dateBox__col1">
            <div>시작일</div>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={this._dateChangeHandler}
            />
          </div>
          <div className="dateBox__col2">
            <div>~</div>
          </div>
          <div className="dateBox__col3">
            <div>종료일</div>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={this._dateChangeHandler}
            />
            <button onClick={this._checkDate}>확인</button>
          </div>
        </div>
        <div className="fileBox">
          <input
            className="inputFile"
            id="inputFile"
            type="file"
            onChange={this._fileChangeHandler}
          />
          <div>{filename}</div>
          <label className="fileBox__lb" htmlFor="inputFile">
            파일업로드
          </label>
        </div>
      </div>
    );
  }

  _fileChangeHandler = (event) => {
    const file = event.target.files[0];

    console.log(file.name);

    this.setState({
      filename: file.name,
      file: file,
    });
  };

  _dateChangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;

    this.setState(nextState);
  };

  _checkDate = () => {
    const { startDate, endDate } = this.state;

    console.log(`${startDate}부터 ${endDate}까지 조회`);
  };
}

export default ACSC02;
