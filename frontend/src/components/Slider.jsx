import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data'
import { mobile } from '../responsive'
import { Link } from "react-router-dom";

const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow:hidden;
position:relative;
${mobile({display:"none"})};

`
const Wrapper=styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`

const Arrow=styled.div`
width: 50px;
height: 50px;
background-color: lightgray;
border-radius: 50%;
display: flex;
align-items: center;
justify-content:center;
position:absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction==="left" && "10px"};
right: ${props=>props.direction==="right" && "10px"};
opacity: 0.5;
margin:auto;
`
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`

const ImgContainer=styled.div`
flex:1;
height: 100%;
`
const Image=styled.img`
height: 80%;
`
const InfoContainer=styled.div`
flex:1;
padding: 50px;

`
const Title=styled.h1`
font-size: 70px;`
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 200;
letter-spacing:3px;
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
/* border:none; */
cursor: pointer;
transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
`
const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0)
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1: 2)
        }
        else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(items=>
            <Slide bg={items.bg} key={items.id}>
            <ImgContainer>
            <Image src={items.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{items.title}</Title>
                <Desc>{items.desc} </Desc>
                <Link to="/products/1" >
                <Button>SHOP NOW</Button>
                </Link>
            </InfoContainer>
            </Slide>
             )}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider