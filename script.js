function flipCard(){
document.getElementById("card").classList.toggle("flipped")
}

async function drawCard(){

const challenge = document.getElementById("challenge").value

const response = await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_OPENAI_KEY_HERE"
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"system",
content:"You are the Digital Design Alchemy oracle. Speak like a wise design mentor giving mystical UX insights."
},
{
role:"user",
content:challenge
}
]
})
})

const data = await response.json()

document.getElementById("insight").innerText =
data.choices[0].message.content
}
