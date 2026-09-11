const nav=document.querySelector("nav"),hamb=document.querySelector(".hamb");hamb.onclick=()=>nav.classList.toggle("open");document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));function demoApply(){const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3500)}
document.querySelectorAll(".actor-card").forEach(card=>{
 card.addEventListener("mousemove",e=>{
   if(innerWidth<800)return;
   const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   card.style.transform=`translateY(-10px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;
 });
 card.addEventListener("mouseleave",()=>card.style.transform="");
});
