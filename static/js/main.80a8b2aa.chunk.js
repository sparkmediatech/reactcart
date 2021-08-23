(this.webpackJsonpcolor=this.webpackJsonpcolor||[]).push([[0],{17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(8),s=c.n(r),i=(c(17),c(5)),o=c(10),j=c(11),l=c(4),d=c(3),u=c(7),O=c.n(u),b=c(9),h=c(12),m=function(e,t){if("CLEAR_SHOPP_CART"===t.type)return Object(d.a)(Object(d.a)({},e),{},{cart:[]});if("REMOVE_ITEM"===t.type){var c=e.cart.filter((function(e){return e.id!==t.payload}));return Object(d.a)(Object(d.a)({},e),{},{cart:c})}if("INCREASE_PRODUCT"===t.type){var a=e.cart.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{amount:e.amount+1}):e}));return console.log(a),Object(d.a)(Object(d.a)({},e),{},{cart:a})}if("DECREASE_PRODUCT"===t.type){var n=e.cart.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{amount:e.amount-1}):e})).filter((function(e){return 0!==e.amount}));return Object(d.a)(Object(d.a)({},e),{},{cart:n})}if("PRODUCT_TOTAL"===t.type){var r=e.cart.reduce((function(e,t){var c=t.price,a=t.amount,n=c*a;return e.total+=n,e.amount+=a,e}),{total:0,amount:0}),s=r.total,i=r.amount;return s=parseFloat(s.toFixed(2)),Object(d.a)(Object(d.a)({},e),{},{total:s,amount:i})}return"LOADING"===t.type?Object(d.a)(Object(d.a)({},e),{},{loading:!0}):"DISPLAY_PRODUCT"===t.type?Object(d.a)(Object(d.a)({},e),{},{cart:t.payload,loading:!1}):e},p=c(1),x=n.a.createContext(),f={loading:!1,cart:[],total:0,amount:0},N=function(e){var t,c=e.children,n=Object(a.useReducer)(m,f),r=Object(h.a)(n,2),s=r[0],i=r[1],o=function(){i({type:"CLEAR_SHOPP_CART"})},j=function(){var e=Object(b.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i({type:"LOADING"}),e.next=3,fetch("https://course-api.com/react-useReducer-cart-project");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,i({type:"DISPLAY_PRODUCT",payload:c});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),Object(a.useEffect)((function(){i({type:"PRODUCT_TOTAL"})}),[s.cart]),Object(p.jsx)(x.Provider,{value:Object(d.a)(Object(d.a)({},s),{},(t={clearShopCart:o},Object(l.a)(t,"clearShopCart",o),Object(l.a)(t,"removeProduct",(function(e){i({type:"REMOVE_ITEM",payload:e})})),Object(l.a)(t,"decreaseProduct",(function(e){i({type:"DECREASE_PRODUCT",payload:e})})),Object(l.a)(t,"increaseProduct",(function(e){i({type:"INCREASE_PRODUCT",payload:e})})),t)),children:c})},v=function(){return Object(a.useContext)(x)};function g(){var e=v(),t=(e.fetchProduct,e.cart),c=e.total,a=e.clearShopCart,n=e.removeProduct,r=e.decreaseProduct,s=e.increaseProduct,l=e.amount;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{className:"section1",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h2",{className:"pageTitle",children:"Shopping Cart App"}),Object(p.jsxs)("div",{className:"cart-container",children:[Object(p.jsx)("div",{className:"cart-figure",children:Object(p.jsx)("h5",{children:l})}),Object(p.jsx)(i.a,{className:"shopping-cart"})]})]})})}),Object(p.jsxs)("section",{className:"container2 product-section",children:[Object(p.jsx)("h1",{className:"cartBag",children:"Products"}),t.map((function(e){console.log(t);var c=e.id,a=e.title,i=e.price,l=e.img,d=e.amount;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"product-container",children:[Object(p.jsxs)("div",{className:"img-container",children:[Object(p.jsx)("img",{src:l,alt:a}),Object(p.jsxs)("div",{className:"product-text-container",children:[Object(p.jsx)("h4",{children:a}),Object(p.jsxs)("h4",{children:["$",i]}),Object(p.jsx)("h5",{className:"btn1",onClick:function(){return n(c)},children:"Remove"})]})]}),Object(p.jsxs)("div",{className:"item-control",children:[Object(p.jsx)(o.a,{className:"iconUp",onClick:function(){return s(c)}}),Object(p.jsx)("p",{children:d}),console.log(d),Object(p.jsx)(j.a,{className:"iconDown",onClick:function(){return r(c)}})]})]},c)})})),Object(p.jsx)("hr",{className:"line"}),Object(p.jsxs)("div",{className:"total-text-container",children:[Object(p.jsx)("h5",{className:"total",children:"Total"}),Object(p.jsxs)("h5",{className:"totalNum",children:["$ ",c]})]}),Object(p.jsx)("div",{className:"btn-clear",onClick:a,children:Object(p.jsx)("button",{className:"btn",children:"Clear"})})]})]})}c(20);var C=c.p+"static/media/loading.5dd56756.gif";function y(){var e=v(),t=e.cart,c=e.amount;return v().loading?Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)("img",{src:C,alt:"loading"})})}):0===t.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("section",{className:"section1",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h2",{className:"pageTitle",children:"Shopping Cart App"}),Object(p.jsxs)("div",{className:"cart-container",children:[Object(p.jsx)("div",{className:"cart-figure",children:Object(p.jsx)("h5",{children:c})}),Object(p.jsx)(i.a,{className:"shopping-cart"})]})]})})}),Object(p.jsxs)("section",{className:"container2 product-section",children:[Object(p.jsx)("h1",{className:"cartBag",children:"Products"}),Object(p.jsx)("div",{className:"emptyList",children:Object(p.jsx)("h4",{children:"There is no product on your list"})})]})]}):Object(p.jsx)("div",{children:Object(p.jsx)(g,{})})}s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(N,{children:Object(p.jsx)(y,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.80a8b2aa.chunk.js.map