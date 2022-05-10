let myImg = document.createElement("img");
fetch('https://api.agify.io?name=meelad')
    .then((response) => {
        response.json();
    }).then((r) => {
        //myImg.src = response;
        console.log(r.age);
    }).catch(e => {
        console.log(e)
    });
//console.log(x);
document.getElementById("body").append(myImg);