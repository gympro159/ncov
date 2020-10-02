import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import "./PatientsPieChart.scss";

charts(FusionCharts);

var dataSourceStatus = {};
var dataSourceNationality = {};

export default class PatientsPieChart extends Component {
  setDataCharts = (patients) => {
    var nationalities = [],
      status = { khoi: 0, dieuTri: 0, tuVong: 0 };
    patients.forEach((patient) => {
      //Data of status chart
      if (patient.status === "Đang điều trị") status.dieuTri++;
      else if (patient.status === "Khỏi") status.khoi++;
      else status.tuVong++;
      //Data of nationality chart
      let checked = false;
      for (let nationality of nationalities) {
        if (nationality.label === patient.nationality) {
          nationality.value++;
          checked = true;
          break;
        }
      }
      if (!checked) {
        nationalities.push({
          label: patient.nationality,
          value: 1,
        });
      }
    });

    dataSourceStatus = {
      chart: {
        caption: "Tình trạng",
        plottooltext: "<b>$percentValue</b> bệnh nhân $label",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion",
      },
      data: [
        {
          label: "Đang điều trị",
          value: `${status.dieuTri}`,
        },
        {
          label: "Đã khỏi",
          value: `${status.khoi}`,
        },
        {
          label: "Đã tử vong",
          value: `${status.tuVong}`,
        },
      ],
    };

    dataSourceNationality = {
      chart: {
        caption: "Quốc tịch",
        plottooltext: "<b>$percentValue</b> bệnh nhân $label",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion",
      },
      data: nationalities,
    };
  };

  render() {
    var { patients } = this.props;
    if (patients.length > 0) {
      this.setDataCharts(patients);
    }
    return (
      <>
        <div className="chart-vn">
          <ReactFusioncharts
            type="pie2d"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSourceStatus}
          />
        </div>
        <br />
        <div className="chart-vn">
          <ReactFusioncharts
            type="pie2d"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSourceNationality}
          />
        </div>
      </>
    );
  }
}
