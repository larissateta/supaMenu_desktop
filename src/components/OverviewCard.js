import React from "react";
import styled from "styled-components";

import COLOR_PALETTE from "../constants/colors";

function OverviewCard({ title, subtitle, width = 25, vMargin = 10, hMargin = 20, radius = 10 }) {
  return (
    <Container style={{ marginLeft: 0, width: `${width}%`, margin: `${vMargin}px ${hMargin}px ${vMargin}px ${hMargin}px`, borderRadius: `${radius}px` }}>
      <span className="title">{title}</span>
      <span className="details">{subtitle}</span>
    </Container>
  );
}

const Container = styled.div`
  height: 114.5px;
  background-color: ${COLOR_PALETTE.WHITE};
  padding: 10px;

  .title {
    text-align: center;
    display: block;
    color: ${COLOR_PALETTE.GRAY};
    font-size: 24px;
    margin-top: 12px
  }

  .details {
    text-align: center;
    display: block;
    font-size: 17px;
    margin-top: 15px
  }
`;
export default OverviewCard;
