import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard({ pins, setSelectedImage }) {
  
  return (
    <Wrapper>
      
        {pins.length
          ? pins.map((pin) => (
              <Pin
                url={pin.urls.small}
                key={pin.urls.small}
                tags={pin.tags}
                setSelectedImage={setSelectedImage}
                
              />
            ))
          : null}
     
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 90vh;
  overflow:scroll;
  padding-top:30px;
  padding-bottom:30px;
  width: 80%;
  margin-top: 15px;
`;


