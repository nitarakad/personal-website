(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),a=c.n(i),n=c(15),l=c.n(n),j=(c(58),c(59),c.p+"static/media/intro_pic.55d4491d.jpeg"),r=c(51),o=(c(31),c(45)),d=c.n(o),h=c(79),b=c(80),x=(c(61),function(e,t,c){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(c,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1});x.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var c=this,s=300-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout((function(){c.tick()}),s)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var c=e[t].getAttribute("data-rotate"),s=e[t].getAttribute("data-period");c&&new x(e[t],JSON.parse(c),s)}var i=document.createElement("style");i.type="text/css",i.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(i)};var O=function(){return Object(s.jsx)("div",{className:"parallax-intro",children:Object(s.jsxs)("div",{className:"parent-container d-flex padding-60",id:"intro",children:[Object(s.jsx)(h.a,{className:"container-center-text",children:Object(s.jsx)(b.a,{className:"align-self-center",children:Object(s.jsxs)(d.a,{delay:450,children:[Object(s.jsx)("div",{className:"name-text-font",align:"center",children:"Nitya Tarakad"}),Object(s.jsx)("div",{className:"intro-text-font padding-sides",align:"center",children:"MSCS Student at Georgia Institute of Technology"}),Object(s.jsx)("div",{className:"intro-text-font-typewriter padding-sides padding-20",align:"center",children:Object(s.jsx)("span",{className:"txt-rotate","data-period":"2000","data-rotate":'[ "Ambitious.", "Curious.", "Determined."]'})})]})})}),Object(s.jsx)(h.a,{children:Object(s.jsx)(b.a,{className:"justify-content-md-center",children:Object(s.jsx)(d.a,{delay:450,children:Object(s.jsx)(r.a,{src:j,width:"80%",height:"80%",className:"border-10-white"})})})}),Object(s.jsx)("div",{className:"parallax"})]})})},m=c(11),p=c(8),f=c(81),u=c(4),g=c(10),N=c.p+"static/media/gatech_logo.2a5f7857.png",v=c.p+"static/media/ta_pic.65dcb9b4.png",y=c.p+"static/media/research_pic.a3e13351.png",C=c.p+"static/media/spectrosam_pic.0e1f99e9.png",k=c.p+"static/media/facebook_logo.2390bf0a.png",w=c.p+"static/media/pge_logo.4aedff22.png";c(64);function A(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Education"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsxs)("ul",{className:"timeline",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"Jan 2021-Present"}),Object(s.jsx)("span",{className:"left",children:"Georgia Institute of Technology"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"Currently pursuing M.S. in Computer Science"}),Object(s.jsx)("li",{children:"Specialization: Machine Learning"})]})})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"Aug 2017-Dec 2020"}),Object(s.jsx)("span",{className:"left",children:"Georgia Institute of Technology"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"B.S. in Computer Science"}),Object(s.jsx)("li",{children:"Threads: Intelligence and Devices"})]})})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"Aug 2013-May 2017"}),Object(s.jsx)("span",{className:"left",children:"Menlo School"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atherton, California"}),Object(s.jsx)("p",{children:Object(s.jsx)("ul",{className:"bullets",children:Object(s.jsx)("li",{children:"High School Diploma"})})})]})]})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function S(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Teaching Assistant"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsxs)("ul",{className:"timeline",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"Jan 2021-Present"}),Object(s.jsx)("span",{className:"left",children:"Graduate TA"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Georgia Tech - College of Computing"}),Object(s.jsx)("p",{children:Object(s.jsx)("ul",{className:"bullets",children:Object(s.jsx)("li",{children:"Currently a GTA for CS 3600, Georgia Tech's Intro to Artificial Intelligence course"})})})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"Aug 2018-Dec 2020"}),Object(s.jsx)("span",{className:"left",children:"Undergraduate TA"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Georgia Tech - College of Computing"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"UTA for CS 3600, Georgia Tech's Intro to Artificial Intelligence course"}),Object(s.jsx)("li",{children:"Held office hours and review sessions to go over assignments covering the basics of AI"})]})})]})]})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function T(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Research"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsx)("ul",{className:"timeline",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"Dec 2020-Present"}),Object(s.jsx)("span",{className:"left",children:"Graduate Researcher"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Entertainment Intelligence Lab"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"Research Advisor: Dr. Mark Riedl"}),Object(s.jsx)("li",{children:"Currently researching language model techniques for story generation"}),Object(s.jsx)("li",{children:"Finetuned backward story generation models and experimenting with info retrieval concepts"})]})})]})})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function I(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Facebook"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsxs)("ul",{className:"timeline",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"May 2020-Aug 2020"}),Object(s.jsx)("span",{className:"left",children:"Software Engineer Intern"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Menlo Park, California"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"Within Feed and Stories Org (iOS)"}),Object(s.jsx)("li",{children:"Manager: Victor Wong"}),Object(s.jsx)("li",{children:"Developed core features for Facebook's Stories Composer"})]})})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"May 2019-Aug 2019"}),Object(s.jsx)("span",{className:"left",children:"Software Engineer Intern"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Menlo Park, California"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"Within WhatsApp"}),Object(s.jsx)("li",{children:"Manager: David Pe\xf1a"}),Object(s.jsx)("li",{children:"Implemented media infra performance algorithms for better user experience on WhatsApp Statuses"})]})})]})]})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function H(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Pacific Gas and Electric"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsx)("ul",{className:"timeline",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"right",children:"May 2018-Aug 2018"}),Object(s.jsx)("span",{className:"left",children:"Software Engineer Intern"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"San Francisco, California"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"Within Digital Catalyst Org"}),Object(s.jsx)("li",{children:"Manager: Pranav Jhumkhawala"}),Object(s.jsx)("li",{children:"Implemented a mobile chat bot using IBM Watson for better information lookup"}),Object(s.jsx)("li",{children:"Developed detection software for field workers to optimize company's inspection process of products"})]})})]})})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}var M=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),l=Object(m.a)(n,2),j=l[0],r=l[1],o=Object(i.useState)(!1),d=Object(m.a)(o,2),x=d[0],O=d[1],p=Object(i.useState)(!1),u=Object(m.a)(p,2),g=u[0],C=u[1],M=Object(i.useState)(!1),B=Object(m.a)(M,2),D=(B[0],B[1],Object(i.useState)(!1)),E=Object(m.a)(D,2),F=E[0],L=E[1];return Object(s.jsxs)("div",{id:"experience",children:[Object(s.jsx)("div",{className:"title-text-font padding-top-title",align:"center",children:"My Experience"}),Object(s.jsx)(h.a,{className:"padding-top-60",children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{class:"hovereffect",children:[Object(s.jsx)("img",{class:"img-responsive",src:N,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return a(!0)},children:"EDUCATION"}),Object(s.jsx)(A,{show:c,onHide:function(){return a(!1)}})]})]})]})}),Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{class:"hovereffect",children:[Object(s.jsx)("img",{class:"img-responsive",src:v,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return r(!0)},children:"TEACHING ASSISTANT"}),Object(s.jsx)(S,{show:j,onHide:function(){return r(!1)}})]})]})]})}),Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{class:"hovereffect",children:[Object(s.jsx)("img",{class:"img-responsive",src:y,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return O(!0)},children:"RESEARCH"}),Object(s.jsx)(T,{show:x,onHide:function(){return O(!1)}})]})]})]})})]})}),Object(s.jsx)(h.a,{className:"padding-top-60 padding-bottom-60",children:Object(s.jsxs)(b.a,{className:"justify-content-md-center",children:[Object(s.jsx)(f.a,{className:"col-md-auto",children:Object(s.jsxs)("div",{class:"hovereffect",children:[Object(s.jsx)("img",{class:"img-responsive",src:k,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return C(!0)},children:"FACEBOOK"}),Object(s.jsx)(I,{show:g,onHide:function(){return C(!1)}})]})]})]})}),Object(s.jsx)(f.a,{className:"col-md-auto",children:Object(s.jsxs)("div",{class:"hovereffect",children:[Object(s.jsx)("img",{class:"img-responsive",src:w,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return L(!0)},children:"PACIFIC GAS AND ELECTRIC"}),Object(s.jsx)(H,{show:F,onHide:function(){return L(!1)}})]})]})]})})]})})]})},B=(c.p,c.p+"static/media/kt_pic.01db9e47.png"),D=c.p+"static/media/listify_pic.72981e2b.png",E=c.p+"static/media/pov_pic.3546a2c8.png",F=c.p+"static/media/hpe_pic.94966854.png";c(65);function L(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"SpectroSam: Mobile Application"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsxs)("ul",{className:"timeline",children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Co-Founder"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsx)("ul",{className:"bullets",children:Object(s.jsxs)("li",{children:["Founded ",Object(s.jsx)("a",{href:"http://spectrosam.org",children:"SpectroSam"}),", a mobile application aiming to offer supplemental speech therapy for children"]})})})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Frontend"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsx)("ul",{className:"bullets",children:Object(s.jsx)("li",{children:"Implemented features for both educational and game portions of application"})})})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Backend"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsx)("ul",{className:"bullets",children:Object(s.jsx)("li",{children:"Developed scripts to convert, parse, and analyze audio files to text"})})})]})]})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function G(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Human Pose Estimation: Research Extension"})}),Object(s.jsxs)(u.a.Body,{children:[Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsx)("ul",{className:"timeline",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Researcher"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsxs)("li",{children:["Developed and assessed ",Object(s.jsx)("a",{href:"https://github.com/jpyneni3/MTL-AQA",children:"modified model architectures"})," that assess the quality of actions through human pose estimation"]}),Object(s.jsxs)("li",{children:["Built off of ",Object(s.jsx)("a",{href:"https://arxiv.org/pdf/1904.04346.pdf",children:"Multi Task Learning"})," and ",Object(s.jsx)("a",{href:"https://arxiv.org/pdf/1904.04346.pdf",children:"Assessing Quality of Actions"})," research"]}),Object(s.jsx)("li",{children:"Completed as part of the final project for CS 7643, Deep Learning"})]})})]})})})})})}),Object(s.jsxs)("div",{className:"cite-div",align:"left",children:["Panel image from ",Object(s.jsx)("a",{href:"https://arxiv.org/pdf/1904.04346.pdf",children:"MTL AQA dataset"})]})]}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function P(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Kannada Translator: Project"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsx)("ul",{className:"timeline",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Developer"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsxs)("li",{children:["Developed an ",Object(s.jsx)("a",{href:"https://ast0414.github.io/semit/",children:"image-to-image translation model"})," for written Arabic and Kannada numbers with MNIST"]}),Object(s.jsx)("li",{children:"Completed as part of the final project for CS 7641, Machine Learning"})]})})]})})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function R(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"POV Machine: Project"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsx)("ul",{className:"timeline",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Developer"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsx)("li",{children:"Built and programmed a Persistence of Vision machine utilizing Arduino parts and LED lights to display the English alphabet"}),Object(s.jsx)("li",{children:"Completed as a final project for CS 3651: Prototyping Intelligent Appliances"})]})})]})})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}function z(e){return Object(s.jsxs)(u.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(u.a.Header,{closeButton:!0,children:Object(s.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",className:"modal-title-text-font",children:"Listify: iOS Application"})}),Object(s.jsx)(u.a.Body,{children:Object(s.jsx)("p",{className:"modal-body-text-font",children:Object(s.jsx)(h.a,{className:"mt-2 mb-2",children:Object(s.jsx)(b.a,{children:Object(s.jsx)(f.a,{className:"col-md-8 offset-md-2",children:Object(s.jsx)("ul",{className:"timeline",children:Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{className:"left",children:"Developer"}),"\u200b",Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"panel-location-font",children:"Atlanta, Georgia"}),Object(s.jsx)("p",{children:Object(s.jsxs)("ul",{className:"bullets",children:[Object(s.jsxs)("li",{children:["Developed an ",Object(s.jsx)("a",{href:"https://devpost.com/software/listify?ref_content=user-portfolio&ref_feature=in_progress",children:"iOS application"})," that digitizes shopping lists, allowing users to keep track of what they need to buy"]}),Object(s.jsx)("li",{children:"Completed as a submission to HACKGT 7"})]})})]})})})})})})}),Object(s.jsx)(u.a.Footer,{children:Object(s.jsx)(g.a,{onClick:e.onHide,children:"Close"})})]}))}var _=function(){var e=Object(i.useState)(!1),t=Object(m.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),l=Object(m.a)(n,2),j=l[0],r=l[1],o=Object(i.useState)(!1),d=Object(m.a)(o,2),x=d[0],O=d[1],p=Object(i.useState)(!1),u=Object(m.a)(p,2),g=u[0],N=u[1],v=Object(i.useState)(!1),y=Object(m.a)(v,2),k=y[0],w=y[1];return Object(s.jsx)("div",{className:"parallax-projects",children:Object(s.jsxs)("div",{id:"projects",children:[Object(s.jsx)("div",{className:"title-text-font padding-top-title",align:"center",children:"My Projects"}),Object(s.jsx)(h.a,{className:"padding-top-60",children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{class:"hovereffect",children:[Object(s.jsx)("img",{class:"img-responsive",src:C,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return a(!0)},children:"SPECTROSAM"}),Object(s.jsx)(L,{show:c,onHide:function(){return a(!1)}})]})]})]})}),Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{className:"hovereffect",children:[Object(s.jsx)("img",{className:"img-responsive",src:F,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return r(!0)},children:"HUMAN POSE ESTIMATION"}),Object(s.jsx)(G,{show:j,onHide:function(){return r(!1)}})]})]})]})}),Object(s.jsx)(f.a,{children:Object(s.jsxs)("div",{className:"hovereffect",children:[Object(s.jsx)("img",{className:"img-responsive",src:B,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return O(!0)},children:"KANNADA TRANSLATOR"}),Object(s.jsx)(P,{show:x,onHide:function(){return O(!1)}})]})]})]})})]})}),Object(s.jsx)(h.a,{className:"padding-top-60 padding-bottom-60",children:Object(s.jsxs)(b.a,{className:"justify-content-md-center",children:[Object(s.jsx)(f.a,{className:"col-md-auto",children:Object(s.jsxs)("div",{className:"hovereffect",children:[Object(s.jsx)("img",{className:"img-responsive",src:E,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return w(!0)},children:"POV MACHINE"}),Object(s.jsx)(R,{show:k,onHide:function(){return w(!1)}})]})]})]})}),Object(s.jsx)(f.a,{className:"col-md-auto",children:Object(s.jsxs)("div",{className:"hovereffect",children:[Object(s.jsx)("img",{className:"img-responsive",src:D,width:"350px",height:"200px",alt:""}),Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsx)("h2",{}),Object(s.jsxs)("p",{className:"panel-text-font",children:[Object(s.jsx)("a",{onClick:function(){return N(!0)},children:"LISTIFY"}),Object(s.jsx)(z,{show:g,onHide:function(){return N(!1)}})]})]})]})})]})})]})})},W=(c(66),c.p+"static/media/Nitya Tarakad Resume.d494f2fc.pdf");var J=function(){return Object(s.jsxs)("div",{id:"contact",children:[Object(s.jsx)("div",{className:"title-text-font",align:"center",children:"Say Hi!"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"message-text-font",align:"center",children:"If you want to chat, please don't hesitate to contact me. I'll get back to you as soon as I can!"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{align:"center",children:[Object(s.jsx)(g.a,{className:"message-text-font not-rounded",variant:"info",align:"center",href:W,children:"Download My Resume"}),""]}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"text-font",align:"center",children:"\ud83d\udccd Belmont, California"})}),Object(s.jsxs)("div",{align:"center",children:[Object(s.jsx)("a",{href:"http://www.github.com/nitarakad",children:Object(s.jsx)("img",{src:"https://img.icons8.com/carbon-copy/100/000000/github.png",width:"3%",height:"3%"})}),Object(s.jsx)("a",{href:"http://www.linkedin.com/in/nitya-tarakad/",children:Object(s.jsx)("img",{src:"https://img.icons8.com/carbon-copy/100/000000/linkedin.png",width:"3%",height:"3%"})}),Object(s.jsx)("a",{href:"mailto:nitarakad@gmail.com",children:Object(s.jsx)("img",{src:"https://img.icons8.com/carbon-copy/100/000000/email.png",width:"3%",height:"3%"})}),Object(s.jsx)("a",{href:"http://www.instagram.com/nitarakad",children:Object(s.jsx)("img",{src:"https://img.icons8.com/carbon-copy/100/000000/instagram-new.png",width:"3%",height:"3%"})}),Object(s.jsx)("a",{href:"http://www.facebook.com/nitarakad",children:Object(s.jsx)("img",{src:"https://img.icons8.com/carbon-copy/100/000000/facebook-new.png",width:"3%",height:"3%"})})]})]})},K=c(46),U=c(30),V=c(29);var Q=function(){return Object(s.jsxs)("div",{id:"start",children:[Object(s.jsxs)(K.a,{fixed:"top",bg:"light",children:[Object(s.jsx)(V.Link,{to:"intro",spy:!0,smooth:!0,offset:-50,duration:500,children:Object(s.jsx)(K.a.Brand,{children:"NT"})}),Object(s.jsxs)(U.a,{className:"ml-auto",children:[Object(s.jsx)(V.Link,{to:"experience",spy:!0,smooth:!0,offset:-50,duration:500,children:Object(s.jsx)(U.a.Link,{children:"Experience"})}),Object(s.jsx)(V.Link,{to:"projects",spy:!0,smooth:!0,offset:-50,duration:500,children:Object(s.jsx)(U.a.Link,{children:"Projects"})}),Object(s.jsx)(V.Link,{to:"contact",spy:!0,smooth:!0,offset:50,duration:500,children:Object(s.jsx)(U.a.Link,{children:"Contact"})})]})]}),Object(s.jsx)(O,{}),Object(s.jsx)(M,{}),Object(s.jsx)(_,{}),Object(s.jsx)(J,{}),Object(s.jsxs)("div",{align:"right",children:[Object(s.jsx)("a",{href:"https://icons8.com/icon/BfmLaUCOh7CM/github",className:"icon8-link",children:"GitHub icon by Icons8"}),Object(s.jsx)("a",{className:"icon8-link",children:"||"}),Object(s.jsx)("a",{href:"https://icons8.com/icon/67673/linkedin",className:"icon8-link",children:"LinkedIn icon by Icons8"}),Object(s.jsx)("a",{className:"icon8-link",children:"||"}),Object(s.jsx)("a",{href:"https://icons8.com/icon/67668/instagram",className:"icon8-link",children:"Instagram icon by Icons8"}),Object(s.jsx)("a",{className:"icon8-link",children:"||"}),Object(s.jsx)("a",{href:"https://icons8.com/icon/118567/facebook",className:"icon8-link",children:"Facebook icon by Icons8"}),Object(s.jsx)("a",{className:"icon8-link",children:"||"}),Object(s.jsx)("a",{href:"https://icons8.com/icon/103129/email",className:"icon8-link",children:"Email icon by Icons8"})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(Q,{})}),document.getElementById("root")),q()}},[[77,1,2]]]);
//# sourceMappingURL=main.3c7573b5.chunk.js.map