import{S as e,i as t,s,e as a,c as r,a as l,d as o,b as n,f as i,E as c,A as u,H as h,j as d,m as f,o as g,x as m,u as p,v,t as b,k as _,g as E,n as w,D as $,r as I,w as y,I as D,J as T,K as V}from"../chunks/vendor-5da78818.js";import{b as k}from"../chunks/paths-45dac81d.js";/* empty css                                                  */function z(e){let t,s;return{c(){t=a("iframe"),this.h()},l(e){t=r(e,"IFRAME",{src:!0,title:!0}),l(t).forEach(o),this.h()},h(){t.src!==(s=e[1])&&n(t,"src",s),n(t,"title","External Frame")},m(s,a){i(s,t,a),e[3](t)},p(e,[a]){2&a&&t.src!==(s=e[1])&&n(t,"src",s)},i:c,o:c,d(s){s&&o(t),e[3](null)}}}function x(e,t,s){let{options:a={frameborder:"0"}}=t,{src:r}=t,{frame:l}=t;return u((()=>{for(const[e,t]of Object.entries(a))l.setAttribute(e,t)})),e.$$set=e=>{"options"in e&&s(2,a=e.options),"src"in e&&s(1,r=e.src),"frame"in e&&s(0,l=e.frame)},[l,r,a,function(e){h[e?"unshift":"push"]((()=>{l=e,s(0,l)}))}]}class O extends e{constructor(e){super(),t(this,e,x,z,s,{options:2,src:1,frame:0})}}var q=[{short:"QISKit",time:"Winter 2021",page:"qis",long:"Quantum Information & Security (Kit)",image:"https://bpgc-cte.s3.ap-south-1.amazonaws.com/coverImage-qis3-1610508686415.png",about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus harum explicabo perferendis consectetur dolor repellat inventore quibusdam sint quo. Temporibus."},{short:"TOR",time:"Winter 2021",page:"tor",long:"Introduction to Theory of Relativity",image:"https://bpgc-cte.s3.ap-south-1.amazonaws.com/coverImage-tor3-1610508935146.png",about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus harum explicabo perferendis consectetur dolor repellat inventore quibusdam sint quo. Temporibus."}];function N(e,t,s){const a=e.slice();return a[2]=t[s],a[4]=s,a}function j(e,t,s){const a=e.slice();return a[2]=t[s],a}function A(e){let t,s;return t=new O({props:{src:"https://www.youtube-nocookie.com/embed/"+e[2]+U,options:e[1]}}),{c(){d(t.$$.fragment)},l(e){f(t.$$.fragment,e)},m(e,a){g(t,e,a),s=!0},p:c,i(e){s||(m(t.$$.fragment,e),s=!0)},o(e){p(t.$$.fragment,e),s=!1},d(e){v(t,e)}}}function B(e){let t,s;return{c(){t=a("button"),this.h()},l(e){t=r(e,"BUTTON",{class:!0,"data-glide-dir":!0}),l(t).forEach(o),this.h()},h(){n(t,"class","glide__bullet"),n(t,"data-glide-dir",s="="+e[4])},m(e,s){i(e,t,s)},d(e){e&&o(t)}}}function J(e){let t,s,c,u,h,d,f,g,v,T,V,k,z,x=e[0],O=[];for(let a=0;a<x.length;a+=1)O[a]=A(j(e,x,a));const q=e=>p(O[e],1,1,(()=>{O[e]=null}));let J=e[0],U=[];for(let a=0;a<J.length;a+=1)U[a]=B(N(e,J,a));return{c(){t=a("div"),s=a("div"),c=a("button"),u=b("←"),h=_(),d=a("button"),f=b("→"),g=_(),v=a("div"),T=a("ul");for(let e=0;e<O.length;e+=1)O[e].c();V=_(),k=a("div");for(let e=0;e<U.length;e+=1)U[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var a=l(t);s=r(a,"DIV",{class:!0,"data-glide-el":!0});var n=l(s);c=r(n,"BUTTON",{class:!0,"data-glide-dir":!0});var i=l(c);u=E(i,"←"),i.forEach(o),h=w(n),d=r(n,"BUTTON",{class:!0,"data-glide-dir":!0});var m=l(d);f=E(m,"→"),m.forEach(o),n.forEach(o),g=w(a),v=r(a,"DIV",{"data-glide-el":!0,class:!0});var p=l(v);T=r(p,"UL",{class:!0});var b=l(T);for(let t=0;t<O.length;t+=1)O[t].l(b);b.forEach(o),p.forEach(o),V=w(a),k=r(a,"DIV",{class:!0,"data-glide-el":!0});var _=l(k);for(let t=0;t<U.length;t+=1)U[t].l(_);_.forEach(o),a.forEach(o),this.h()},h(){n(c,"class","glide__arrow glide__arrow--left"),n(c,"data-glide-dir","<"),n(d,"class","glide__arrow glide__arrow--right"),n(d,"data-glide-dir",">"),n(s,"class","glide__arrows"),n(s,"data-glide-el","controls"),n(T,"class","glide__slides"),n(v,"data-glide-el","track"),n(v,"class","glide__track"),n(k,"class","glide__bullets"),n(k,"data-glide-el","controls[nav]"),n(t,"class","glide")},m(e,a){i(e,t,a),$(t,s),$(s,c),$(c,u),$(s,h),$(s,d),$(d,f),$(t,g),$(t,v),$(v,T);for(let t=0;t<O.length;t+=1)O[t].m(T,null);$(t,V),$(t,k);for(let t=0;t<U.length;t+=1)U[t].m(k,null);z=!0},p(e,[t]){if(3&t){let s;for(x=e[0],s=0;s<x.length;s+=1){const a=j(e,x,s);O[s]?(O[s].p(a,t),m(O[s],1)):(O[s]=A(a),O[s].c(),m(O[s],1),O[s].m(T,null))}for(I(),s=x.length;s<O.length;s+=1)q(s);y()}},i(e){if(!z){for(let e=0;e<x.length;e+=1)m(O[e]);z=!0}},o(e){O=O.filter(Boolean);for(let t=0;t<O.length;t+=1)p(O[t]);z=!1},d(e){e&&o(t),D(O,e),D(U,e)}}}const U="?controls=1&modestbranding=1&showinfo=0&iv_load_policy=3&html5=1&rel=0&hl=en&cc_lang_pref=en";function Q(e){return u((()=>{const e=window.innerWidth;new T(".glide",{type:"slider",gap:75,animationDuration:400,autoplay:4e3,hoverpause:!0,startAt:1,perView:1,breakpoints:{768:{perView:1,gap:5,peek:!1}},peek:{before:e/10,after:e/10}}).mount()})),[["C2UhD6GZGBo","8pmJyrQEvu4","V1aJctvROJc","8pmJyrQEvu4"],{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",class:"glide__slide",frameborder:"0"}]}class R extends e{constructor(e){super(),t(this,e,Q,J,s,{})}}function S(e,t,s){const a=e.slice();return a[0]=t[s],a}function G(e){let t,s,u,h,d,f,g,m,p,v,I,y,D,T,z,x,O,q,N,j=e[0].long+"",A=e[0].short+"",B=e[0].time+"",J=e[0].about+"";return{c(){t=a("a"),s=a("div"),u=a("img"),d=_(),f=a("div"),g=a("div"),m=b(j),p=_(),v=a("div"),I=b(A),y=b(" ("),D=b(B),T=b(")"),z=_(),x=a("p"),O=b(J),q=_(),this.h()},l(e){t=r(e,"A",{href:!0,style:!0});var a=l(t);s=r(a,"DIV",{class:!0});var n=l(s);u=r(n,"IMG",{src:!0,alt:!0,class:!0}),d=w(n),f=r(n,"DIV",{class:!0});var i=l(f);g=r(i,"DIV",{style:!0,class:!0});var c=l(g);m=E(c,j),c.forEach(o),p=w(i),v=r(i,"DIV",{class:!0});var h=l(v);I=E(h,A),y=E(h," ("),D=E(h,B),T=E(h,")"),h.forEach(o),z=w(i),x=r(i,"P",{class:!0});var b=l(x);O=E(b,J),b.forEach(o),i.forEach(o),n.forEach(o),q=w(a),a.forEach(o),this.h()},h(){u.src!==(h=e[0].image)&&n(u,"src",h),n(u,"alt",""),n(u,"class","svelte-14uzua0"),V(g,"font-weight","600"),n(g,"class","svelte-14uzua0"),n(v,"class","svelte-14uzua0"),n(x,"class","svelte-14uzua0"),n(f,"class","svelte-14uzua0"),n(s,"class","course svelte-14uzua0"),n(t,"href",N=k+"/courses/"+e[0].page),V(t,"color","unset")},m(e,a){i(e,t,a),$(t,s),$(s,u),$(s,d),$(s,f),$(f,g),$(g,m),$(f,p),$(f,v),$(v,I),$(v,y),$(v,D),$(v,T),$(f,z),$(f,x),$(x,O),$(t,q)},p:c,d(e){e&&o(t)}}}function K(e){let t,s,c,u;s=new R({});let h=q,b=[];for(let a=0;a<h.length;a+=1)b[a]=G(S(e,h,a));return{c(){t=a("section"),d(s.$$.fragment),c=_();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){t=r(e,"SECTION",{class:!0});var a=l(t);f(s.$$.fragment,a),c=w(a);for(let t=0;t<b.length;t+=1)b[t].l(a);a.forEach(o),this.h()},h(){n(t,"class","svelte-14uzua0")},m(e,a){i(e,t,a),g(s,t,null),$(t,c);for(let s=0;s<b.length;s+=1)b[s].m(t,null);u=!0},p(e,[s]){if(0&s){let a;for(h=q,a=0;a<h.length;a+=1){const r=S(e,h,a);b[a]?b[a].p(r,s):(b[a]=G(r),b[a].c(),b[a].m(t,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=h.length}},i(e){u||(m(s.$$.fragment,e),u=!0)},o(e){p(s.$$.fragment,e),u=!1},d(e){e&&o(t),v(s),D(b,e)}}}class L extends e{constructor(e){super(),t(this,e,null,K,s,{})}}export{L as default};
