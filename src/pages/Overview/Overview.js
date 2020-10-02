import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchPatientsWorldRequest } from "../../actions";
import _ from "lodash";
import "./Overview.scss";
import Menu from "./../../components/Menu/Menu";
import CountriesTable from "./../../components/CountriesTable/CountriesTable";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

//Import FusionMaps
import FusionMaps from "fusioncharts/maps/es/fusioncharts.world";
import World from "fusioncharts/fusioncharts.maps";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

var dataset = [];

var colorrange = {};

var chartConfigs = {};

class Overview extends Component {
  componentDidMount() {
    this.props.fetchAllCountries();
  }

  sumPatientsRegions = (world) => {
    var AS = 0,
      EU = 0,
      NA = 0,
      SA = 0,
      AF = 0,
      AU = 0;
    world.forEach((country) => {
      switch (country.region.idRegion) {
        case "AS":
          AS += country.nhiem;
          break;
        case "EU":
          EU += country.nhiem;
          break;
        case "NA":
          NA += country.nhiem;
          break;
        case "SA":
          SA += country.nhiem;
          break;
        case "AF":
          AF += country.nhiem;
          break;
        case "AU":
          AU += country.nhiem;
          break;

        default:
          break;
      }
    });
    dataset = [
      {
        id: "NA",
        value: `${NA}`,
        showLabel: "1",
      },
      {
        id: "SA",
        value: `${SA}`,
        showLabel: "1",
      },
      {
        id: "AS",
        value: `${AS}`,
        showLabel: "1",
      },
      {
        id: "EU",
        value: `${EU}`,
        showLabel: "1",
      },
      {
        id: "AF",
        value: `${AF}`,
        showLabel: "1",
      },
      {
        id: "AU",
        value: `${AU}`,
        showLabel: "1",
      },
    ];

    colorrange = {
      minvalue: 0,
      code: "#FFE0B2",
      gradient: 1,
      color: [
        {
          minvalue: 0,
          maxvalue: 40000,
          color: "#FFD74D",
        },
        {
          minvalue: 40000,
          maxvalue: 150000,
          color: "#FB8C00",
        },
        {
          minvalue: 100000,
          maxvalue: _.max([NA, SA, AS, EU, AF, AU]),
          color: "#E65100",
        },
      ],
    };

    chartConfigs = {
      type: "world", // The chart type
      width: `${window.innerWidth - 60}`, // Width of the chart
      height: "600", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Map Configuration
        chart: {
          caption: "Số các ca nhiễm COVID-19 ở các khu vực trên thế giới",
          subcaption: "Đơn vị: người",
          numbersuffix: "",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          entityFillHoverColor: "#FFF9C4",
          theme: "fusion",
        },
        // Aesthetics; ranges synced with the slider
        colorrange: colorrange,
        // Source data as JSON --> id represents countries of the world.
        data: dataset,
      },
    };
  };

  onChange = (e) => {
    var target = e.target;
    var name = e.target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { world } = this.props;
    if (world.length > 0) {
      this.sumPatientsRegions(world);
    }
    return (
      <>
        <Menu />
        <div className="banner-overview full-width">
          <div className="text-title-dcb b-container">
            <div className="featured-title-inner-wrap">
              <div className="featured-title-heading-wrap">
                <h1 className="featured-title-heading ">TÌNH HÌNH THẾ GIỚI </h1>
              </div>
              <div id="breadcrumbs">
                <div className="breadcrumbs-inner">
                  <div className="breadcrumb-trail">
                    <Link
                      to="/"
                      title="Contruction2"
                      rel="home"
                      className="trail-begin"
                    >
                      Trang Chủ
                    </Link>
                    <span className="sep">/</span>
                    <span className="trail-end">Tình hình thế giới ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-corona mr-auto ml-auto overview-content">
          <ReactFC {...chartConfigs} />
          <br />
          <div className="ml-10">
            <CountriesTable world={world} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    world: state.patientsWorld,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllCountries: () => {
      dispatch(actFetchPatientsWorldRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
