import{_ as n,a as t,b as a,c as e,i,s as o,d as c,S as s,E as l,m as u,n as f,F as r,r as d,G as p,q as v,j as h,v as m,y as b,z as $,A as x,f as y,C as g,u as E,g as j,h as T,D as z,x as A,k as I,B as L,I as B,J as N}from"./client.f6b6f7f9.js";import{T as P}from"./Text.41fb21a8.js";function k(n){var t,a,e,i,o,c,s=n[3]&&w(n);return{c:function(){t=y("label"),a=g(n[2]),e=E(),i=y("input"),o=E(),s&&s.c(),this.h()},l:function(c){t=j(c,"LABEL",{for:!0,class:!0});var l=T(t);a=z(l,n[2]),e=A(l),i=j(l,"INPUT",{placeholder:!0,disabled:!0,value:!0,type:!0,class:!0}),o=A(l),s&&s.l(l),l.forEach(h),this.h()},h:function(){I(i,"placeholder",n[2]),i.disabled=n[4],i.value=n[5],I(i,"type",n[1]),I(i,"class","svelte-1xdgjoz"),I(t,"for",n[2]),I(t,"class","svelte-1xdgjoz")},m:function(n,l){u(n,t,l),L(t,a),L(t,e),L(t,i),L(t,o),s&&s.m(t,null),c=!0},p:function(n,e){(!c||4&e)&&B(a,n[2]),(!c||4&e)&&I(i,"placeholder",n[2]),(!c||16&e)&&(i.disabled=n[4]),(!c||32&e&&i.value!==n[5])&&(i.value=n[5]),(!c||2&e)&&I(i,"type",n[1]),n[3]?s?(s.p(n,e),v(s,1)):((s=w(n)).c(),v(s,1),s.m(t,null)):s&&(r(),d(s,1,1,(function(){s=null})),p()),(!c||4&e)&&I(t,"for",n[2])},i:function(n){c||(v(s),c=!0)},o:function(n){d(s),c=!1},d:function(n){n&&h(t),s&&s.d()}}}function q(n){var t;return{c:function(){t=y("textarea"),this.h()},l:function(n){t=j(n,"TEXTAREA",{placeholder:!0,class:!0}),T(t).forEach(h),this.h()},h:function(){I(t,"placeholder",n[2]),I(t,"class","svelte-1xdgjoz")},m:function(n,a){u(n,t,a)},p:function(n,a){4&a&&I(t,"placeholder",n[2])},i:N,o:N,d:function(n){n&&h(t)}}}function w(n){var t,a=new P({props:{tiny:!0,$$slots:{default:[C]},$$scope:{ctx:n}}});return{c:function(){m(a.$$.fragment)},l:function(n){b(a.$$.fragment,n)},m:function(n,e){$(a,n,e),t=!0},p:function(n,t){var e={};72&t&&(e.$$scope={dirty:t,ctx:n}),a.$set(e)},i:function(n){t||(v(a.$$.fragment,n),t=!0)},o:function(n){d(a.$$.fragment,n),t=!1},d:function(n){x(a,n)}}}function C(n){var t,a;return{c:function(){t=y("p"),a=g(n[3])},l:function(e){t=j(e,"P",{});var i=T(t);a=z(i,n[3]),i.forEach(h)},m:function(n,e){u(n,t,e),L(t,a)},p:function(n,t){8&t&&B(a,n[3])},d:function(n){n&&h(t)}}}function D(n){var t,a,e,i,o=[q,k],c=[];function s(n,t){return n[0]?0:1}return t=s(n),a=c[t]=o[t](n),{c:function(){a.c(),e=l()},l:function(n){a.l(n),e=l()},m:function(n,a){c[t].m(n,a),u(n,e,a),i=!0},p:function(n,i){var l=f(i,1)[0],u=t;(t=s(n))===u?c[t].p(n,l):(r(),d(c[u],1,1,(function(){c[u]=null})),p(),(a=c[t])||(a=c[t]=o[t](n)).c(),v(a,1),a.m(e.parentNode,e))},i:function(n){i||(v(a),i=!0)},o:function(n){d(a),i=!1},d:function(n){c[t].d(n),n&&h(e)}}}function F(n,t,a){var e=t.textarea,i=t.type,o=void 0===i?"Text":i,c=t.label,s=void 0===c?"Label":c,l=t.help,u=void 0!==l&&l,f=t.disabled,r=void 0!==f&&f,d=t.value,p=void 0===d?"":d;return n.$set=function(n){"textarea"in n&&a(0,e=n.textarea),"type"in n&&a(1,o=n.type),"label"in n&&a(2,s=n.label),"help"in n&&a(3,u=n.help),"disabled"in n&&a(4,r=n.disabled),"value"in n&&a(5,p=n.value)},[e,o,s,u,r,p]}var G=function(l){function u(n){var s;return t(this,u),s=a(this,e(u).call(this)),i(c(s),n,F,D,o,{textarea:0,type:1,label:2,help:3,disabled:4,value:5}),s}return n(u,s),u}();export{G as I};
