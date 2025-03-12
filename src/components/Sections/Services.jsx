import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";

//icons
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import LightIcon from "@mui/icons-material/Light";
import RoofingIcon from "@mui/icons-material/Roofing";
import PlumbingIcon from "@mui/icons-material/Plumbing";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 style={{textAlign: 'center'}} className="font40 extraBold">Our Awesome Services</h1>
            <p className="">
              Explore our top-notch property maintenance services for
              residential and commercial properties, ensuring your spaces stay
              in prime condition with our expert solutions.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <HouseIcon>
                <HouseOutlinedIcon
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </HouseIcon>

              <h4>
                Find a Tenant Services <br />
                Sell your home/Land
              </h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <VanIcon>
                <LocalShippingIcon
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </VanIcon>
              <h4>
                House Clearance <br /> & Removals
              </h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <CameraOutdoorIcon
                sx={{
                  width: 100,
                  height: 100,
                }}
              ></CameraOutdoorIcon>
              <h4>CCTV Installation</h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <CleaningIcon>
                <CleaningServicesOutlinedIcon
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </CleaningIcon>
              <h4>
                End of tenancy <br /> & Deep cleaning
              </h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <HandyManIcon>
                <ConstructionIcon
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </HandyManIcon>
              <h4>Handy man repairs</h4>
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <PaintIcon>
                <FormatPaintOutlinedIcon
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </PaintIcon>
              <h4>
                Painting <br /> & re-decorating
              </h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <PaintIcon>
                <PlumbingIcon
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </PaintIcon>
              <h4>Plumbing</h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <LightIcon
                sx={{
                  width: 100,
                  height: 100,
                }}
              ></LightIcon>
              <h4>Electrician</h4>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <RoofingIcon
                sx={{
                  width: 100,
                  height: 100,
                }}
              ></RoofingIcon>
              <h4>Roofing Repairs</h4>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <HeaderInfo>
            We offer a wide range of other services - get in contact today to
            see how we can help
          </HeaderInfo>
          <BtnWrapper>
            <a href="#contactForm">
              <FullButton title="Contact us" />
            </a>
          </BtnWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const ServiceBoxRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 760px) {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding-bottom: 10px;

    -webkit-overflow-scrolling: touch;

    /* Scrollbar styling */
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 100%;
  margin-right: 0;
  padding: 40px 20px;

  @media (max-width: 760px) {
    flex: 0 0 auto;
    width: 250px;
    
    scroll-snap-align: start;
    text-align: center;
    padding: 20px 10px;
  }
`;




const HouseIcon = styled.div`
  color: black;
`;
const VanIcon = styled.div`
  color: black;
`;
const CleaningIcon = styled.div`
  color: black;
`;

const HandyManIcon = styled.div`
  color: black;
`;

const PaintIcon = styled.div`
  color: black;
`;


const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
    padding: 0 10px 10px 0px;
  }
`;

