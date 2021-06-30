import React, { useState } from "react";
import Video from "../../videos/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
} from "./HeroSectionElement";
import { Button } from "../Button/ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>한번뿐인 결혼식 </HeroH1>
        <HeroP>With you 와 함께</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            dark="true"
            primary="true"
          >
            신청하러가기 {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
