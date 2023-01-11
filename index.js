document.addEventListener("keypress",(event)=>{
    let h1=document.getElementById("h1");
    let h2=document.getElementById("h2");
    let p=document.getElementById("p");
    h1.innerHTML=" ";
    
    // console.log(event);
    let code=event.key;
    let keycode=event.keyCode;
    // h1.innerHTML=`you pressed ${code}`;
    h1.innerHTML=`You Pressed&nbsp<p class="pText">${code}</p>`

    let Codediv=document.getElementById("keycode");
    Codediv.innerHTML=event.keyCode;
    Codediv.classList.add("keyCodeStyle")

})
// function hello() {
//     // console.log("hello");
//     // console.log(event);
//     document.addEventListener("keypress",(event)=>{
//         console.log(event);
//     })
// }
// function hello() {
//     console.log("hello");
// }