var e;let t,l,o,g,a=e=>({data:e}),d=(e=[0,1,2,3,4,5,6,7],t=[],l=[],o=e=>l.push(a(e)),g=(e,l)=>{if(!e.has(l)){e.add(l),console.log(l);for(let o=0;o<t[l].length;o++)1==t[l][o]&&g(e,o)}},(()=>{if(8==e.length)for(let l=1;l<=8;l++){o(e[l-1]);let g=[];for(let e=1;e<=8;e++)g.push(0);t.push(g)}})(),{add_node:o,set_edge:(e,l)=>t[e][l]=1,check_edge:(e,l)=>1==t[e][l],get_string_form:()=>{let e="  ";l.forEach(t=>e+=t.data+" "),console.log(e);for(let o=0;o<t.length;o++){e=`${l[o].data} `;for(let l=0;l<t[o].length;l++)e+=t[o][l]+" ";console.log(e)}},DFS:e=>g(new Set,e)});// createKnightGraph(8);
d.set_edge(5,5),d.get_string_form(),d.DFS(5);//# sourceMappingURL=template.68d9c386.js.map

//# sourceMappingURL=template.68d9c386.js.map
