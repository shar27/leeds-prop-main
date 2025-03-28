import React from "react";
import styled from "styled-components";
import TopNavbar from "../Nav/TopNavbar";



export default function Landlords() {
 
  const videoSrc = "https://res.cloudinary.com/daaahgwfy/video/upload/f_auto:video,q_auto/e6pvd1on8opfkm1a9nyc";

  return (
    <>
      <TopNavbar />
      <Container>
        <Header className="font40 extraBold">Our Work</Header>
        <ContentAndSlideshowWrapper>
          <ContentSection>
            <SubHeader className="font40">How we help.</SubHeader>
            <Paragraph>
            We carry out a range of property maintenance services for landlords, solicitors, letting agents, and homeowners.
            </Paragraph>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
             Services:
            </h3>
            <BenefitsList>
              <BenefitItem>✔ Deep cleaning</BenefitItem>
              <BenefitItem>✔ Kitchen Fitting</BenefitItem>
              <BenefitItem>✔ Bathroom fitting</BenefitItem>
              <BenefitItem>✔ Waste/Furniture removal</BenefitItem>
              <BenefitItem>✔ Handyman repair</BenefitItem>
              <BenefitItem>✔ Roof repair</BenefitItem>
              <BenefitItem>✔ Fence repair</BenefitItem>
              <BenefitItem>✔ Electrical </BenefitItem>
              <BenefitItem>✔ Plumbing </BenefitItem>
            </BenefitsList>
          </ContentSection>

          <VideoWrapper>
      <Video
      aria-label="Before and after property maintenance video"
        controls
        src={videoSrc}
        preload="auto"
        playsInline
        muted
        onContextMenu={(e) => e.preventDefault()} // disables right-click context menu
        autoPlay
        loop
      >
        Your browser does not support the video tag.
      </Video>
    </VideoWrapper>
        
        </ContentAndSlideshowWrapper>
      </Container>

    </>
  );
}

const VideoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Video = styled.video`
  width: 100%;
  height: 500px;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  color: black;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 20px 0;
  background-color: white;
`;

const ContentAndSlideshowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px; /* Space between content and slideshow */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack on smaller screens */
    gap: 10px; /* Adjust gap for stacked layout */
    margin-top:10px;
  }
`;

const ContentSection = styled.div`
  flex: 1; /* Allow content to take available space */
  display: flex;
  flex-direction: column;
  align-items: flex-center; /* Align items to the start */
`;

const SubHeader = styled.h2`
  
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on mobile */
  }
`;
const HeaderP = styled.div`
   max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 10px 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller font size on mobile */
  }
`;

const BenefitsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const BenefitItem = styled.li`
  list-style: none;
  margin: 0.5rem 0;
`;

const SlideshowContainer = styled.div`
  flex: 1; /* Allow slideshow to take available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;