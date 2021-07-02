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
    <ServiceContainer id="service">
      <ServiceH1>Our Services</ServiceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={Icon1} />
          <ServiceH2>차별화된 기프트</ServiceH2>
          <ServiceP>
            무료 샘플과 청접장 주문시 특별한 선물을 팡팡팡 ~! 많이
            신청해주세요~!
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon2} />
          <ServiceH2>직원들의 전문적인 서비스</ServiceH2>
          <ServiceP>
            다리가 짧고 머리가 풍성하지 않고 살이 조금 쪘다? 걱정 No! 저희들이
            해결해드려요!
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={Icon3} />
          <ServiceH2>사진선택은 입맛대로</ServiceH2>
          <ServiceP>
            신랑, 신부님들께서 만족하실 때까지!! 애프터 서비스도 오케이!!
            언제든지 연락주세요!
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
