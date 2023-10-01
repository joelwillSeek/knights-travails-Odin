/**
 *
 * @param {any} value
 * @returns {{value:any,next:Function,print:Function}}
 */let e,l=e=>({value:e,next:null});var n=()=>{let e=null,n=(e,l)=>null==l?e:(l.next=n(e,l.next),l),t=(e,l)=>null==l?e:(e.push(l.value),t(e,l.next)),u=l=>null==e?"empty":d(e,l),d=(e,l)=>null!=e&&(e.value==l||d(e.next,l)),a=(e,l)=>null==e?null:e.value==l?e.next:(e.next=a(e.next,l),e);return{add_node:t=>{let u=l(t);e=null==e?u:n(u,e)},get_array:()=>t([],e),remove_node:l=>null==e?"empty":!1==u(l)?"no such value":(e=null==e.next?null:a(e,l),"removed"),search_node:u,get_head_value:()=>e.value}};let t=(e=[],{set_node:l=>{let t=n();t.add_node(l),e.push(t)},set_edge:(l,n)=>{for(let t=0;t<e.length;t++){let u=e[t];u.get_head_value()==l&&u.add_node(n)}},print_graph:()=>{for(let l=0;l<e.length;l++){let n=e[l].get_array();for(let e=0;e<n.length;e++)console.log(n[l]+"->")}}});t.set_node("A"),t.set_node("B"),t.set_node("C"),t.set_node("D"),t.set_edge("A","D"),t.set_edge("C","A"),t.print_graph();//# sourceMappingURL=template.8994afb3.js.map

//# sourceMappingURL=template.8994afb3.js.map
