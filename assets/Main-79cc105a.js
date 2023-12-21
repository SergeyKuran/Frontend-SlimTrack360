import{s as o,t as w,L as xe,j as e,c as q,u as me,R as Pe,i as Se,r as te,m as Re,n as Me,o as $e,h as ke,g as Ie}from"./index-6c485a6d.js";import{I as ee}from"./Icon-678637aa.js";import{C as _e,a as We,L as Ae,B as De,p as Le,c as Ee,d as Te,f as ze,A as Be,D as Ge}from"./index-ed59a250.js";import{v as he,R as Ye,o as Fe,r as Qe,n as Ue,q as He,p as Ke,t as Xe,s as Ve,u as Je}from"./RecordDiaryModal-9b8f60a7.js";import{c as Ze,a as Ne,b as qe,I as et}from"./Item-680845c3.js";import"./index-387d7a00.js";import"./index.esm-d958d285.js";const tt=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 10px;
  margin: 0 auto;
  background-color: ${w.color.primaryBlack};
  color: ${w.color.primaryWhite};

  @media screen and (min-width: 834px) {
    padding: 24px 27px;
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 34px;
    width: 100%;
  }
`,nt=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`,rt=o.h1`
  color: ${w.color.primaryWhite};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,it=o(xe)`
  display: flex;
  color: ${w.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,at=o.span`
  margin-right: 6px;
`,ot=o.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`,st=o.div`
  margin: 0 auto;
  width: 300px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack};

  color: ${w.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 780px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    width: 1440px;
    column-gap: 106px;
    margin-bottom: 0;
    margin: 0;
  }
`;o.div`
  padding: 16px 0;
  width: 300px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};

  color: ${w.color.primaryWhite};

  @media screen and (min-width: 834px) {
    width: 780px;
  }

  @media screen and (min-width: 1440px) {
    width: 647px;
    margin-right: 0;
  }
`;const ct=o.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,dt=o.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};

  color: ${w.color.primaryWhite};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
  }
`,lt=o.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,ye=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ve=o.p`
  color: ${w.color.primaryGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding-bottom: 4px;
`,be=o.p`
  display: flex;
  align-items: center;
  color: ${w.color.primaryWhite};
  font-size: 34px;
  font-weight: 600;
  line-height: 1.12;
`,ut=o.span`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-left: 4px;
`,pt=()=>e.jsxs("div",{children:[e.jsx(ct,{children:"Daily goal"}),e.jsx(dt,{children:e.jsxs(lt,{children:[e.jsx(ee,{name:"icon-bubble",width:"80px",height:"80px",fill:`${w.color.primaryLiteGreen}`}),e.jsxs(ye,{children:[e.jsx(ve,{children:"Calories"}),e.jsx(be,{children:"1700"})]}),e.jsx(ee,{name:"icon-milk",width:"80px",height:"80px",fill:`${w.color.primaryViolet}`}),e.jsxs(ye,{children:[e.jsx(ve,{children:"Water"}),e.jsxs(be,{children:["1500",e.jsx(ut,{children:"ml"})]})]})]})})]}),ft=o.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ht=o.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`,xt=o.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: ${w.color.primaryBlack};
  padding: 7px;
`,mt=o.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:_})=>_}px);
  color: ${({$changedColor:_})=>_};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`,gt=o.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px ${w.color.primaryViolet};
    animation: ${w.transition.main} 4s linear infinite;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`,yt=o.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,vt=o.p`
  color: ${w.color.primaryWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,bt=o.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,wt=o.p`
  display: flex;
  align-items: center;
  color: ${w.color.primaryWhite});
  font-size: 28px;
  font-weight: 500;
  line-height: 1.21;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 1.18;
    margin-bottom: 0px;
  }
`,we=o.span`
  color: ${w.color.primaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,jt=o.p`
  color: ${w.color.primaryWhite});
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,_t=o.span`
  color: ${w.color.primaryGrey};
  font-weight: 500;
  margin-left: 4px;
`,Et=o.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: ${w.color.primaryGreenLite};

  color: ${w.color.primaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,Tt=o.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 20px;
  height: 20px;
  padding: 0;

  background-color: transparent;

  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;_e.register(We,Ae,De,Le,Ee,Te);const Ct={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},Ot=["Intake"],Pt=({waterIntake:_})=>{const L={labels:Ot,datasets:[{label:"Water",data:[_],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(ze,{data:L,options:Ct})})},St=_=>_.waterIntake.value,Rt=_=>_.waterIntake.isLoading,Mt=_=>_.waterIntake.error,$t=o.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 67px
  overflow-y: auto;

  @media screen and (min-width: 834px) {
    top: 100px;
  }
  @media screen and (min-width: 1440px) {
    top: 103px;
  }
`,kt=o.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: #0f0f0f;
  padding: 24px 10px 24px 10px;
  @media screen and (min-width: 834px) {
    width: 338px;
    height: 280px;
    margin: 24px 40px;
  }
  @media screen and (min-width: 1440px) {
  }
`,It=o.h2`
  color: white;

  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
`,Wt=o.form`
  display: flex;
  flex-direction: column;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
`,At=o.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
 
  }
`,Dt=o.input`
  margin-bottom: 32px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  background: inherit;
  color: white;
  @media screen and (min-width: 834px){
    width: 212px;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #b6b6b6;

    
`,Lt=o.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  gap: 10px;
  background: #e3ffa8;
  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,zt=o.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  background: transparent;
  color: #b6b6b6;
  margin-top: 8px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 36px;
  }
`;o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 276px;
  height: 226px;

  @media screen and (min-width: 834px) {
    width: 212px;
    height: 232px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
  }
`;const Bt=({onClose:_})=>{const L=q(Rt),F=q(Mt),Y=me(),B=D=>{D.preventDefault();const Q={date:he,value:Number(D.target.water.value)};Y(Se(Q))};return Pe.createPortal(e.jsx($t,{onClick:_,children:e.jsxs(kt,{onClick:D=>D.stopPropagation(),children:[e.jsx(It,{children:"Add water intake"}),e.jsxs(Wt,{onSubmit:B,children:[e.jsx(At,{children:"How much water"}),e.jsx(Dt,{name:"water",type:"text",placeholder:"Enter milliliters",onChange:D=>D.target.value}),e.jsx(Lt,{type:"submit",disabled:L,children:L?"Loading...":"Confirm"}),F&&e.jsx("p",{style:{color:"red"},children:F}),e.jsx(zt,{type:"button",onClick:_,children:"Cancel"})]})]})}),document.getElementById("modal-root"))},Gt=()=>{const[_,L]=te.useState(!1),F=q(St),Y=me();let B=F,D=1e3;const Q=D-B,m=B<=D?Math.round(B*100/D):100,t=m<=84?Math.ceil(m/100*176+10):88,i=m<=84?"rgba(182, 195, 255, 1)":"green";te.useEffect(()=>{Y(Re({date:he}))},[Y,F]);const g=()=>{L(h=>!h)};te.useEffect(()=>{const h=r=>{r.key==="Escape"&&_&&g()};return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[_]);const y=h=>{h.preventDefault(),Y(Me(he))};return e.jsxs("div",{children:[e.jsx(ft,{children:"Water"}),e.jsxs(ht,{children:[e.jsx(xt,{children:e.jsxs(gt,{children:[e.jsx(mt,{$changedColor:i,$offset:t,children:`${m}%`}),e.jsx(Pt,{waterIntake:m})]})}),e.jsxs(yt,{children:[e.jsx(vt,{children:"Water consumption"}),e.jsxs(bt,{children:[e.jsxs(wt,{children:[B,e.jsx(we,{children:"ml"})]}),e.jsxs(jt,{children:["left:",e.jsx(_t,{children:Q>0?Q:0}),e.jsx(we,{children:"ml"})]})]}),e.jsxs(Et,{onClick:g,children:[e.jsx(ee,{name:"icon-add-converted",width:"16px",height:"16px"}),"Add water intake"]}),e.jsx(Tt,{onClick:y,children:e.jsx(ee,{name:"icon-trash-03",width:"20px",height:"20px",fill:`${w.color.primaryLiteGreen}`})})]})]}),_&&e.jsx(Bt,{onClose:g})]})};_e.register(Be,Ee,Te);const Yt={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ft={id:"bcgCircle",beforeDatasetsDraw(_){const{ctx:L}=_;L.save();const F=_.getDatasetMeta(0).data[0].x,Y=_.getDatasetMeta(0).data[0].y,B=_.getDatasetMeta(0).data[0].innerRadius,D=_.getDatasetMeta(0).data[0].outerRadius,Q=D-B,m=Math.PI/180;L.beginPath(),L.lineWidth=Q,L.strokeStyle="rgba(41, 41, 40, 1)",L.arc(F,Y,D-Q/2,0,m*360,!1),L.stroke()}},Ce=({dailyCalories:_,inputValue:L,chartBcg:F})=>{L>_&&(L=_,F="red");const Y=_-L,B={datasets:[{label:[],data:[L,Y],backgroundColor:[F,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Ge,{options:Yt,data:B,plugins:[Ft]})})},Qt=o.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Ut=o.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Ht=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Kt=o.div`
  display: flex;
  flex-direction: column;
`,Xt=o.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Vt=o.div`
  display: flex;
  column-gap: 12px;
`,je=o.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Jt=o.p`
  width: 78px;
`,fe=_=>{const{title:L,chartBcg:F,elementGoal:Y,elementValue:B}=_;let D=(Y-B).toFixed(1);D<0&&(D=0);let Q=Math.round(B*100/Y);return(Q===1/0||isNaN(Q))&&(Q=0),Q>100&&(Q=100),e.jsx(e.Fragment,{children:e.jsxs(Qt,{children:[e.jsxs(Ut,{children:[e.jsx(Ce,{dailyCalories:Y,inputValue:B,chartBcg:F}),e.jsx(Ht,{children:e.jsx("p",{children:`${Q}%`})})]}),e.jsxs(Kt,{children:[e.jsx(Xt,{children:L}),e.jsxs(Vt,{children:[e.jsxs(Jt,{children:["Goal: ",e.jsx(je,{children:Y})]}),e.jsxs("p",{children:["left: ",e.jsx(je,{children:D})]})]})]})]})})},Zt=o.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  // font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Nt=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: ${w.color.primaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`,qt=o.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 1.19;

  p:last-child {
    color: ${w.color.primaryGrey};

    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
  }
`,en=o.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,tn=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,nn="rgba(255, 196, 247, 1)",rn="rgba(255, 243, 183, 1)",an="rgba(182, 182, 182, 1)",on=()=>{let _=1700,L=1360,F="#45FFBC",Y=119.5,B=136,D=44.8,Q=170,m=135.5,t=56;return e.jsxs("div",{children:[e.jsx(Zt,{children:"Food"}),e.jsxs(Nt,{children:[e.jsxs(qt,{children:[e.jsx(Ce,{dailyCalories:_,inputValue:L,chartBcg:F}),e.jsxs(en,{children:[e.jsx("p",{children:L}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(tn,{children:[e.jsx(fe,{title:"Carbonohidrates",chartBcg:nn,elementGoal:Q,elementValue:B}),e.jsx(fe,{title:"Protein",chartBcg:rn,elementGoal:m,elementValue:Y}),e.jsx(fe,{title:"Fat",chartBcg:an,elementGoal:t,elementValue:D})]})]})]})},sn=o.div`
  @media screen and (min-width: 834px) {
    display: flex;
    column-gap: 8px;
    align-items: center;
  }
`,cn=o.div`
  width: 148px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 8px;

  color: ${w.color.primaryWhite};

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,dn=o.div`
  width: 36px;
  height: 36px;
`,ln=o.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,un=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  color: ${w.color.primaryWhite};

  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    column-gap: 20px;
  }
`,pn=o.p`
  width: 164px;
`,fn=o.p`
  width: 92px;
`;o.span`
  color: ${w.color.primaryGrey};

  font-weight: 500;
`;o.button`
  display: flex;
  align-items: center;
  column-gap: 8px;

  color: ${w.color.primaryGreenLite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;const ie=({title:_,image:L,image2x:F,categoryImage:Y,category:B})=>e.jsxs(sn,{children:[e.jsxs(cn,{children:[e.jsx(dn,{children:e.jsx("img",{srcSet:`${L} 1x, ${F} 2x`,src:L,alt:"Plate"})}),e.jsx(ln,{children:_})]}),e.jsxs(un,{children:[e.jsx(pn,{children:"Carbonohidrates: 0"}),e.jsx(fn,{children:"Protein: 0"}),e.jsx("p",{children:"Fat: 100"})]}),e.jsx(Ye,{category:B,categoryImage:Y})]}),hn=o.div`
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    padding-left: 40px;
  }
`,xn=o.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,mn=o.h2`
  color: ${w.color.primaryWhite};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,gn=o(xe)`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,yn=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 558px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 588px;
  }
`,vn=()=>e.jsxs(hn,{children:[e.jsxs(xn,{children:[e.jsx(mn,{children:"Diary"}),e.jsx(gn,{to:"/diary",children:"See more"})]}),e.jsxs(yn,{children:[e.jsx(ie,{title:"Breakfast",image:Fe,image2x:Qe}),e.jsx(ie,{title:"Lunch",image:Ue,image2x:He}),e.jsx(ie,{title:"Dinner",image:Ke,image2x:Xe}),e.jsx(ie,{title:"Snack",image:Ve,image2x:Je})]})]});var Oe={exports:{}};(function(_,L){(function(Y,B){_.exports=B(te)})($e,F=>(()=>{var Y={"./node_modules/css-mediaquery/index.js":(m,t)=>{t.match=a,t.parse=s;var i=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,y=/^(?:(min|max)-)?(.+)/,h=/(em|rem|px|cm|mm|in|pt|pc)?$/,r=/(dpi|dpcm|dppx)?$/;function a(v,d){return s(v).some(function(b){var A=b.inverse,E=b.type==="all"||d.type===b.type;if(E&&A||!(E||A))return!1;var G=b.expressions.every(function(f){var O=f.feature,$=f.modifier,P=f.value,j=d[O];if(!j)return!1;switch(O){case"orientation":case"scan":return j.toLowerCase()===P.toLowerCase();case"width":case"height":case"device-width":case"device-height":P=u(P),j=u(j);break;case"resolution":P=c(P),j=c(j);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":P=x(P),j=x(j);break;case"grid":case"color":case"color-index":case"monochrome":P=parseInt(P,10)||1,j=parseInt(j,10)||0;break}switch($){case"min":return j>=P;case"max":return j<=P;default:return j===P}});return G&&!A||!G&&A})}function s(v){return v.split(",").map(function(d){d=d.trim();var b=d.match(i),A=b[1],E=b[2],G=b[3]||"",f={};return f.inverse=!!A&&A.toLowerCase()==="not",f.type=E?E.toLowerCase():"all",G=G.match(/\([^\)]+\)/g)||[],f.expressions=G.map(function(O){var $=O.match(g),P=$[1].toLowerCase().match(y);return{modifier:P[1],feature:P[2],value:$[2]}}),f})}function x(v){var d=Number(v),b;return d||(b=v.match(/^(\d+)\s*\/\s*(\d+)$/),d=b[1]/b[2]),d}function c(v){var d=parseFloat(v),b=String(v).match(r)[1];switch(b){case"dpcm":return d/2.54;case"dppx":return d*96;default:return d}}function u(v){var d=parseFloat(v),b=String(v).match(h)[1];switch(b){case"em":return d*16;case"rem":return d*16;case"cm":return d*96/2.54;case"mm":return d*96/2.54/10;case"in":return d*96;case"pt":return d*72;case"pc":return d*72/12;default:return d}}},"./node_modules/hyphenate-style-name/index.js":(m,t,i)=>{i.r(t),i.d(t,{default:()=>s});var g=/[A-Z]/g,y=/^ms-/,h={};function r(x){return"-"+x.toLowerCase()}function a(x){if(h.hasOwnProperty(x))return h[x];var c=x.replace(g,r);return h[x]=y.test(c)?"-"+c:c}const s=a},"./node_modules/matchmediaquery/index.js":(m,t,i)=>{var g=i("./node_modules/css-mediaquery/index.js").match,y=typeof window<"u"?window.matchMedia:null;function h(a,s,x){var c=this;if(y&&!x){var u=y.call(window,a);this.matches=u.matches,this.media=u.media,u.addListener(b)}else this.matches=g(a,s),this.media=a;this.addListener=v,this.removeListener=d,this.dispose=A;function v(E){u&&u.addListener(E)}function d(E){u&&u.removeListener(E)}function b(E){c.matches=E.matches,c.media=E.media}function A(){u&&u.removeListener(b)}}function r(a,s,x){return new h(a,s,x)}m.exports=r},"./node_modules/object-assign/index.js":m=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function y(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function h(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var a={},s=0;s<10;s++)a["_"+String.fromCharCode(s)]=s;var x=Object.getOwnPropertyNames(a).map(function(u){return a[u]});if(x.join("")!=="0123456789")return!1;var c={};return"abcdefghijklmnopqrst".split("").forEach(function(u){c[u]=u}),Object.keys(Object.assign({},c)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}m.exports=h()?Object.assign:function(r,a){for(var s,x=y(r),c,u=1;u<arguments.length;u++){s=Object(arguments[u]);for(var v in s)i.call(s,v)&&(x[v]=s[v]);if(t){c=t(s);for(var d=0;d<c.length;d++)g.call(s,c[d])&&(x[c[d]]=s[c[d]])}}return x}},"./node_modules/prop-types/checkPropTypes.js":(m,t,i)=>{var g=function(){};{var y=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),h={},r=i("./node_modules/prop-types/lib/has.js");g=function(s){var x="Warning: "+s;typeof console<"u"&&console.error(x);try{throw new Error(x)}catch{}}}function a(s,x,c,u,v){for(var d in s)if(r(s,d)){var b;try{if(typeof s[d]!="function"){var A=Error((u||"React class")+": "+c+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof s[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw A.name="Invariant Violation",A}b=s[d](x,d,u,c,null,y)}catch(G){b=G}if(b&&!(b instanceof Error)&&g((u||"React class")+": type specification of "+c+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof b+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),b instanceof Error&&!(b.message in h)){h[b.message]=!0;var E=v?v():"";g("Failed "+c+" type: "+b.message+(E??""))}}}a.resetWarningCache=function(){h={}},m.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":(m,t,i)=>{var g=i("./node_modules/react-is/index.js"),y=i("./node_modules/object-assign/index.js"),h=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),r=i("./node_modules/prop-types/lib/has.js"),a=i("./node_modules/prop-types/checkPropTypes.js"),s=function(){};s=function(c){var u="Warning: "+c;typeof console<"u"&&console.error(u);try{throw new Error(u)}catch{}};function x(){return null}m.exports=function(c,u){var v=typeof Symbol=="function"&&Symbol.iterator,d="@@iterator";function b(n){var p=n&&(v&&n[v]||n[d]);if(typeof p=="function")return p}var A="<<anonymous>>",E={array:$("array"),bigint:$("bigint"),bool:$("boolean"),func:$("function"),number:$("number"),object:$("object"),string:$("string"),symbol:$("symbol"),any:P(),arrayOf:j,element:H(),elementType:K(),instanceOf:J,node:ce(),objectOf:oe,oneOf:ae,oneOfType:se,shape:de,exact:le};function G(n,p){return n===p?n!==0||1/n===1/p:n!==n&&p!==p}function f(n,p){this.message=n,this.data=p&&typeof p=="object"?p:{},this.stack=""}f.prototype=Error.prototype;function O(n){var p={},M=0;function S(k,C,R,I,z,W,l){if(I=I||A,W=W||R,l!==h){if(u){var U=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw U.name="Invariant Violation",U}else if(typeof console<"u"){var X=I+":"+R;!p[X]&&M<3&&(s("You are manually calling a React.PropTypes validation function for the `"+W+"` prop on `"+I+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),p[X]=!0,M++)}}return C[R]==null?k?C[R]===null?new f("The "+z+" `"+W+"` is marked as required "+("in `"+I+"`, but its value is `null`.")):new f("The "+z+" `"+W+"` is marked as required in "+("`"+I+"`, but its value is `undefined`.")):null:n(C,R,I,z,W)}var T=S.bind(null,!1);return T.isRequired=S.bind(null,!0),T}function $(n){function p(M,S,T,k,C,R){var I=M[S],z=V(I);if(z!==n){var W=Z(I);return new f("Invalid "+k+" `"+C+"` of type "+("`"+W+"` supplied to `"+T+"`, expected ")+("`"+n+"`."),{expectedType:n})}return null}return O(p)}function P(){return O(x)}function j(n){function p(M,S,T,k,C){if(typeof n!="function")return new f("Property `"+C+"` of component `"+T+"` has invalid PropType notation inside arrayOf.");var R=M[S];if(!Array.isArray(R)){var I=V(R);return new f("Invalid "+k+" `"+C+"` of type "+("`"+I+"` supplied to `"+T+"`, expected an array."))}for(var z=0;z<R.length;z++){var W=n(R,z,T,k,C+"["+z+"]",h);if(W instanceof Error)return W}return null}return O(p)}function H(){function n(p,M,S,T,k){var C=p[M];if(!c(C)){var R=V(C);return new f("Invalid "+T+" `"+k+"` of type "+("`"+R+"` supplied to `"+S+"`, expected a single ReactElement."))}return null}return O(n)}function K(){function n(p,M,S,T,k){var C=p[M];if(!g.isValidElementType(C)){var R=V(C);return new f("Invalid "+T+" `"+k+"` of type "+("`"+R+"` supplied to `"+S+"`, expected a single ReactElement type."))}return null}return O(n)}function J(n){function p(M,S,T,k,C){if(!(M[S]instanceof n)){var R=n.name||A,I=re(M[S]);return new f("Invalid "+k+" `"+C+"` of type "+("`"+I+"` supplied to `"+T+"`, expected ")+("instance of `"+R+"`."))}return null}return O(p)}function ae(n){if(!Array.isArray(n))return arguments.length>1?s("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):s("Invalid argument supplied to oneOf, expected an array."),x;function p(M,S,T,k,C){for(var R=M[S],I=0;I<n.length;I++)if(G(R,n[I]))return null;var z=JSON.stringify(n,function(l,U){var X=Z(U);return X==="symbol"?String(U):U});return new f("Invalid "+k+" `"+C+"` of value `"+String(R)+"` "+("supplied to `"+T+"`, expected one of "+z+"."))}return O(p)}function oe(n){function p(M,S,T,k,C){if(typeof n!="function")return new f("Property `"+C+"` of component `"+T+"` has invalid PropType notation inside objectOf.");var R=M[S],I=V(R);if(I!=="object")return new f("Invalid "+k+" `"+C+"` of type "+("`"+I+"` supplied to `"+T+"`, expected an object."));for(var z in R)if(r(R,z)){var W=n(R,z,T,k,C+"."+z,h);if(W instanceof Error)return W}return null}return O(p)}function se(n){if(!Array.isArray(n))return s("Invalid argument supplied to oneOfType, expected an instance of array."),x;for(var p=0;p<n.length;p++){var M=n[p];if(typeof M!="function")return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+pe(M)+" at index "+p+"."),x}function S(T,k,C,R,I){for(var z=[],W=0;W<n.length;W++){var l=n[W],U=l(T,k,C,R,I,h);if(U==null)return null;U.data&&r(U.data,"expectedType")&&z.push(U.data.expectedType)}var X=z.length>0?", expected one of type ["+z.join(", ")+"]":"";return new f("Invalid "+R+" `"+I+"` supplied to "+("`"+C+"`"+X+"."))}return O(S)}function ce(){function n(p,M,S,T,k){return N(p[M])?null:new f("Invalid "+T+" `"+k+"` supplied to "+("`"+S+"`, expected a ReactNode."))}return O(n)}function ne(n,p,M,S,T){return new f((n||"React class")+": "+p+" type `"+M+"."+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+T+"`.")}function de(n){function p(M,S,T,k,C){var R=M[S],I=V(R);if(I!=="object")return new f("Invalid "+k+" `"+C+"` of type `"+I+"` "+("supplied to `"+T+"`, expected `object`."));for(var z in n){var W=n[z];if(typeof W!="function")return ne(T,k,C,z,Z(W));var l=W(R,z,T,k,C+"."+z,h);if(l)return l}return null}return O(p)}function le(n){function p(M,S,T,k,C){var R=M[S],I=V(R);if(I!=="object")return new f("Invalid "+k+" `"+C+"` of type `"+I+"` "+("supplied to `"+T+"`, expected `object`."));var z=y({},M[S],n);for(var W in z){var l=n[W];if(r(n,W)&&typeof l!="function")return ne(T,k,C,W,Z(l));if(!l)return new f("Invalid "+k+" `"+C+"` key `"+W+"` supplied to `"+T+"`.\nBad object: "+JSON.stringify(M[S],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(n),null,"  "));var U=l(R,W,T,k,C+"."+W,h);if(U)return U}return null}return O(p)}function N(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(N);if(n===null||c(n))return!0;var p=b(n);if(p){var M=p.call(n),S;if(p!==n.entries){for(;!(S=M.next()).done;)if(!N(S.value))return!1}else for(;!(S=M.next()).done;){var T=S.value;if(T&&!N(T[1]))return!1}}else return!1;return!0;default:return!1}}function ue(n,p){return n==="symbol"?!0:p?p["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&p instanceof Symbol:!1}function V(n){var p=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":ue(p,n)?"symbol":p}function Z(n){if(typeof n>"u"||n===null)return""+n;var p=V(n);if(p==="object"){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return p}function pe(n){var p=Z(n);switch(p){case"array":case"object":return"an "+p;case"boolean":case"date":case"regexp":return"a "+p;default:return p}}function re(n){return!n.constructor||!n.constructor.name?A:n.constructor.name}return E.checkPropTypes=a,E.resetWarningCache=a.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(m,t,i)=>{{var g=i("./node_modules/react-is/index.js"),y=!0;m.exports=i("./node_modules/prop-types/factoryWithTypeCheckers.js")(g.isElement,y)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":m=>{var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";m.exports=t},"./node_modules/prop-types/lib/has.js":m=>{m.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(m,t)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var i=typeof Symbol=="function"&&Symbol.for,g=i?Symbol.for("react.element"):60103,y=i?Symbol.for("react.portal"):60106,h=i?Symbol.for("react.fragment"):60107,r=i?Symbol.for("react.strict_mode"):60108,a=i?Symbol.for("react.profiler"):60114,s=i?Symbol.for("react.provider"):60109,x=i?Symbol.for("react.context"):60110,c=i?Symbol.for("react.async_mode"):60111,u=i?Symbol.for("react.concurrent_mode"):60111,v=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,b=i?Symbol.for("react.suspense_list"):60120,A=i?Symbol.for("react.memo"):60115,E=i?Symbol.for("react.lazy"):60116,G=i?Symbol.for("react.block"):60121,f=i?Symbol.for("react.fundamental"):60117,O=i?Symbol.for("react.responder"):60118,$=i?Symbol.for("react.scope"):60119;function P(l){return typeof l=="string"||typeof l=="function"||l===h||l===u||l===a||l===r||l===d||l===b||typeof l=="object"&&l!==null&&(l.$$typeof===E||l.$$typeof===A||l.$$typeof===s||l.$$typeof===x||l.$$typeof===v||l.$$typeof===f||l.$$typeof===O||l.$$typeof===$||l.$$typeof===G)}function j(l){if(typeof l=="object"&&l!==null){var U=l.$$typeof;switch(U){case g:var X=l.type;switch(X){case c:case u:case h:case a:case r:case d:return X;default:var ge=X&&X.$$typeof;switch(ge){case x:case v:case E:case A:case s:return ge;default:return U}}case y:return U}}}var H=c,K=u,J=x,ae=s,oe=g,se=v,ce=h,ne=E,de=A,le=y,N=a,ue=r,V=d,Z=!1;function pe(l){return Z||(Z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),re(l)||j(l)===c}function re(l){return j(l)===u}function n(l){return j(l)===x}function p(l){return j(l)===s}function M(l){return typeof l=="object"&&l!==null&&l.$$typeof===g}function S(l){return j(l)===v}function T(l){return j(l)===h}function k(l){return j(l)===E}function C(l){return j(l)===A}function R(l){return j(l)===y}function I(l){return j(l)===a}function z(l){return j(l)===r}function W(l){return j(l)===d}t.AsyncMode=H,t.ConcurrentMode=K,t.ContextConsumer=J,t.ContextProvider=ae,t.Element=oe,t.ForwardRef=se,t.Fragment=ce,t.Lazy=ne,t.Memo=de,t.Portal=le,t.Profiler=N,t.StrictMode=ue,t.Suspense=V,t.isAsyncMode=pe,t.isConcurrentMode=re,t.isContextConsumer=n,t.isContextProvider=p,t.isElement=M,t.isForwardRef=S,t.isFragment=T,t.isLazy=k,t.isMemo=C,t.isPortal=R,t.isProfiler=I,t.isStrictMode=z,t.isSuspense=W,t.isValidElementType=P,t.typeOf=j})()},"./node_modules/react-is/index.js":(m,t,i)=>{m.exports=i("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(m,t,i)=>{i.r(t),i.d(t,{shallowEqualArrays:()=>y,shallowEqualObjects:()=>g});function g(h,r){if(h===r)return!0;if(!h||!r)return!1;var a=Object.keys(h),s=Object.keys(r),x=a.length;if(s.length!==x)return!1;for(var c=0;c<x;c++){var u=a[c];if(h[u]!==r[u]||!Object.prototype.hasOwnProperty.call(r,u))return!1}return!0}function y(h,r){if(h===r)return!0;if(!h||!r)return!1;var a=h.length;if(r.length!==a)return!1;for(var s=0;s<a;s++)if(h[s]!==r[s])return!1;return!0}},"./src/Component.ts":function(m,t,i){var g=this&&this.__rest||function(a,s){var x={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&s.indexOf(c)<0&&(x[c]=a[c]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(a);u<c.length;u++)s.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(a,c[u])&&(x[c[u]]=a[c[u]]);return x},y=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0});var h=y(i("./src/useMediaQuery.ts")),r=function(a){var s=a.children,x=a.device,c=a.onChange,u=g(a,["children","device","onChange"]),v=(0,h.default)(u,x,c);return typeof s=="function"?s(v):v?s:null};t.default=r},"./src/Context.ts":(m,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});var g=i("react"),y=(0,g.createContext)(void 0);t.default=y},"./src/index.ts":function(m,t,i){var g=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var y=g(i("./src/useMediaQuery.ts"));t.useMediaQuery=y.default;var h=g(i("./src/Component.ts"));t.default=h.default;var r=g(i("./src/toQuery.ts"));t.toQuery=r.default;var a=g(i("./src/Context.ts"));t.Context=a.default},"./src/mediaQuery.ts":function(m,t,i){var g=this&&this.__assign||function(){return g=Object.assign||function(d){for(var b,A=1,E=arguments.length;A<E;A++){b=arguments[A];for(var G in b)Object.prototype.hasOwnProperty.call(b,G)&&(d[G]=b[G])}return d},g.apply(this,arguments)},y=this&&this.__rest||function(d,b){var A={};for(var E in d)Object.prototype.hasOwnProperty.call(d,E)&&b.indexOf(E)<0&&(A[E]=d[E]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,E=Object.getOwnPropertySymbols(d);G<E.length;G++)b.indexOf(E[G])<0&&Object.prototype.propertyIsEnumerable.call(d,E[G])&&(A[E[G]]=d[E[G]]);return A},h=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(t,"__esModule",{value:!0});var r=h(i("./node_modules/prop-types/index.js")),a=r.default.oneOfType([r.default.string,r.default.number]),s={all:r.default.bool,grid:r.default.bool,aural:r.default.bool,braille:r.default.bool,handheld:r.default.bool,print:r.default.bool,projection:r.default.bool,screen:r.default.bool,tty:r.default.bool,tv:r.default.bool,embossed:r.default.bool},x={orientation:r.default.oneOf(["portrait","landscape"]),scan:r.default.oneOf(["progressive","interlace"]),aspectRatio:r.default.string,deviceAspectRatio:r.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:r.default.bool,colorIndex:r.default.bool,monochrome:r.default.bool,resolution:a,type:Object.keys(s)};x.type;var c=y(x,["type"]),u=g({minAspectRatio:r.default.string,maxAspectRatio:r.default.string,minDeviceAspectRatio:r.default.string,maxDeviceAspectRatio:r.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:r.default.number,maxColor:r.default.number,minColorIndex:r.default.number,maxColorIndex:r.default.number,minMonochrome:r.default.number,maxMonochrome:r.default.number,minResolution:a,maxResolution:a},c),v=g(g({},s),u);t.default={all:v,types:s,matchers:x,features:u}},"./src/toQuery.ts":function(m,t,i){var g=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(t,"__esModule",{value:!0});var y=g(i("./node_modules/hyphenate-style-name/index.js")),h=g(i("./src/mediaQuery.ts")),r=function(c){return"not ".concat(c)},a=function(c,u){var v=(0,y.default)(c);return typeof u=="number"&&(u="".concat(u,"px")),u===!0?v:u===!1?r(v):"(".concat(v,": ").concat(u,")")},s=function(c){return c.join(" and ")},x=function(c){var u=[];return Object.keys(h.default.all).forEach(function(v){var d=c[v];d!=null&&u.push(a(v,d))}),s(u)};t.default=x},"./src/useMediaQuery.ts":function(m,t,i){var g=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(t,"__esModule",{value:!0});var y=i("react"),h=g(i("./node_modules/matchmediaquery/index.js")),r=g(i("./node_modules/hyphenate-style-name/index.js")),a=i("./node_modules/shallow-equal/dist/index.esm.js"),s=g(i("./src/toQuery.ts")),x=g(i("./src/Context.ts")),c=function(f){return f.query||(0,s.default)(f)},u=function(f){if(f){var O=Object.keys(f);return O.reduce(function($,P){return $[(0,r.default)(P)]=f[P],$},{})}},v=function(){var f=(0,y.useRef)(!1);return(0,y.useEffect)(function(){f.current=!0},[]),f.current},d=function(f){var O=(0,y.useContext)(x.default),$=function(){return u(f)||u(O)},P=(0,y.useState)($),j=P[0],H=P[1];return(0,y.useEffect)(function(){var K=$();(0,a.shallowEqualObjects)(j,K)||H(K)},[f,O]),j},b=function(f){var O=function(){return c(f)},$=(0,y.useState)(O),P=$[0],j=$[1];return(0,y.useEffect)(function(){var H=O();P!==H&&j(H)},[f]),P},A=function(f,O){var $=function(){return(0,h.default)(f,O||{},!!O)},P=(0,y.useState)($),j=P[0],H=P[1],K=v();return(0,y.useEffect)(function(){if(K){var J=$();return H(J),function(){J&&J.dispose()}}},[f,O]),j},E=function(f){var O=(0,y.useState)(f.matches),$=O[0],P=O[1];return(0,y.useEffect)(function(){var j=function(H){P(H.matches)};return f.addListener(j),P(f.matches),function(){f.removeListener(j)}},[f]),$},G=function(f,O,$){var P=d(O),j=b(f);if(!j)throw new Error("Invalid or missing MediaQuery!");var H=A(j,P),K=E(H),J=v();return(0,y.useEffect)(function(){J&&$&&$(K)},[K]),(0,y.useEffect)(function(){return function(){H&&H.dispose()}},[]),K};t.default=G},react:m=>{m.exports=F}},B={};function D(m){var t=B[m];if(t!==void 0)return t.exports;var i=B[m]={exports:{}};return Y[m].call(i.exports,i,i.exports,D),i.exports}D.d=(m,t)=>{for(var i in t)D.o(t,i)&&!D.o(m,i)&&Object.defineProperty(m,i,{enumerable:!0,get:t[i]})},D.o=(m,t)=>Object.prototype.hasOwnProperty.call(m,t),D.r=m=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})};var Q=D("./src/index.ts");return Q})())})(Oe);var bn=Oe.exports;const wn=o.h2`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,jn=o.ul`
  max-width: 300px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    max-width: 780px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media screen and (min-width: ${w.breakpoint.desktop}) {
    max-width: 676px;
  }
`,_n=o.li`
  background-color: ${w.color.primaryBlack2};
  margin-bottom: 10px;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  column-gap: 20px;

  @media screen and (min-width: 834px) {
    width: calc((100% - 20px) / 2);
    margin-bottom: 0px;
  }
`,En=o.p`
  color: ${w.color.primaryGrey};
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,Tn=o(xe)`
  display: flex;
  padding: 2px;
  column-gap: 6px;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 3px;
  }
`,Cn=()=>{const _=q(Ze),L=q(Ne),F=q(qe),B=bn.useMediaQuery({maxWidth:833})?2:4;return e.jsxs("div",{children:[e.jsx(wn,{children:"Recommended food"}),L&&e.jsx(ke,{}),F?e.jsx("p",{children:"Oops...something went wrong! Try again later"}):e.jsx(jn,{children:_.slice(0,B).map(D=>e.jsx(_n,{children:e.jsx(et,{item:D})},D._id))}),e.jsxs(Tn,{to:"/recommended-food",children:[e.jsx(En,{children:"See more"}),e.jsx(ee,{name:"icon-arrowright",width:"16px",height:"16px",fill:`${w.color.primaryGrey}`})]})]})},In=()=>{const _=me();return te.useEffect(()=>{_(Ie())},[_]),e.jsxs(tt,{children:[e.jsxs(nt,{children:[e.jsx(rt,{children:"Today"}),e.jsxs(it,{to:"/dashboard",children:[e.jsx(at,{children:"On the way to the goal"}),e.jsx(ee,{name:"icon-arrow-right",width:"16px",height:"16px",fill:`${w.color.primaryGrey}`})]})]}),e.jsxs(ot,{children:[e.jsx(pt,{}),e.jsx(Gt,{}),e.jsx(on,{})]}),e.jsxs(st,{children:[e.jsx(vn,{}),e.jsx(Cn,{})]})]})};export{In as default};
