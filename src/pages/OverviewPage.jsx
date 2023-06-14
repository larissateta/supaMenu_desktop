import React from "react";
import styled from "styled-components";
import jwtDecode from "jwt-decode";

import authStorage from '../auth/storage';
import Sidebar from "../components/Sidebar";
import COLOR_PALETTE from "../constants/colors";
import ChartElement from "../components/Chart";
import OverviewCard from "../components/OverviewCard";
import DashboardTopNav from "../components/DashboardTopNav";

function OverviewPage() {
  const token = authStorage.getToken();
  const user = jwtDecode(token);

  const graph_data = {
    series: [
      {
      name: 'Series 1',
      data: [10, 20, 30, 40, 50, 60],
      },
      {
        name: 'Series 2',
        data: [10, 40, 50, 70, 80, 100]
      }
  ],
    options: {
      chart: {
        id: 'stats-graph',
        background: COLOR_PALETTE.WHITE
      },
      xaxis: {
        categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
      },
      stroke: { curve: 'smooth' }},
      title: { style: { fontSize: 24, fontFamily: 'bold' }, text: "Today's Trends" },
    }
  
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <DashboardTopNav user={user} title={'Overview'}/>

        <div className="stats-container">
            <OverviewCard title={'Clients'} subtitle={60} hMargin={0}/>
            <OverviewCard title={'Revenues (FRW)'} subtitle={38234000}/>
            <OverviewCard title={'Orders'} subtitle={67569}/>
        </div>

        <div className="graph-container">
          <ChartElement series={graph_data.series} options={graph_data.options}/>
          <div className="cards-container">
            <div style={{ borderBottom: `2px solid ${COLOR_PALETTE.GRAY}`}}><OverviewCard title={'Orders'} subtitle={67569} width={100} vMargin={0} hMargin={0} radius={0}/></div>
            <div style={{ borderBottom: `2px solid ${COLOR_PALETTE.GRAY}`}}><OverviewCard title={'Items'} subtitle={54567} width={100} vMargin={0} hMargin={0} radius={0}/></div>
            <div style={{ borderBottom: `2px solid ${COLOR_PALETTE.GRAY}`}}><OverviewCard title={'Order/hour'} subtitle={4560} width={100} vMargin={0} hMargin={0} radius={0}/></div>
            <div><OverviewCard title={'Clients'} subtitle={60} width={100} vMargin={0} hMargin={0} radius={0}/></div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: ${COLOR_PALETTE.LIGHT};
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: 20%;
  padding: 10px;

  .stats-container {
    display: flex;
    justify-content: flex-start;
  }

  .graph-container {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;

    .cards-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;
export default OverviewPage;
