document.addEventListener("DOMContentLoaded",()=>{
  const data=[
    {suburb:"Carlton",price:280,photo:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=60",host:"Sarah Chen"},
    {suburb:"Fitzroy",price:320,photo:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=60",host:"Mike Johnson"},
    {suburb:"Brunswick",price:250,photo:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=60",host:"Emma Wilson"}
  ];
  const grid=document.getElementById('rooms-grid');
  grid.innerHTML=data.map(r=>`
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow card overflow-hidden">
      <img class="w-full h-40 object-cover" src="${r.photo}" alt="${r.suburb}">
      <div class="p-4 flex items-center justify-between">
        <div>
          <div class="font-semibold">${r.suburb}</div>
          <div class="text-sm text-gray-500">Host: ${r.host}</div>
        </div>
        <div class="text-blue-600 font-bold">$${r.price}/wk</div>
      </div>
    </div>`).join('');
});