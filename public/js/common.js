document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("theme-toggle");
  if(btn){const cur=localStorage.getItem("theme")||"light";document.documentElement.classList.toggle("dark",cur==="dark");btn.onclick=()=>{const d=document.documentElement.classList.toggle("dark");localStorage.setItem("theme",d?"dark":"light");};}
  const path=location.pathname.replace('/','')||'home';
  document.querySelectorAll('nav .nav a').forEach(a=>{const name=a.getAttribute('href')?.replace('/','');if(name===path)a.classList.add('active');});
});