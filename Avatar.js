import"react";import{f as factory,o as oneOfOption}from"./vendor.js";import{string}from"prop-types";const Avatar=factory({type:"figure",className:"avatar",style:({size:a})=>({[`avatar-${a}`]:a}),rewire:({initials:a})=>({"data-initial":a})});Avatar.Size={EXTRA_LARGE:"xl",LARGE:"lg",SMALL:"sm",EXTRA_SMALL:"xs"},Avatar.propTypes={size:oneOfOption(Avatar.Size),initials:string};const Presence=factory({type:"i",className:"avatar-presence",style:({presence:a})=>a});Presence.Presence={ONLINE:"online",BUSY:"busy",AWAY:"away",OFFLINE:"offline"},Presence.propTypes={presence:oneOfOption(Presence.Presence)},Avatar.Presence=Presence;export default Avatar;export{Presence};