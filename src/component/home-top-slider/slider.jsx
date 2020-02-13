import React, { Component } from "react";
import Slider from "react-slick";

class SliderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderItem: []
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: false,
      cssEase: "linear"
    };
    return (
      <div
        className={
          this.props.Allitems.length < 7
            ? "slider_wrapper alider_wp"
            : "slider_wrapper"
        }
      >
        <Slider {...settings}>
          {this.props.Allitems.map(data => {
            return (
              <div>
                <div className="sl-innergrid">
                  <div className="skin-item topskins covert skinus5640221">
                    <div className="uavat">
                      <img src={data.useravtar} />
                    </div>
                    <div className="itemcost">${data.item_price}</div>
                    <div className="skinimg">
                      {" "}
                      <img src={data.item_avtar} className="skin" />
                    </div>
                    <div
                      className="itemname"
                      // style={{ borderBottom: `3px solid${data.userColor}` }}
                    >
                      {data.item_name.length >= 20 && data.item_name
                        ? data.item_name.substring(0, 20) + ".."
                        : data.item_name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default SliderHome;
