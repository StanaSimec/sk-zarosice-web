(this["webpackJsonpsk-zarosice-web"]=this["webpackJsonpsk-zarosice-web"]||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var o,n=t(1),c=t.n(n),m=t(12),r=t.n(m),s=(t(19),t(10)),i=t(2),h=t(5),d=t(6),u=t.n(d),j=(t(20),t(0)),l="white",y="yellow",x="green",b="red",T="small",w="middle",O="big",p=(o={},Object(h.a)(o,T,"p"),Object(h.a)(o,w,"h3"),Object(h.a)(o,O,"h1"),o),v=function(e){var a,t=e.text,o=e.size,n=void 0===o?T:o,c=e.classname,m=void 0===c?"":c,r=e.color,s=void 0===r?"":r,i=e.isMainHeader,d=void 0!==i&&i,l=p[n];return Object(j.jsx)(l,{className:u()((a={text:t},Object(h.a)(a,n,!0),Object(h.a)(a,m,!!m),Object(h.a)(a,s,!!s),Object(h.a)(a,"mainHeader",d),a)),children:t})},S=(t(22),function(e){var a=e.text,t=void 0===a?"":a;return Object(j.jsx)("div",{className:"categoryHeaderWrapper",children:Object(j.jsx)(v,{text:t,classname:"categoryHeader",isMainHeader:!0,size:w})})}),f=(t(23),function(e){var a=e.match,t=a.homeTeam,o=a.awayTeam,n=a.date,c=a.place;return Object(j.jsx)("div",{className:"nextMatch",children:Object(j.jsxs)("div",{className:"match",children:[Object(j.jsx)(v,{text:"".concat(t," : ").concat(o),color:l,size:w,classname:"nextTeams"}),Object(j.jsx)(v,{color:y,text:new Intl.DateTimeFormat("cs-CZ",{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}).format(n)}),c&&Object(j.jsx)(v,{text:c,color:y,classname:"friendlyMatch"})]})})}),M=function(e){var a=e.matches,t=void 0===a?[]:a,o=Date.now(),n=t.length&&t.filter((function(e){return e.date>=o}));return n.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{text:"P\u0159\xe1telsk\xe1 utk\xe1n\xed:"}),n.map((function(e){return Object(j.jsx)(f,{match:e},e.date)}))]}):null},g=t(4),k=t.p+"static/media/logo.657432da.png",D="SK \u017daro\u0161ice",N="Dru\u017eba Bukovany",_="Sokol Kn\u011b\u017edub",A="Hr. Lhota B",U="KEN Vesel\xed nad M.",P="Star\xfd Podvorov",E="FC Vlko\u0161",B="FK Hovorany",F="Sokol Petrov",z="Doln\xed Bojanovice",C="Sokol Dambo\u0159ice",H="Ban\xedk Rati\u0161kovice B",K="FC Lipov",I="Sokol \u017deravice",V="T\u011bmice - Mor. P\xedsek",Z="Brumovice",J="Charv\xe1tsk\xe1 N. V.",L="\u010cejkovice - Hovorany",W="Agro Vnorovy",R="Kobyl\xed - Kobe\u0159ice",q="FK Milotice",G="SK Kostelec",Q="\u010cej\u010d - Hovorany",X="Mor. P\xedsek - \u017deravice",Y="SK Boleradice",$=D,ee={A_TEAM:"A-t\xfdm",U19:"Dorost",U15:"\u017d\xe1ci"},ae="Okresn\xed p\u0159ebor",te="Okresn\xed p\u0159ebor",oe="Okresn\xed sout\u011b\u017e",ne={A_TEAM:"/",U19:"/dorost",U15:"/zaci"},ce=(t(24),function(e){var a=e.text,t=e.href,o=e.size,n=void 0===o?T:o,c=e.isMainHeader,m=void 0!==c&&c;return Object(j.jsx)(s.b,{to:t,className:"link",children:Object(j.jsx)(v,{text:a,size:n,color:b,isMainHeader:m})})}),me=(t(25),function(e){var a=e.prefix;return Object(j.jsx)(ce,{href:ne[a],text:ee[a]})}),re=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(me,{prefix:"A_TEAM"}),Object(j.jsx)(me,{prefix:"U19"}),Object(j.jsx)(me,{prefix:"U15"})]})},se=function(){return Object(j.jsx)("div",{className:"links",children:Object(j.jsx)(re,{})})},ie=function(){return Object(j.jsx)("img",{className:"logo",src:k,alt:"logo klubu",width:"64",height:"64"})},he=function(){return Object(j.jsx)("div",{className:"name",children:Object(j.jsx)(ce,{text:"SK \u017daro\u0161ice",href:"/",size:O,isMainHeader:!0})})},de=function(e){var a=e.isOpen,t=e.onClick;return Object(j.jsxs)("div",{className:u()({burger:!0,burger__open:a}),onClick:t,children:[Object(j.jsx)("span",{className:"bar"}),Object(j.jsx)("span",{className:"bar"}),Object(j.jsx)("span",{className:"bar"})]})},ue=function(){return Object(j.jsx)("div",{className:"drop-links",children:Object(j.jsx)(re,{})})},je=function(){var e=Object(n.useState)(!1),a=Object(g.a)(e,2),t=a[0],o=a[1];return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:u()({"header-bar":!0,"header-bar__bordered":!t}),children:[Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)(ie,{}),Object(j.jsx)(he,{})]}),Object(j.jsx)(se,{}),Object(j.jsx)(de,{isOpen:t,onClick:function(){return o((function(e){return!e}))}})]}),t&&Object(j.jsx)(ue,{})]})},le=function(e){var a=e.match;return a&&a.date>=Date.now()?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{text:"Mistrovsk\xe9 utk\xe1n\xed:"}),Object(j.jsx)(f,{match:a})]}):null},ye=(t(26),function(){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)(v,{text:"#"})}),Object(j.jsx)("th",{children:Object(j.jsx)(v,{text:"Klub"})}),Object(j.jsx)("th",{children:Object(j.jsx)(v,{text:"Z"})}),Object(j.jsx)("th",{children:Object(j.jsx)(v,{text:"B"})})]})}),xe=function(e){var a=e.point,t=e.position,o=void 0===t?0:t,n=a.team,c=void 0===n?"":n,m=a.points,r=void 0===m?0:m,s=a.matches,i=void 0===s?0:s,h=c===$?x:void 0;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(v,{text:o,color:h})}),Object(j.jsx)("td",{children:Object(j.jsx)(v,{text:c,color:h})}),Object(j.jsx)("td",{children:Object(j.jsx)(v,{text:i,color:h})}),Object(j.jsx)("td",{children:Object(j.jsx)(v,{text:r,color:h})})]})},be=function(e){var a=e.points;return(void 0===a?[]:a).sort((function(e,a){return e.position<a.position?-1:e.position>a.position?1:0})).map((function(e){return Object(j.jsx)(xe,{point:e,position:e.position},e.team)}))},Te=function(e){var a=e.points,t=void 0===a?[]:a;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{text:"Tabulka:"}),Object(j.jsx)("div",{className:"results-table",children:Object(j.jsx)("table",{className:"points",children:Object(j.jsxs)("tbody",{children:[Object(j.jsx)(ye,{}),Object(j.jsx)(be,{points:t})]})})})]})},we=(t(27),function(e){var a=e.date;return Object(j.jsx)(v,{text:new Intl.DateTimeFormat("cs-CZ",{dateStyle:"long"}).format(a),color:"yellow"})}),Oe=function(e){var a=e.result;return Object(j.jsxs)("div",{className:"team-header",children:[Object(j.jsx)(v,{text:a.homeTeam,classname:"teams",color:a.homeScore>a.awayScore?x:l,size:w}),Object(j.jsx)(v,{text:":",classname:"teams",color:l}),Object(j.jsx)(v,{text:a.awayTeam,classname:"teams",color:a.awayScore>a.homeScore?x:l,size:w})]})},pe=function(e){var a=e.result;return Object(j.jsxs)("div",{className:"banner",children:[Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)(v,{text:"".concat(a.round,". kolo"),color:y}),Object(j.jsx)(we,{date:a.date})]}),Object(j.jsx)(Oe,{result:a}),Object(j.jsx)(v,{text:"".concat(a.homeScore," : ").concat(a.awayScore),size:O,classname:"score",color:l})]})},ve=function(e){var a=e.results;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{text:"Odehran\xe1 utk\xe1n\xed:"}),Object(j.jsx)("div",{className:"results",children:a.map((function(e){return Object(j.jsx)(pe,{result:e},"".concat(e.date,"-").concat(e.homeScore,"-").concat(e.awayScore))}))})]})},Se=(t(28),function(e){var a=e.onClick,t=e.isOpen;return Object(j.jsx)("div",{className:"showMatchPlanWrapper",children:Object(j.jsx)("div",{onClick:a,className:u()("triangleIcon",t?"arrowUp":"arrowDown")})})}),fe=function(e){var a=e.matchPlan,t=Object(n.useState)(!1),o=Object(g.a)(t,2),c=o[0],m=o[1];return Object(j.jsxs)("div",{className:"matchPlan",children:[Object(j.jsx)(Se,{onClick:function(){m(!c)},isOpen:c}),Object(j.jsx)("div",{className:"matchPlanComplete",children:c&&a.map((function(e){return Object(j.jsx)(f,{match:e},e.date)}))})]})},Me=function(e){var a=e.year,t=void 0===a?2022:a,o=e.month,n=e.day,c=e.hour,m=void 0===c?10:c,r=e.minute;return new Date(t,o-1,n,m,void 0===r?15:r)},ge={A_TEAM:[{homeTeam:D,awayTeam:N,date:Me({month:3,day:20})},{homeTeam:I,awayTeam:D,date:Me({month:3,day:27,hour:14,minute:0})},{homeTeam:D,awayTeam:K,date:Me({month:4,day:3})},{homeTeam:H,awayTeam:D,date:Me({month:4,day:10,hour:15,minute:30})},{homeTeam:D,awayTeam:C,date:Me({month:4,day:17})},{homeTeam:z,awayTeam:D,date:Me({month:4,day:24,hour:16,minute:0})},{homeTeam:D,awayTeam:F,date:Me({month:5,day:1})},{homeTeam:B,awayTeam:D,date:Me({month:5,day:8,hour:16,minute:30})},{homeTeam:D,awayTeam:E,date:Me({month:5,day:15})},{homeTeam:D,awayTeam:U,date:Me({month:5,day:22})},{homeTeam:P,awayTeam:D,date:Me({month:5,day:29,hour:17,minute:0})},{homeTeam:D,awayTeam:A,date:Me({month:6,day:5})},{homeTeam:_,awayTeam:D,date:Me({month:6,day:12,hour:16,minute:30})}],U19:[{homeTeam:D,awayTeam:V,date:Me({month:4,day:3,hour:13})},{homeTeam:G,awayTeam:D,date:Me({month:4,day:10,hour:13})},{homeTeam:D,awayTeam:q,date:Me({month:4,day:24,hour:13,minute:45})},{homeTeam:R,awayTeam:D,date:Me({month:5,day:1,hour:14,minute:0})},{homeTeam:D,awayTeam:W,date:Me({month:5,day:8,hour:14})},{homeTeam:L,awayTeam:D,date:Me({month:5,day:14,hour:14})},{homeTeam:D,awayTeam:J,date:Me({month:5,day:22,hour:15,minute:30})},{homeTeam:N,awayTeam:D,date:Me({month:5,day:29,hour:13,minute:30})},{homeTeam:Z,awayTeam:D,date:Me({month:6,day:5,hour:14,minute:45})},{homeTeam:D,awayTeam:H,date:Me({month:6,day:12,hour:14,minute:45})}],U15:[{homeTeam:F,awayTeam:D,date:Me({month:4,day:10,hour:12,minute:30})},{homeTeam:q,awayTeam:D,date:Me({month:4,day:16,hour:13,minute:30})},{homeTeam:Q,awayTeam:D,date:Me({month:4,day:23,minute:0})},{homeTeam:D,awayTeam:X,date:Me({month:5,day:1,hour:13})},{homeTeam:D,awayTeam:Q,date:Me({month:5,day:10,hour:17,minute:30})},{homeTeam:D,awayTeam:F,date:Me({month:5,day:15,hour:13,minute:15})},{homeTeam:D,awayTeam:q,date:Me({month:5,day:22,hour:13,minute:15})},{homeTeam:D,awayTeam:Q,date:Me({month:5,day:29,minute:0})},{homeTeam:X,awayTeam:D,date:Me({month:6,day:4,hour:14,minute:30})}]},ke={A_TEAM:[{homeTeam:D,awayTeam:Y,date:new Date(2022,2,13,12,0),place:"UT Dambo\u0159ice"}]},De=14,Ne=10,_e=8,Ae={A_TEAM:[{team:H,points:39,matches:De,position:1},{team:P,points:34,matches:De,position:2},{team:E,points:32,matches:De,position:3},{team:_,points:17,matches:De,position:7},{team:F,points:17,matches:De,position:8},{team:N,points:17,matches:De,position:9},{team:z,points:19,matches:De,position:4},{team:C,points:16,matches:De,position:10},{team:A,points:19,matches:De,position:5},{team:D,points:19,matches:De,position:6},{team:U,points:15,matches:De,position:12},{team:K,points:16,matches:De,position:11},{team:I,points:9,matches:De,position:13},{team:B,points:7,matches:De,position:14}],U19:[{team:q,points:19,matches:Ne,position:1},{team:J,points:25,matches:Ne,position:2},{team:H,points:24,matches:Ne,position:3},{team:R,points:22,matches:Ne,position:4},{team:W,points:16,matches:Ne,position:5},{team:L,points:15,matches:Ne,position:6},{team:V,points:13,matches:Ne,position:7},{team:D,points:10,matches:Ne,position:8},{team:N,points:9,matches:Ne,position:9},{team:Z,points:3,matches:Ne,position:10},{team:G,points:0,matches:Ne,position:11}],U15:[{team:Q,points:16,matches:_e-1,position:1},{team:D,points:15,matches:_e-1,position:2},{team:F,points:10,matches:_e,position:3},{team:X,points:10,matches:_e,position:4},{team:q,points:2,matches:_e,position:5}]},Ue={A_TEAM:[{round:14,date:new Date("2022-03-20"),homeTeam:D,homeScore:4,awayTeam:N,awayScore:2},{round:1,date:new Date("2021-10-31"),homeTeam:N,homeScore:2,awayTeam:D,awayScore:1},{round:13,date:new Date("2021-10-24"),homeTeam:D,homeScore:2,awayTeam:_,awayScore:0},{round:12,date:new Date("2021-10-16"),homeTeam:A,homeScore:1,awayTeam:D,awayScore:4},{round:11,date:new Date("2021-10-10"),homeTeam:D,homeScore:3,awayTeam:P,awayScore:2},{round:10,date:new Date("2021-10-03"),homeTeam:U,homeScore:1,awayTeam:D,awayScore:0},{round:9,date:new Date("2021-09-26"),homeTeam:E,homeScore:6,awayTeam:D,awayScore:2},{round:8,date:new Date("2021-09-19"),homeTeam:D,homeScore:2,awayTeam:B,awayScore:0},{round:7,date:new Date("2021-09-12"),homeTeam:F,homeScore:1,awayTeam:D,awayScore:1},{round:6,date:new Date("2021-09-05"),homeTeam:D,homeScore:1,awayTeam:z,awayScore:4},{round:5,date:new Date("2021-08-29"),homeTeam:C,homeScore:5,awayTeam:D,awayScore:1},{round:4,date:new Date("2021-08-22"),homeTeam:D,homeScore:0,awayTeam:H,awayScore:5},{round:3,date:new Date("2021-08-15"),homeTeam:K,homeScore:2,awayTeam:D,awayScore:0},{round:2,date:new Date("2021-08-08"),homeTeam:D,homeScore:4,awayTeam:I,awayScore:0}],U19:[{round:1,date:new Date("2021-10-24"),homeTeam:H,homeScore:7,awayTeam:D,awayScore:0},{round:2,date:new Date("2021-10-16"),homeTeam:D,homeScore:8,awayTeam:Z,awayScore:0},{round:11,date:new Date("2021-10-09"),homeTeam:D,homeScore:9,awayTeam:N,awayScore:1},{round:10,date:new Date("2021-10-02"),homeTeam:J,homeScore:4,awayTeam:D,awayScore:0},{round:9,date:new Date("2021-09-25"),homeTeam:D,homeScore:1,awayTeam:L,awayScore:5},{round:8,date:new Date("2021-09-18"),homeTeam:W,homeScore:3,awayTeam:D,awayScore:0},{round:7,date:new Date("2021-09-11"),homeTeam:D,homeScore:3,awayTeam:R,awayScore:3},{round:6,date:new Date("2021-09-05"),homeTeam:q,homeScore:3,awayTeam:D,awayScore:1},{round:4,date:new Date("2021-08-21"),homeTeam:D,homeScore:10,awayTeam:G,awayScore:2},{round:3,date:new Date("2021-08-14"),homeTeam:V,homeScore:4,awayTeam:D,awayScore:2}],U15:[{round:1,date:new Date("2021-10-23"),homeTeam:D,homeScore:0,awayTeam:q,awayScore:0},{round:3,date:new Date("2021-10-09"),homeTeam:X,homeScore:0,awayTeam:D,awayScore:3},{round:10,date:new Date("2021-10-03"),homeTeam:D,homeScore:2,awayTeam:F,awayScore:0},{round:8,date:new Date("2021-09-19"),homeTeam:D,homeScore:6,awayTeam:X,awayScore:0},{round:7,date:new Date("2021-09-09"),homeTeam:Q,homeScore:3,awayTeam:D,awayScore:3},{round:6,date:new Date("2021-09-04"),homeTeam:q,homeScore:0,awayTeam:D,awayScore:5},{round:5,date:new Date("2021-08-29"),homeTeam:F,homeScore:1,awayTeam:D,awayScore:1}]},Pe=t(7),Ee=t(13),Be=t(14),Fe=function(){function e(){Object(Ee.a)(this,e)}return Object(Be.a)(e,null,[{key:"_removePlayedMatches",value:function(e){return e.filter((function(e){return e.date>=Date.now()}))}},{key:"_sortMatchesByDate",value:function(e){return e.sort((function(e,a){return e.date-a.date}))}},{key:"_calculateNearestMatchByDate",value:function(e){return this._sortMatchesByDate(e)[0]}},{key:"_getNextMatch",value:function(e){var a=this._removePlayedMatches(e);return this._calculateNearestMatchByDate(a)}},{key:"_removeFirstMatch",value:function(e){return e.slice(1)}},{key:"_getMatchPlan",value:function(e){var a=this._removePlayedMatches(e),t=this._sortMatchesByDate(a);return this._removeFirstMatch(t)}},{key:"getAteamNextMatch",value:function(){return this._getNextMatch(Object(Pe.a)(ge.A_TEAM))}},{key:"getU19NextMatch",value:function(){return this._getNextMatch(Object(Pe.a)(ge.U19))}},{key:"getU15NextMatch",value:function(){return this._getNextMatch(Object(Pe.a)(ge.U15))}},{key:"getATeamMatchPlan",value:function(){return this._getMatchPlan(Object(Pe.a)(ge.A_TEAM))}},{key:"getU19MatchPlan",value:function(){return this._getMatchPlan(Object(Pe.a)(ge.U19))}},{key:"getU15MatchPlan",value:function(){return this._getMatchPlan(Object(Pe.a)(ge.U15))}}]),e}(),ze=function(e){var a=e.competition,t=e.nextMatch,o=e.points,n=e.results,c=e.category,m=e.friendlyMatch,r=e.matchPlan;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(je,{}),Object(j.jsx)(S,{text:"".concat(c," : ").concat(a)}),Object(j.jsx)(M,{matches:m}),Object(j.jsx)(le,{match:t}),Object(j.jsx)(fe,{matchPlan:r}),Object(j.jsx)(Te,{points:o}),Object(j.jsx)(ve,{results:n})]})};var Ce=function(){return Object(j.jsx)(s.a,{basename:"",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:ne.A_TEAM,element:Object(j.jsx)(ze,{nextMatch:Fe.getAteamNextMatch(),friendlyMatch:ke.A_TEAM,points:Ae.A_TEAM,results:Ue.A_TEAM,competition:ae,category:ee.A_TEAM,matchPlan:Fe.getATeamMatchPlan()})}),Object(j.jsx)(i.a,{path:ne.U19,element:Object(j.jsx)(ze,{nextMatch:Fe.getU19NextMatch(),points:Ae.U19,results:Ue.U19,competition:te,category:ee.U19,matchPlan:Fe.getU19MatchPlan()})}),Object(j.jsx)(i.a,{path:ne.U15,element:Object(j.jsx)(ze,{nextMatch:Fe.getU15NextMatch(),points:Ae.U15,results:Ue.U15,competition:oe,category:ee.U15,matchPlan:Fe.getU15MatchPlan()})})]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Ce,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7eda71d0.chunk.js.map