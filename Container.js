import"react";import{f as factory,o as oneOfOption}from"./vendor.js";import"prop-types";var Container=factory({type:"div",className:"container",style:a=>{var{size:b}=a;return{["grid-".concat(b)]:b}}});Container.Size={EXTRA_LARGE:"xl",LARGE:"lg",MEDIUM:"md",SMALL:"sm",EXTRA_SMALL:"xs"},Container.propTypes={size:oneOfOption(Container.Size)};export default Container;
