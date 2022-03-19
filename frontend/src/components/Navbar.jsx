import { Badge } from '@material-ui/core'
import {  Search,  ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from "react-router-dom";

const Container=styled.div`
height: 60px;
${mobile({height:"50px"})};

`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding:"10px 0px"})};
`
const Left=styled.div`
flex:1;
display: flex;
align-items: center;
color:black;
text-decoration:none;
`
const Language=styled.span`
    font-size:14;
    cursor:pointer;
    ${mobile({display:"none"})};
`
const  SearchContainer= styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input= styled.input`
border:none;
${mobile({width:"50px"})};
`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})};
`
const Center=styled.div`
flex:1;
text-align:center;
color:black;
text-decoration:none;
`
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent:"center", flex: 2})};
color:black;
text-decoration:none;
`
const MenuItem=styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"12px", marginLeft:"10px"})};
`
const Navbar = () => {
  return (
    <div>
        <Container>
             <Wrapper>
                 <Left>
                     <Language>EN</Language>
                     <SearchContainer>
                         <Input placeholder='Search'/>
                         <Search style={{color:"gray", fontSize:"16px"}}/>
                     </SearchContainer>
                 </Left>
                 <Center>
                     <Link to="/" style={{color:"black",textDecoration:"none"}}  >
                     <Logo>Roses.</Logo>
                     </Link>
                </Center>
                 <Right>
                    <Link to="/register" style={{color:"black",textDecoration:"none"}}  >
                     <MenuItem>Register</MenuItem>
                     </Link>

                     <Link to="/login" style={{color:"black",textDecoration:"none"}}  >
                     <MenuItem>Sign-In</MenuItem>
                     </Link>
                     <Link to="/cart" style={{color:"black",textDecoration:"none"}} >
                     <MenuItem>
                     <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                     </Badge>
                     </MenuItem>
                     </Link>
                     </Right>
             </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar