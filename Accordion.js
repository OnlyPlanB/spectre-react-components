import React,{Fragment}from"react";import{f as factory,a as useClassName}from"./vendor.js";import{bool}from"prop-types";import Icon from"./Icon.js";const Accordion=factory({type:"div",className:"accordion",wrap:(a,{exclusive:b})=>{const c=useClassName({checkbox:!b,radio:b});return React.createElement(Fragment,null,React.createElement("input",{type:c,hidden:!0}),a)}});Accordion.propTypes={exclusive:bool};const Header=factory({type:"label",className:"accordion-header",wrap:(a,{caret:b})=>React.createElement(Fragment,null,b&&React.createElement(Icon,{type:Icon.Type.ARROW_RIGHT}),a)});Header.propTypes={caret:bool};const Body=factory({type:"div",className:"accordion-body"});Accordion.Header=Header,Accordion.Body=Body;export default Accordion;export{Body,Header};
