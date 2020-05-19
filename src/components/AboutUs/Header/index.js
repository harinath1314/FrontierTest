import React from "react"
import HeaderImage from "../../../images/header.jpg"
import data from "./data"

import {CardSection,MainImage,CardHeadingPrimary,BlockText
 
} from "./styled"

const Header = () => {
  return (
    <>
    <MainImage src={HeaderImage}  />
    <CardSection>
      
      <CardHeadingPrimary>{data.title}</CardHeadingPrimary>
      <BlockText color="#01565b">{data.subTitle}</BlockText>
      <BlockText color="#ffffff">{data.description}</BlockText> 
      </CardSection>
      </>
  )
}

export default Header
