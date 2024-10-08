import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ServicesModal from "./ServicesModal";
// import Icon1 from "../../assets/imgs/icons/icon1.png";
// import Icon2 from "../../assets/imgs/icons/icon2.png";
// import Icon3 from "../../assets/imgs/icons/icon3.png";
// import Icon4 from "../../assets/imgs/icons/icon4.png";

export default function FeaturesWithIcons() {
  return (
    <SectionArea id="service" className="squares">
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color="dark"
      />
      <SectionWrapper>
        <div className="flex flex-col items-center justify-evenly w-full tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.svgIcon}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className="tablet1:mb-[26px] desktop1:mb-0 desktop2:mb-[46px]"
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.svgIcon}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <div
              className="hidden desktop1:h-[730px] desktop2:h-[770px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            >
              {/* <img
              src={content.texts.features.imgFeatures}
              alt="Imagem ilustrativa da seção"
              className="rounded-2xl"
            /> */}
            </div>
          </MotionDivDownToUp>
          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp className=" flex items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card3.svgIcon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className="tablet1:mb-[26px] desktop1:mb-0 desktop2:mb-[46px]"
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp className=" flex flex-col items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card4.svgIcon}
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
              >
                <ServicesModal />
              </IconFeatureCard>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
