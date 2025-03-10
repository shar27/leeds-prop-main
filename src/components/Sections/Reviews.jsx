import React from "react";
import styled from "styled-components";
// Components

import FullButton from "../Buttons/FullButton";

// Assets
import AddImage1 from "../../assets/img/trustpilot.jpg";
import AddImage2 from "../../assets/img/reviews.png";
import AddImage3 from "../../assets/img/review.PNG";

export default function Reviews() {
  return (
    <Wrapper id="reviews">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Testimonials</h1>
          </HeaderInfo>
          <TrustpilotWrapperSmall>
            <a href="https://www.trustpilot.com/review/swiftukproperties.co.uk">
<img src="https://res.cloudinary.com/daaahgwfy/image/upload/c_thumb,w_200,g_face/v1741603982/license/tp_mxh4to.png" alt="" srcset="" />
            </a>
          </TrustpilotWrapperSmall>
          <TrustpilotWrapperLarge>
            <a href="https://www.trustpilot.com/review/swiftukproperties.co.uk">
<img src="https://res.cloudinary.com/daaahgwfy/image/upload/v1741603982/license/tp_mxh4to.png" alt="" srcset="" />
            </a>
          </TrustpilotWrapperLarge>
          <ServiceBoxRow>
            <ReviewsWrapper>
              <img src={AddImage1} width={500} />
            </ReviewsWrapper>
            {/* single review */}
            <ReviewWrapper>
              <img src={AddImage3} />
            </ReviewWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ServiceBoxRow = styled.div`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 30px;
            width:50%;
            height: auto;

        }

        /* For larger screens */
        @media (max-width: 768px) {
             width:100%;
                grid-template-columns: 1fr;
            
        }
`;

const TrustpilotWrapperSmall = styled.div`
  
display:none;
img {
    width: auto;
  }
@media (max-width:1024px){
display:block;
}
`;

const TrustpilotWrapperLarge = styled.div`
display:block;
img {
    width: auto;
  }
@media (max-width:1024px){
display:none;
}
`;
const ReviewWrapper = styled.div`
  img {
    width: 500px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
const ReviewsWrapper = styled.div`
  img {
    width: 500px;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
