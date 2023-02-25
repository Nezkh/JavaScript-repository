const alertaBtn = document.getElementById("btn")

console.log(alertaBtn)

alertaBtn.addEventListener("click", () =>{
    alert("click en el botón") 
})

$("#btn").click(() =>{
    console.log("estoy usando Jquery")
})