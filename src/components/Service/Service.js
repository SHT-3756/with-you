import React from "react";
import {
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./ServiceElement";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
// import Icon4 from "../../images/svg-4.svg";
const Service = () => {
  return (
    <ServiceContainer id="gallery">
      <ServiceH1>Our Services</ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon1} />
          <ServiceH2>Reduce expenses</ServiceH2>
          <ServiceP>
            We help reduce your fees and increase your overall revenue.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <ServiceH2>안뇽하세용</ServiceH2>
          <ServiceP>
            We help reduce your fees and increase your overall revenue.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <ServiceH2>안뇽하세용</ServiceH2>
          <ServiceP>
            We help reduce your fees and increase your overall revenue.
          </ServiceP>
        </ServiceCard>
        {/* <ServiceCard>
          <ServiceIcon src={Icon4} />
          <ServiceH2>안뇽하세용</ServiceH2>
          <ServiceP>설명하는 부분입니다.</ServiceP>
        </ServiceCard> */}
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default Service;
