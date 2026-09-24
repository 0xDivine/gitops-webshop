const products=[
  {name:"Wireless Headphones",price:129,icon:"◉",desc:"Comfortable everyday audio."},
  {name:"Mechanical Keyboard",price:99,icon:"⌨",desc:"Clean desk setup with linear switches."},
  {name:"4K Webcam",price:79,icon:"◉",desc:"Sharp video for calls and streaming."},
  {name:"USB-C Hub",price:49,icon:"▦",desc:"One compact hub for your setup."},
  {name:"Portable SSD",price:89,icon:"▣",desc:"Fast storage for work and play."},
  {name:"Desk Lamp",price:39,icon:"◐",desc:"Soft lighting for focused sessions."}
];
const cart=[];
const productsEl=document.getElementById("products");
const cartCount=document.getElementById("cartCount");
const cartItems=document.getElementById("cartItems");
const cartTotal=document.getElementById("cartTotal");
const drawer=document.getElementById("drawer");
function money(v){return new Intl.NumberFormat("en-NL",{style:"currency",currency:"EUR"}).format(v)}
function renderProducts(){productsEl.innerHTML=products.map((p,i)=>`<article class="card"><div class="art">${p.icon}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${money(p.price)}</div><button class="buy" onclick="addToCart(${i})">Add to cart</button></article>`).join("")}
function addToCart(i){cart.push(products[i]);renderCart()}
function renderCart(){cartCount.textContent=cart.length;cartItems.innerHTML=cart.length?cart.map((p,i)=>`<div class="item"><div><strong>${p.name}</strong><br><small>${money(p.price)}</small></div><button onclick="removeFromCart(${i})">Remove</button></div>`).join(""):"<p>Your cart is empty.</p>";cartTotal.textContent=money(cart.reduce((s,p)=>s+p.price,0))}
function removeFromCart(i){cart.splice(i,1);renderCart()}
document.getElementById("cartButton").onclick=()=>{drawer.classList.add("open");drawer.setAttribute("aria-hidden","false")};
document.getElementById("closeCart").onclick=()=>{drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true")};
drawer.addEventListener("click",e=>{if(e.target===drawer)document.getElementById("closeCart").click()});
renderProducts();renderCart();