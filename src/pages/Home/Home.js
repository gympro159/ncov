import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actFetchPatientsRequest,
  actFetchPatientsWorldRequest,
} from "../../actions/index";
import "./Home.scss";
import Menu from "./../../components/Menu/Menu";
import Statistic from "./../../components/Statistic/Statistic";
import PatientsPieChart from "../../components/PatientsPieChart/PatientsPieChart";
import ProvincesTable from "../../components/ProvincesTable/ProvincesTable";
import PatientsTable from "../../components/PatientsTable/PatientsTable";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllPatients();
    this.props.fetchAllCountries();
  }
  render() {
    var { patients, countries } = this.props;
    return (
      <>
        <Menu />
        <div className="banner full-width">
          <div className="text-title-dcb b-container">
            <div className="featured-title-inner-wrap">
              <div className="featured-title-heading-wrap">
                <h1 className="featured-title-heading ">TRANG THÔNG TIN DỊCH COVID-19 </h1>
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
                    <span className="trail-end">Tình hình Việt Nam ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-info bg-corona">
          <div className="text-center text-white heading mt-5 mb-10">
            Biểu đồ diễn biến của dịch tại Việt Nam{" "}
          </div>
          <div className="b-container width-1400 ml-120">
            <div className="row" style={{ height: "824px" }}>
              <div className="col-6 mr-10">
                <div className="statistic">
                  <Statistic local={true} patients={patients} />
                  <Statistic local={false} countries={countries} />
                </div>
                <ProvincesTable patients={patients} />
              </div>
              <div className="col-5">
                <PatientsPieChart patients={patients} />
              </div>
            </div>
          </div>
        </div>

        <div className="b-container mb-40">
          <div className="text-center text-dark heading mt-5 mb-10">
            Dữ liệu bệnh nhân nhiễm COVID-19 ở Việt Nam
          </div>
          <PatientsTable patients={patients} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patientsVN,
    countries: state.patientsWorld,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllPatients: () => {
      dispatch(actFetchPatientsRequest());
    },
    fetchAllCountries: () => {
      dispatch(actFetchPatientsWorldRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
