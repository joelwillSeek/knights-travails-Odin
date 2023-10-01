/**
 *
 * @param {any} value
 * @returns {{value:any,next:Function,print:Function}}
 */let e,l=e=>({value:e,next:null});var n=()=>{let e=null,n=(e,l)=>null==l?e:(l.next=n(e,l.next),l),t=(e,l)=>null==l?e:(e.push(l.value),t(e,l.next)),u=l=>null==e?"empty":a(e,l),a=(e,l)=>null!=e&&(e.value==l||a(e.next,l)),r=(e,l)=>null==e?null:e.value==l?e.next:(e.next=r(e.next,l),e);return{add_node:t=>{let u=l(t);e=null==e?u:n(u,e)},get_array:()=>t([],e),remove_node:l=>null==e?"empty":!1==u(l)?"no such value":(e=null==e.next?null:r(e,l),"removed"),search_node:u,get_head_value:()=>e.value}};let t=(e=[],{set_node:l=>{for(let t=0;t<l.length;t++){let u=n();u.add_node(l[t]),e.push(u)}},set_edge:(l,n)=>{for(let t=0;t<e.length;t++){let u=e[t];u.get_head_value()==l&&u.add_node(n)}},print_graph:()=>{for(let l=0;l<e.length;l++)console.log(e[l].get_array())}}),u=[];for(let e=1;e<=64;e++)u.push(e);t.set_node(u),t.print_graph();//# sourceMappingURL=template.ee4471ff.js.map

//# sourceMappingURL=template.ee4471ff.js.map
