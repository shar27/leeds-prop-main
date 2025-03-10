import React from 'react'
import styled from "styled-components";

export default function Badges() {
  return (
    <div>
        <HeaderInfo>
            <h1 className="font40 extraBold">We are insured.</h1>
           
          </HeaderInfo>
          <ServiceBoxRow className='flex'>
          <ServiceBoxWrapper>
            <img src="https://res.cloudinary.com/daaahgwfy/image/upload/c_thumb,w_200,g_face/v1741601995/license/licence_pzcnsp.png" alt="" />
            <p className='font13 semiBold'>CBDU549797</p>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
<img src="https://res.cloudinary.com/daaahgwfy/image/upload/v1741602697/license/aqueous_management_limited_logo_uxlsr2.jpg" alt="" />
           <p className='font13 semiBold'>10643855</p>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
<img src="https://res.cloudinary.com/daaahgwfy/image/upload/v1741603762/license/ICO_logo_odlmjg.png" alt="" />
            <p className='font13 semiBold'>ZB657669</p>
            </ServiceBoxWrapper>
   
          </ServiceBoxRow>
    </div>
  )
}

const HeaderInfo = styled.div`
text-align:center;
`;

const ServiceBoxRow = styled.div`
  display: grid !important;
  grid-template-columns: auto;

  @media (min-width: 760px) {
    grid-template-columns: auto auto auto;
    gap: 0px;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
