import"react";import{f as factory,o as oneOfOption}from"./vendor.js";import"prop-types";const Hero=factory({type:"div",className:"hero",style:({size:a})=>({[`hero-${a}`]:a})});Hero.Size={LARGE:"lg",MEDIUM:null,SMALL:"sm"},Hero.propTypes={size:oneOfOption(Hero.Size)};const Body=factory({type:"div",className:"hero-body"});Hero.Body=Body;export default Hero;export{Body};