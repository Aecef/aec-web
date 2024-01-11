import{_ as w,r as d,o as r,a as m,c as b,w as c,f as g,e as i,d as e,t as v,F as y,b as k,p as x,g as C}from"./index-PaNAaNIR.js";const I={name:"CarouselCard",props:{title:String,summary:String,purpose:String,skills:Object,url:String,side:Number},mounted(){const t=new IntersectionObserver(o=>{o.forEach(a=>{const{target:u}=a;a.isIntersecting?u.classList.add("show"):u.classList.remove("show")})});document.querySelectorAll(".target-card").forEach(o=>{t.observe(o)})},methods:{carouselNav(t){const s=document.getElementById(this.title+"-summary"),o=document.getElementById(this.title+"-purpose"),a=document.getElementById(this.title+"-skills");t==="summary"?(s==null||s.classList.add("active"),o==null||o.classList.remove("active"),a==null||a.classList.remove("active")):t==="purpose"?(s==null||s.classList.remove("active"),o==null||o.classList.add("active"),a==null||a.classList.remove("active")):t==="skills"&&(s==null||s.classList.remove("active"),o==null||o.classList.remove("active"),a==null||a.classList.add("active"))}}},f=t=>(x("data-v-b0b635db"),t=t(),C(),t),L={id:"CarouselCard",class:"row"},P={class:"pr-name"},$=["src","alt"],N=["id"],T={class:"carousel-inner d-flex grid place-items-center"},B=["id"],E=f(()=>e("h1",null,"Summary",-1)),V=["id"],A=f(()=>e("h1",null,"Purpose",-1)),G=["id"],D=f(()=>e("h1",null,"Tools",-1)),R={class:"row pt-10"},U={class:"col icon-col"},F={class:"pr-name"},H=["src","alt"];function O(t,s,o,a,u,p){const n=d("v-card"),_=d("v-breadcrumbs-item"),l=d("v-breadcrumbs-divider"),j=d("v-breadcrumbs"),S=d("font-awesome-icon");return r(),m("div",L,[this.side==1?(r(),b(n,{key:0,class:"col-md-4 target-card",style:{display:"grid","place-items":"center"}},{default:c(()=>[i(n,{class:"flex row-2 w-[100%]"},{default:c(()=>[e("h1",P,v(this.title),1)]),_:1}),e("img",{class:"flex row-8",src:this.url,alt:"Image for the project with the title: "+this.title},null,8,$)]),_:1})):g("",!0),i(n,{class:"col-md-8 d-flex place-content-center","min-height":"500px"},{default:c(()=>[e("div",{id:this.title,class:"carousel slide","data-bs-ride":"true"},[i(j,{style:{"padding-top":"30px",width:"100%","place-content":"center"}},{default:c(()=>[i(_,null,{default:c(()=>[e("button",{class:"carousel-nav",onClick:s[0]||(s[0]=h=>p.carouselNav("summary"))}," Summary ")]),_:1}),i(l),i(_,null,{default:c(()=>[e("button",{class:"carousel-nav",onClick:s[1]||(s[1]=h=>p.carouselNav("purpose"))}," Purpose ")]),_:1}),i(l),i(_,null,{default:c(()=>[e("button",{class:"carousel-nav",onClick:s[2]||(s[2]=h=>p.carouselNav("skills"))}," Tools ")]),_:1})]),_:1}),e("div",T,[e("div",{id:this.title+"-summary",class:"carousel-item active"},[E,e("p",null,v(o.summary),1)],8,B),e("div",{id:this.title+"-purpose",class:"carousel-item"},[A,e("p",null,v(o.purpose),1)],8,V),e("div",{id:this.title+"-skills",class:"carousel-item"},[D,e("div",R,[(r(!0),m(y,null,k(this.skills,h=>(r(),m("div",U,[i(S,{icon:h,size:"2xl",style:{transform:"scale(2)"}},null,8,["icon"])]))),256))])],8,G)])],8,N)]),_:1}),this.side==0?(r(),b(n,{key:1,class:"col-md-4 target-card",style:{display:"grid","place-items":"center"}},{default:c(()=>[i(n,{class:"flex row-2 w-[100%]"},{default:c(()=>[e("h1",F,v(this.title),1)]),_:1}),e("img",{class:"flex row-8",src:this.url,alt:"Image for the project with the title: "+this.title},null,8,H)]),_:1})):g("",!0)])}const W=w(I,[["render",O],["__scopeId","data-v-b0b635db"]]),q=[{title:"This Website",summary:"Vue Application created to showcase my projects and skills.",purpose:"To learn the basics of the Godot engine.",skills:[["fab","vuejs"]],url:"./img/Valorant.PNG"},{title:"Weight Tracker",summary:"Expo application created to track a users weight. Uses Pocketbase deployed on Fly.io for the backend and authentication.",purpose:"To learn the basics of the Godot engine.",skills:[["fab","react"],["fab","fly"]],url:"./img/Valorant.PNG"},{title:"Hitbox",summary:"3D model of a Hitbox controller created in Blender. Textures created in Substance Painter.",purpose:"To provide a simple hitbox class for use with the LÖVE framework.",skills:[["fab","vuejs"]],url:"./img/box_paint.jpg"},{title:"Steps Hectic",summary:"3D Rougelike game created in Unreal.",purpose:"To learn the basics of the Godot engine.",skills:[["fab","vuejs"]],url:"./img/UoI.jpg"},{title:"CD Projekt Red Analysis",summary:"A look into the affect of CD Projeckt Red's approach towards expanding their IP into other mediums.",purpose:"To learn the basics of the Godot engine.",skills:[["fab","vuejs"]],url:"./img/UoI.jpg"}],z=q,J={name:"Projects",components:{CarouselCard:W},data(){let t=0;return{Carousels:z,imgSideRef:t,switchSides:()=>(t++,t%2)}},mounted(){document.title="Alec Cleofe | Projects"}},K=t=>(x("data-v-37a8af40"),t=t(),C(),t),M={id:"Projects",class:"place-content-center w-screen"},Q={class:"row"},X={id:"alec-cover"},Y=K(()=>e("h1",null,"Alec Cleofe",-1)),Z={class:"container project-container"};function ee(t,s,o,a,u,p){const n=d("v-card"),_=d("CarouselCard");return r(),m("div",M,[e("div",Q,[e("div",X,[i(n,{class:"col-md-8 d-flex place-content-center w-full grid place-items-center","min-height":"450px"},{default:c(()=>[Y]),_:1})])]),(r(!0),m(y,null,k(u.Carousels,l=>(r(),m("div",Z,[i(_,{title:l.title,summary:l.summary,purpose:l.purpose,url:l.url,skills:l.skills,side:u.switchSides()},null,8,["title","summary","purpose","url","skills","side"])]))),256))])}const se=w(J,[["render",ee],["__scopeId","data-v-37a8af40"]]);export{se as default};
