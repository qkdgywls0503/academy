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

    const inputData = {
      name: "방효진",
      age: 18,
      gender: "여성",
    };

    await axios.post(
      "http://localhost:5000/api/dataTest",
      {
        params: inputData,
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

          <button onClick={this._sendFileHandler}>백엔드로 파일 전송</button>
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

  _sendFileHandler = async () => {
    //1. 현재 업로드 된 파일을 가져온다.

    const { file } = this.state;

    //2. 파일이 없다면(null이라면) 함수를 중단시킨다.

    if (file === null) {
      alert("파일이 없습니다.");
      return;
    }

    //3. form태그를 만든다.

    let form = new FormData();

    //4. form태그에 파일을 넣는다.

    form.append("uploadFile", file);

    //5. axios를 통해서 server로 전송한다.

    await axios.post("http://localhost:5000/api/fileUpload", form, {
      headers: {
        "Context-Type": "multipart/form-data",
      },
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
