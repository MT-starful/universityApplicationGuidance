import{_ as s,o as t,f as n,t as a,a as _,w as f,i as p,e as k,r as m}from"./index-C4KX3zv0.js";const u={name:"seriesTitle",props:{title:{type:String,default:""}}},h={class:"title"};function w(c,i,e,r,l,o){return t(),n("p",h,a(e.title),1)}const g=s(u,[["render",w],["__scopeId","data-v-27923c45"]]),C={name:"linkCard",props:{linkInfo:{type:Object,default:()=>({date:"",title:"",url:"https://www.baidu.com"})}},methods:{goWeb(){window.location.href=this.linkInfo.url}}},I={key:0,class:"date"},$={class:"title"};function x(c,i,e,r,l,o){const d=m("el-card");return t(),_(d,{class:"card",onClick:o.goWeb},{default:f(()=>[e.linkInfo.date?(t(),n("p",I,a(e.linkInfo.date),1)):p("",!0),k("p",$,a(e.linkInfo.title),1)]),_:1},8,["onClick"])}const y=s(C,[["render",x],["__scopeId","data-v-e7f25cc6"]]);export{y as L,g as S};
