const canvas = document.getElementById("bg")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.5

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.fillStyle="#3aa6ff"
ctx.fillRect(p.x,p.y,p.size,p.size)

p.y+=p.speed

if(p.y>canvas.height){
p.y=0
}

})

requestAnimationFrame(animate)

}

animate()


const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

})

document.querySelectorAll(".card").forEach(el => {
observer.observe(el)
})


async function loadLeaderboard(){

/*
Replace this later with your API call

const res = await fetch("YOUR API")
const data = await res.json()
*/

const data = [

{name:"Me",score:3200},
{name:"MeAgain",score:3000},
{name:"Mee3",score:2900},
{name:"Four",score:2700},
{name:"Five",score:2500},
{name:"You get the point...",score:2300},
{name:"X",score:2100},
{name:"",score:2000},
{name:"",score:1800},
{name:"",score:1700},
{name:"",score:1600},
{name:"",score:1500},
{name:"",score:1400},
{name:"",score:1300},
{name:"",score:1200},
{name:"",score:1100},
{name:"",score:1000},
{name:"",score:900},
{name:"",score:800},
{name:"",score:700}

]


// podium
document.getElementById("rank1-name").textContent=data[0].name
document.getElementById("rank1-score").textContent=data[0].score+" pts"

document.getElementById("rank2-name").textContent=data[1].name
document.getElementById("rank2-score").textContent=data[1].score+" pts"

document.getElementById("rank3-name").textContent=data[2].name
document.getElementById("rank3-score").textContent=data[2].score+" pts"


const list=document.getElementById("leaderboardList")

data.slice(3).forEach((player,i)=>{

const rank=i+4

const row=document.createElement("div")
row.className="lb-row"

if(rank>10){
row.classList.add("hidden","extra")
}

row.innerHTML=`

<div class="lb-rank">#${rank}</div>
<div class="lb-name">${player.name}</div>
<div class="lb-score">${player.score}</div>

`

list.appendChild(row)

})

}

loadLeaderboard()


const expandBtn = document.getElementById("expandLeaderboard")
const collapseBtn = document.getElementById("collapseLeaderboard")


expandBtn.onclick = () => {

document.querySelectorAll(".extra").forEach(el=>{
el.classList.remove("hidden")
})

expandBtn.style.display="none"
collapseBtn.style.display="block"

}


collapseBtn.onclick = () => {

document.querySelectorAll(".extra").forEach(el=>{
el.classList.add("hidden")
})

collapseBtn.style.display="none"
expandBtn.style.display="block"

}

const glow = document.querySelector(".cursor-glow")

document.addEventListener("mousemove", e => {

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})

const progress = document.querySelector(".scroll-progress")

window.addEventListener("scroll", () => {

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight

const scrolled =
(window.scrollY / height) * 100

progress.style.width = scrolled + "%"

})

