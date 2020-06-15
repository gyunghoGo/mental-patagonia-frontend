import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Details from "./Details";

const DetailsSection = () => {
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => setDetailsData(res.product_details));
  }, []);

  return (
    <Wrap>
      <ImagesWrap>
        <Details data={detailsData} />
      </ImagesWrap>
      <OverviewWrap>
        <P>Overview</P>
        <Overview>
          <TextArea>
            Simple and unpretentious, our trusted Torrentshell 3L Jacket uses
            3-layer H2No® Performance Standard technology for exceptional
            waterproof/breathable performance, all-day comfort and long-lasting
            waterproof durability. Fair Trade Certified™ sewn.
          </TextArea>
          <Button>Spec & Features</Button>
        </Overview>
      </OverviewWrap>
    </Wrap>
  );
};

export default DetailsSection;

const Wrap = styled.section`
  padding-top: 3%;
  margin: 0 auto;
  width: 90%;
`;

const ImagesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OverviewWrap = styled.div`
  display: flex;
  padding: 3%;
  width: 100%;
  font-weight: 800;
`;

const P = styled.p`
  width: 500px;
  padding-top: 5%;
  font-size: 18px;
`;

const Overview = styled.div`
  width: 1200px;
  padding: 5% 10% 10% 5%;
`;

const TextArea = styled.p`
  line-height: 1.4;
  font-size: 30px;
`;

const Button = styled.button`
  padding: 0.8rem 3rem;
  border-radius: 3rem;
  margin: 15% 0;
  border: 0.3rem solid black;
  background-color: black;
  font-weight: 700;
  font-size: 1rem;
  color: #ffff;
`;
