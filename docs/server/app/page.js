(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8904:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>x,routeModule:()=>h,tree:()=>o});var l=s(7096),a=s(6132),n=s(7284),r=s.n(n),i=s(2564),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);s.d(t,c);let o=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3036)),"/home/antoine/project/reactjs/landing-page/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,9091))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,5345)),"/home/antoine/project/reactjs/landing-page/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,9091))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],x=["/home/antoine/project/reactjs/landing-page/app/page.tsx"],d="/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new l.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},5303:()=>{},3036:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Home});var l=s(4656),a=s(3542),n=s(9192);let components_Navbar=()=>l.jsx("nav",{className:"bg-primary p-4 items-center p-4 flex",children:l.jsx("div",{className:"container mx-auto",children:(0,l.jsxs)("div",{className:"flex justify-evenly items-center",children:[l.jsx("div",{className:"text-white title Orbitron",children:"NFTHub"}),(0,l.jsxs)("div",{className:"hidden md:flex space-x-4",children:[l.jsx("a",{href:"#",className:"text-white font-bold",children:"Home"}),l.jsx("a",{href:"#",className:"text-white font-bold",children:"Collection"}),l.jsx("a",{href:"#",className:"text-white font-bold",children:"Choose"}),l.jsx("a",{href:"#",className:"text-white font-bold",children:"About"}),l.jsx("a",{href:"#",className:"text-white font-bold",children:"Roadmap"}),l.jsx("a",{href:"#",className:"text-white font-bold",children:"Blog"})]}),(0,l.jsxs)("div",{className:"hidden md:flex space-x-4 pt-30",children:[l.jsx(n.j2d,{className:"text-white text-2xl"}),l.jsx(n.fWC,{className:"text-white text-2xl "}),l.jsx(n.Zf_,{className:"text-white text-2xl "}),l.jsx(n.OZg,{className:"text-white text-2xl "})]})]})})}),images_Art01=e=>{let{width:t,height:s}=e;return l.jsx("img",{src:"div.col-lg-6.png",width:t,height:s})},components_Header=()=>(0,l.jsxs)("div",{className:"flex justify-center pb-120",style:{padding:"231px 345px 220px 345px"},children:[(0,l.jsxs)("div",{className:"mt-6rem mr-6rem",children:[l.jsx("h2",{children:"High Quality"}),l.jsx("h2",{children:"NFT Collection"}),l.jsx("p",{className:"mt-3",children:"A 890 piece custom Nerko's collection is "}),l.jsx("p",{children:"joining the NFT space on Opensea."}),l.jsx("div",{children:(0,l.jsxs)("button",{className:"btn-primary mt-5 flex items-center justify-center",style:{width:"164.75px",height:"66px"},children:["Mint",l.jsx("img",{className:"ml-3",src:"minivector.svg",alt:"Mini Vector"})]})}),l.jsx("h3",{className:"mt-10",children:"47K+"}),l.jsx("p",{className:"header-community",children:"Community members"})]}),l.jsx("div",{children:l.jsx(images_Art01,{className:"",width:"615"})})]}),images_Vector01=e=>{let{width:t,height:s}=e;return l.jsx("img",{src:"vector.svg",width:t,height:s})},images_Wallet01=e=>{let{width:t}=e;return l.jsx("img",{src:"wallet.png",width:t})},components_Wallet=()=>l.jsx(a.Fragment,{children:l.jsx("div",{className:"flex justify-center pt-5",children:l.jsx(images_Wallet01,{width:995})})}),CardNft=e=>{let{width:t,height:s,url:n,nameCard:r,author:i}=e;return console.log(r),l.jsx(a.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col justify-center pl-48",children:[l.jsx("img",{src:n,width:t,height:s,className:"br-16"}),(0,l.jsxs)("div",{className:"p-24-50",children:[l.jsx("h2",{className:"fs-28",children:r}),l.jsx("p",{className:"pt-3 author-name",children:i})]})]})})},components_PreviewNfl=()=>(0,l.jsxs)(a.Fragment,{children:[(0,l.jsxs)("div",{className:" flex justify-center pb-85",children:[l.jsx("h1",{className:"fs-64",children:"Your "}),l.jsx("h1",{className:"ml-5 fs-64 gradient-text",children:"nft's"})]}),(0,l.jsxs)("div",{className:"flex justify-center",children:[l.jsx(CardNft,{url:"metaverse.jpeg",width:"264",height:"352",nameCard:"#Metaverse",author:"By TheSalvare"}),l.jsx(CardNft,{url:"pollydoll.jpeg",width:"264",height:"352",nameCard:"#Metaverse",author:"By TheSalvare"}),l.jsx(CardNft,{url:"alecart.jpeg",width:"264",height:"352",nameCard:"#Metaverse",author:"By TheSalvare"}),l.jsx(CardNft,{url:"toxic.jpeg",width:"264",height:"352",nameCard:"#Metaverse",author:"By TheSalvare"})]}),l.jsx("div",{className:"flex justify-center",children:l.jsx("button",{className:"btn-primary mt-5 text-button",style:{width:"240.3px",height:"64px"},children:"View collection"})})]}),components_SeparatorVector=()=>l.jsx("div",{className:"flex justify-center pt-120 pb-120",children:l.jsx(images_Vector01,{width:76.76,height:12.793})}),ElementCountWallet=e=>{let{title:t,texte:s}=e;return l.jsx(a.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col text-center",children:[l.jsx("h2",{children:t}),l.jsx("p",{children:s})]})})},components_CountWallets=()=>l.jsx(a.Fragment,{children:(0,l.jsxs)("div",{className:"flex justify-center columns-4 gap-20",children:[l.jsx("div",{className:"border-r-2 pr-10",children:l.jsx(ElementCountWallet,{title:"400k+",texte:"Wallets Connected"})}),l.jsx("div",{className:"border-r-2 pr-10",children:l.jsx(ElementCountWallet,{title:"20k+",texte:"Wallets Connected"})}),l.jsx("div",{className:"border-r-2 pr-10",children:l.jsx(ElementCountWallet,{title:"230+",texte:"Creative artists"})}),l.jsx("div",{children:l.jsx(ElementCountWallet,{title:"2.5x",texte:"Estimated value"})})]})}),components_HowItWorks=()=>(0,l.jsxs)("div",{className:"container mx-auto",children:[(0,l.jsxs)("div",{className:"flex justify-center pb-20",children:[l.jsx("h1",{className:"fs-64",children:"How it "}),l.jsx("h1",{className:"ml-5 fs-64 gradient-text ",children:"works!"})]}),(0,l.jsxs)("div",{className:"flex justify-center columns-2",children:[(0,l.jsxs)("div",{className:"pr-60",children:["  ",l.jsx("img",{src:"walletBitCoin.png"})]}),(0,l.jsxs)("div",{className:"pl-55",children:[l.jsx("p",{className:" gradient-text text-l font-bold",children:"01."}),l.jsx("h2",{className:"font-bold text-6xl",children:"Setup and"}),l.jsx("h2",{className:"font-bold text-6xl",children:"connect your"}),l.jsx("h2",{className:"font-bold text-6xl",children:"wallet."}),l.jsx("p",{className:"mt-5 text-color font-inter fs-19 font-style-normal font-weight-400 line-height-30",children:"Use Trust Wallet, Metamask or any wallet to connect to "}),l.jsx("p",{children:"multiple chains the app."}),l.jsx("br",{}),l.jsx("p",{className:"text-color font-inter fs-19 font-style-normal font-weight-400 line-height-30",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit "}),l.jsx("p",{children:"Metamask or any wallet ipsam temporibus."}),(0,l.jsxs)("div",{className:"mt-10 flex",children:[l.jsx("p",{className:"text-white font-weight-bold font-size-17",children:"Learn more "}),l.jsx("img",{className:"ml-3",src:"minivector.svg"})]})]})]}),(0,l.jsxs)("div",{className:"flex justify-center columns-2  pt-120",children:[(0,l.jsxs)("div",{className:"pl-55 pt-120",children:[l.jsx("p",{className:" gradient-text text-l font-bold",children:"02."}),l.jsx("h2",{className:"font-bold text-6xl",children:"Create your own"}),l.jsx("h2",{className:"font-bold text-6xl",children:"digital artwork"}),l.jsx("p",{className:"mt-5 text-color font-inter fs-19 font-style-normal font-weight-400 line-height-30",children:"Use Trust Wallet, Metamask or any wallet to connect to "}),l.jsx("p",{children:"multiple chains the app."}),l.jsx("br",{}),l.jsx("p",{className:"text-color font-inter fs-19 font-style-normal font-weight-400 line-height-30",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit "}),l.jsx("p",{children:"Metamask or any wallet ipsam temporibus."}),(0,l.jsxs)("div",{className:"mt-10 flex",children:[l.jsx("p",{className:"text-white font-weight-bold font-size-17",children:"Learn more "}),l.jsx("img",{className:"ml-3",src:"minivector.svg"})]})]}),(0,l.jsxs)("div",{className:"pr-60",children:["  ",l.jsx("img",{src:"whiteboard.png"})]})]}),(0,l.jsxs)("div",{className:"flex justify-center columns-2 pt-120",children:[(0,l.jsxs)("div",{className:"pr-60",children:["  ",l.jsx("img",{src:"sell.png"})]}),(0,l.jsxs)("div",{className:"pl-55",children:[l.jsx("p",{className:"gradient-text text-l font-bold",children:"03."}),l.jsx("h2",{className:"font-bold text-6xl",children:"Setup and"}),l.jsx("h2",{className:"font-bold text-6xl",children:"connect your"}),l.jsx("h2",{className:"font-bold text-6xl",children:"wallet."}),l.jsx("p",{className:"mt-5 text-color font-inter fs-19 font-style-normal font-weight-400 line-height-30",children:"Use Trust Wallet, Metamask or any wallet to connect to "}),l.jsx("p",{children:"multiple chains the app."}),l.jsx("br",{}),l.jsx("p",{className:"text-color font-inter fs-19 font-style-normal font-weight-400 line-height-30",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit "}),l.jsx("p",{children:"Metamask or any wallet ipsam temporibus."}),(0,l.jsxs)("div",{className:"mt-10 flex",children:[l.jsx("p",{className:"text-white font-weight-bold font-size-17",children:"Learn more "}),l.jsx("img",{className:"ml-3",src:"minivector.svg"})]})]})]})]}),components_Newsletter=()=>l.jsx("div",{className:"flex justify-center pb-5",children:(0,l.jsxs)("div",{className:"newsletter-div flex-wrap justify-center text-center",children:[l.jsx("h1",{className:"fs-64",style:{display:"inline-block"},children:"Never "}),l.jsx("h1",{className:"ml-5 fs-64 gradient-text",style:{display:"inline-block"},children:"miss a drop!"}),l.jsx("p",{className:"pt-5",children:"Subscribe to our super-rare and exclusive drops & collectibles."}),(0,l.jsxs)("div",{className:"flex justify-center pt-5",children:[l.jsx("input",{type:"text",className:"newsletter-input",placeholder:"Enter your email"}),l.jsx("button",{className:"newsletter-button ml-2",children:"Subscribe"})]})]})});function Home(){return(0,l.jsxs)(a.Fragment,{children:[l.jsx(components_Navbar,{}),l.jsx(components_Header,{}),l.jsx(components_Wallet,{}),l.jsx(components_SeparatorVector,{}),l.jsx(components_PreviewNfl,{}),l.jsx(components_SeparatorVector,{}),l.jsx(components_CountWallets,{}),l.jsx(components_SeparatorVector,{}),l.jsx(components_HowItWorks,{}),l.jsx(components_SeparatorVector,{}),l.jsx(components_Newsletter,{})]})}},9091:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var l=s(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,l.fillMetadataSegment)("/landing-page-react",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[214,570,711],()=>__webpack_exec__(8904));module.exports=s})();