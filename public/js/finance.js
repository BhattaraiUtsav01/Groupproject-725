document.addEventListener("DOMContentLoaded",()=>{
  const ctx=document.getElementById("expense-chart");
  const inputs=document.querySelectorAll(".expense-input");
  function fmt(n){return '$'+Number(n||0).toFixed(2)}
  function recalc(){
    const vals=[...inputs].map(i=>Number(i.value||0));
    const total=vals.reduce((a,b)=>a+b,0);
    document.getElementById("total-expenses").textContent=fmt(total);
    if(ctx){ if(window._expChart) window._expChart.destroy(); window._expChart=new Chart(ctx,{type:"pie",data:{labels:["Rent","Groceries","Transport","Entertainment","Other"],datasets:[{data:vals}]},options:{plugins:{legend:{position:'bottom'}}}}); }
  }
  inputs.forEach(i=>i.addEventListener("input",recalc));recalc();
});