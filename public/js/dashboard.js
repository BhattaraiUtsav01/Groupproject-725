document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("dash-supermarkets").textContent=(JSON.parse(localStorage.getItem('savedStores'))||[]).length;
  document.getElementById("dash-events").textContent="2";
  document.getElementById("dash-items").textContent="3";
  document.getElementById("dash-rooms").textContent="3";
});