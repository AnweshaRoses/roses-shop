import React from 'react'
import styled from 'styled-components'
import { categories } from '../Data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'
import { Link } from "react-router-dom";

const Container= styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding:"0px", flexDirection:"column"})};

`
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
          <Link to={`/products/${item.cat}`} >
            <CategoryItem item={item} key={item.id}/>
        </Link>
        ))}
    </Container>
  )
}

export default Categories