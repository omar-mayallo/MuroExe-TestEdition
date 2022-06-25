"use strict";(self.webpackChunkmuroexe=self.webpackChunkmuroexe||[]).push([[765],{6913:function(e,s,a){a.d(s,{Z:function(){return o}});var n,r=a(1413),i=(a(2791),a(4849)),t=a(168),c=a(6031).ZP.div(n||(n=(0,t.Z)(["\n  width: 100%;\n  min-height: 300px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),l=a(3329),o=function(e){return function(s){var a=s.isLoading,n=s.restProps;return a?(0,l.jsx)(c,{children:(0,l.jsx)(i.Z,{animation:"border"})}):(0,l.jsx)(e,(0,r.Z)({},n))}}},5472:function(e,s,a){a(2791);var n=a(3329);s.Z=function(e){var s=e.children,a=e.Tag,r=e.Class,i=a;return(0,n.jsx)(i,{className:"my-5 container ".concat(r),children:s})}},8025:function(e,s,a){a.d(s,{Z:function(){return r}});a(2791);var n=a(3329),r=function(e){var s=e.head,a=e.para;return(0,n.jsxs)(n.Fragment,{children:[a?(0,n.jsx)("p",{className:"para",children:a}):null,(0,n.jsx)("h2",{className:"sections-head text-center",children:s.toUpperCase()})]})}},1814:function(e,s,a){a(2791);var n=a(9434),r=a(6766),i=(a(5141),a(5472)),t=a(8025),c=a(6398),l=a(3329);s.Z=function(){var e=(0,n.v9)((function(e){return e.shop})).shopData,s=[];Object.keys(e).map((function(s){return e[s]})).map((function(e){return e.items.map((function(e){return e.onSaleValue?s.push(e):null}))}));var a=s.reverse((function(e,s){return e.onSaleValue-s.onSaleValue})).filter((function(e,s){return s<8})).map((function(e){return(0,l.jsx)("div",{className:"carousel-element m-2",children:(0,l.jsx)(c.Z,{item:e})},e.id)}));return(0,l.jsxs)(i.Z,{Tag:"section",Class:"FeaturedProducts-Carousel",children:[(0,l.jsx)(t.Z,{head:"Featured products"}),(0,l.jsx)(r.default,{additionalTransfrom:0,arrows:!0,autoPlay:!0,autoPlaySpeed:3e3,centerMode:!1,containerClass:"container-with-dots",draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:4,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:768},items:3,partialVisibilityGutter:30},mobile:{breakpoint:{max:767,min:0},items:1,partialVisibilityGutter:30}},showDots:!1,slidesToSlide:1,swipeable:!0,children:a})]})}},2011:function(e,s,a){a.r(s),a.d(s,{default:function(){return $}});var n=a(2982),r=a(2791),i=a(9434),t=a(6871),c=a(5472),l=a(1814),o=a(6766),d=(a(5141),a(3329)),u=function(e){var s=e.hoverImgUrl,a=e.imageUrl;return(0,d.jsx)("div",{className:"carousel-block",children:(0,d.jsxs)(o.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:99999,centerMode:!1,className:"product-carousel",containerClass:"carousel-container text-center",dotListClass:"dot-carousel",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"product-carousel-item",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:1},mobile:{breakpoint:{max:464,min:0},items:1},tablet:{breakpoint:{max:1024,min:464},items:1}},showDots:!0,sliderClass:"carousel-slider",slidesToSlide:1,swipeable:!0,children:[(0,d.jsx)("img",{src:a,height:"auto",width:"auto",alt:"Product-img"}),(0,d.jsx)("img",{src:s,height:"auto",width:"auto",alt:"Product-img"})]})})},m=a(1413),h=a(5987),x=a(1694),v=a.n(x),p=a(239),f=a(162),j=a(7858);function y(e,s){return Array.isArray(e)?e.includes(s):e===s}var N=r.createContext({});N.displayName="AccordionContext";var b=N,C=["as","bsPrefix","className","children","eventKey"],Z=r.forwardRef((function(e,s){var a=e.as,n=void 0===a?"div":a,i=e.bsPrefix,t=e.className,c=e.children,l=e.eventKey,o=(0,h.Z)(e,C),u=(0,r.useContext)(b).activeEventKey;return i=(0,f.vE)(i,"accordion-collapse"),(0,d.jsx)(j.Z,(0,m.Z)((0,m.Z)({ref:s,in:y(u,l)},o),{},{className:v()(t,i),children:(0,d.jsx)(n,{children:r.Children.only(c)})}))}));Z.displayName="AccordionCollapse";var g=Z,w=r.createContext({eventKey:""});w.displayName="AccordionItemContext";var k=w,P=["as","bsPrefix","className"],K=r.forwardRef((function(e,s){var a=e.as,n=void 0===a?"div":a,i=e.bsPrefix,t=e.className,c=(0,h.Z)(e,P);i=(0,f.vE)(i,"accordion-body");var l=(0,r.useContext)(k).eventKey;return(0,d.jsx)(g,{eventKey:l,children:(0,d.jsx)(n,(0,m.Z)((0,m.Z)({ref:s},c),{},{className:v()(t,i)}))})}));K.displayName="AccordionBody";var A=K,S=["as","bsPrefix","className","onClick"];var T=r.forwardRef((function(e,s){var a=e.as,i=void 0===a?"button":a,t=e.bsPrefix,c=e.className,l=e.onClick,o=(0,h.Z)(e,S);t=(0,f.vE)(t,"accordion-button");var u=(0,r.useContext)(k).eventKey,x=function(e,s){var a=(0,r.useContext)(b),i=a.activeEventKey,t=a.onSelect,c=a.alwaysOpen;return function(a){var r=e===i?null:e;c&&(r=Array.isArray(i)?i.includes(e)?i.filter((function(s){return s!==e})):[].concat((0,n.Z)(i),[e]):[e]),null==t||t(r,a),null==s||s(a)}}(u,l),p=(0,r.useContext)(b).activeEventKey;return"button"===i&&(o.type="button"),(0,d.jsx)(i,(0,m.Z)((0,m.Z)({ref:s,onClick:x},o),{},{"aria-expanded":u===p,className:v()(c,t,!y(p,u)&&"collapsed")}))}));T.displayName="AccordionButton";var D=T,E=["as","bsPrefix","className","children","onClick"],O=r.forwardRef((function(e,s){var a=e.as,n=void 0===a?"h2":a,r=e.bsPrefix,i=e.className,t=e.children,c=e.onClick,l=(0,h.Z)(e,E);return r=(0,f.vE)(r,"accordion-header"),(0,d.jsx)(n,(0,m.Z)((0,m.Z)({ref:s},l),{},{className:v()(i,r),children:(0,d.jsx)(D,{onClick:c,children:t})}))}));O.displayName="AccordionHeader";var B=O,I=["as","bsPrefix","className","eventKey"],R=r.forwardRef((function(e,s){var a=e.as,n=void 0===a?"div":a,i=e.bsPrefix,t=e.className,c=e.eventKey,l=(0,h.Z)(e,I);i=(0,f.vE)(i,"accordion-item");var o=(0,r.useMemo)((function(){return{eventKey:c}}),[c]);return(0,d.jsx)(k.Provider,{value:o,children:(0,d.jsx)(n,(0,m.Z)((0,m.Z)({ref:s},l),{},{className:v()(t,i)}))})}));R.displayName="AccordionItem";var V=R,z=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],U=r.forwardRef((function(e,s){var a=(0,p.Ch)(e,{activeKey:"onSelect"}),n=a.as,i=void 0===n?"div":n,t=a.activeKey,c=a.bsPrefix,l=a.className,o=a.onSelect,u=a.flush,x=a.alwaysOpen,j=(0,h.Z)(a,z),y=(0,f.vE)(c,"accordion"),N=(0,r.useMemo)((function(){return{activeEventKey:t,onSelect:o,alwaysOpen:x}}),[t,o,x]);return(0,d.jsx)(b.Provider,{value:N,children:(0,d.jsx)(i,(0,m.Z)((0,m.Z)({ref:s},j),{},{className:v()(l,y,u&&"".concat(y,"-flush"))}))})}));U.displayName="Accordion";var M=Object.assign(U,{Button:D,Collapse:g,Item:V,Header:B,Body:A}),G=a(9126),H=a(5222),L=a(2815),F=a(4772),W=function(e){var s=e.item,a=(0,i.I0)(),n=s||{},r=n.description,t=n.name,c=n.price,l=n.size,o=n.style,u=n.onSaleValue,m=n.newState;return(0,d.jsxs)("div",{className:"product-details",children:[(0,d.jsxs)("div",{className:"product-details-header",children:[(0,d.jsxs)("div",{className:"product-details-head",children:[(0,d.jsxs)("h2",{className:"product-name",children:[null===t||void 0===t?void 0:t.toUpperCase(),m?(0,d.jsx)("span",{className:"new-badge",children:"New"}):null]}),(0,d.jsx)("div",{className:"wish-icon",title:"Add To Wishlist",onClick:function(){return a((0,L.lV)(s))},children:(0,d.jsx)(G.bL$,{})})]}),(0,d.jsx)("span",{className:"product-ref",children:"Reference MARNEREDBROWN43"}),(0,d.jsxs)("span",{className:"product-price",children:["$ ",c,u?(0,d.jsxs)("span",{className:"product-sale",children:["$ ",c+u]}):null]}),(0,d.jsx)("span",{className:"product-VAT",children:"VAT included"})]}),(0,d.jsxs)("div",{className:"product-details-info",children:[(0,d.jsxs)("div",{className:"product-size-block",children:[(0,d.jsxs)("div",{className:"size-list",children:[(0,d.jsx)("span",{className:"size-list-header",children:"Size"}),(0,d.jsx)("ul",{className:"size-list-block",children:null===l||void 0===l?void 0:l.map((function(e){return(0,d.jsxs)("li",{className:"size-item",children:[(0,d.jsx)("input",{type:"radio",name:"size",value:e}),(0,d.jsx)("span",{className:"radio-label",children:e})]},Math.random())}))})]}),(0,d.jsxs)(H.Z,{ProductDetails:!0,children:[(0,d.jsx)(G.YuG,{}),"Size Chart"]})]}),(0,d.jsx)("div",{className:"product-add-block",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-3",children:(0,d.jsx)("input",{type:"number",name:"quantity",min:"1",max:"10",placeholder:"num"})}),(0,d.jsx)("div",{className:"col-9",children:(0,d.jsx)(H.Z,{ProductDetails:!0,type:"submit",onClick:function(){return a((0,F.jX)(s))},children:"Add To Cart"})})]})})]}),(0,d.jsx)("div",{className:"product-details-accordion",children:(0,d.jsxs)(M,{defaultActiveKey:"0",children:[(0,d.jsxs)(M.Item,{eventKey:"0",children:[(0,d.jsx)(M.Header,{children:"Description"}),(0,d.jsx)(M.Body,{children:r})]}),(0,d.jsxs)(M.Item,{eventKey:"1",children:[(0,d.jsx)(M.Header,{children:"Product Details"}),(0,d.jsxs)(M.Body,{children:[(0,d.jsxs)("div",{className:"detail-item",children:[(0,d.jsx)("span",{children:"Color"}),(0,d.jsx)("span",{children:"Red"})]}),(0,d.jsxs)("div",{className:"detail-item",children:[(0,d.jsx)("span",{children:"Style"}),(0,d.jsx)("span",{children:o})]})]})]}),(0,d.jsxs)(M.Item,{eventKey:"2",children:[(0,d.jsx)(M.Header,{children:"Cleaning"}),(0,d.jsx)(M.Body,{children:"With a damp cloth, hand rub."})]})]})})]})},$=(0,a(6913).Z)((function(){var e=(0,i.v9)((function(e){return e.shop})).shopData,s=(0,t.UO)(),a=[];Object.keys(e).map((function(s){return e[s]})).map((function(e){return a.push.apply(a,(0,n.Z)(e.items))}));var r=a.find((function(e){return e.name.toLowerCase().split(" ").toString().replaceAll(",","-")===s.productId})),o=r||{},m=o.hoverImgUrl,h=o.imageUrl;return(0,d.jsxs)(c.Z,{Tag:"section",Class:"product-page",children:[(0,d.jsxs)("div",{className:"product-container row",children:[(0,d.jsx)("div",{className:"col-md-6 mb-5",children:(0,d.jsx)(u,{hoverImgUrl:m,imageUrl:h})}),(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsx)(W,{item:r})})]}),(0,d.jsx)(l.Z,{})]})}))}}]);
//# sourceMappingURL=765.ec2083ad.chunk.js.map