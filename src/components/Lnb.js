import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

class Lnb extends React.Component {
  render() {
    return (
      <div className="Lnb">
        <div className="Lnb__title">
          <a href={this.props.link}>
            <MenuIcon /> {this.props.title}
          </a>
        </div>
        <div className="Lnb__column">
          <AddToPhotosIcon /> {this.props.column}
        </div>
      </div>
    );
  }
}

export default Lnb;
