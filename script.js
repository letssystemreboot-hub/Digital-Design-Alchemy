function flipCard(){
document.getElementById("card").classList.toggle("flipped")
}

async function drawCard(){

const challenge = document.getElementById("challenge").value

const response = await fetch("/api/oracle",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
challenge:challenge
})
})

const data = await response.json()

document.getElementById("insight").innerText =
data.insight
}
