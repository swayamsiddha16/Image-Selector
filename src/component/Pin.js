import { render } from '@testing-library/react'
import React from 'react'
import styled from "styled-components"

function Pin({url,tags,setSelectedImage}) {
  return (
    <Wrapper>
        <Container>
            <img src={url} onClick={()=>setSelectedImage(url)}/>
            <div style={{   display:"flex",
                            flexDirection:"row",
                            justifyContent:"left",
                            width:"100%",
                            marginTop:"10px"}}>

            {
                tags.length?tags.map((tag)=>
                <p style={{backgroundColor:"rgb(240,240,240)",color:"rgb(150,150,150)",padding:"4px" , marginRight:"10px" ,borderRadius:"5px"}}>{tag.title.slice(0,10)}</p>
                ):null
                
            }
            </div>
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
    display:inline-flex;
    padding:8px;
`

const Container = styled.div`
    display:flex;
    align-items:center;
    box-sizing:border-box;
    cursor:pointer;
    flex-direction:column;
    width:236px;

    img{
        width:100%;
        display:flex;
        cursor:zoom-in;
        border-radius:16px;
        object-fit:cover;
    }
`

