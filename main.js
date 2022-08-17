let request = new XMLHttpRequest();

let adviceId = document.getElementById("adv-num")
let advice = document.getElementById("advice")
let btn = document.getElementById("btn")
let x = 1


request.open("GET", `https://api.adviceslip.com/advice/${x}`)
request.send();

btn.addEventListener("click",() => {
  x++
  request.open("GET", `https://api.adviceslip.com/advice/${x}`)
  request.send();
})

request.onload = () => {
  if(request.status === 200){
    adviceId.innerText = `advice #${JSON.parse(request.response).slip.id}`
    advice.innerText = `"${JSON.parse(request.response).slip.advice}"`
  }
}

