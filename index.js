//prompt to ask user for name
function askName() {
    let username = sessionStorage.getItem('username');

    if (username === null) {
        username = prompt("Give me a chance to make this seesion interactive, please enter your name.");
    }

    if (username !== null) {
        document.querySelector(".userpara").innerHTML = "Hello, " + username + '!';
        sessionStorage.setItem('username', username);
    } else {
        document.querySelector(".noUser").innerHTML = "Welcome, Stranger!";
    }
}

/* let bar = document.getElementById("bar");
bar.addEventListener('click', myFunction); */

//for side navigation bar
//var count = 0;

function openLoading() {
    document.getElementById("load").style.width = "100%";
    setTimeout(function closeLoading() {
        document.getElementById("load").style.width = "0";
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("bar").style.display = "none";
        document.getElementById("forinfo").style.display = "none";
    }, 1000);
}

function openNav() {
    //if (count === 0) {
    openLoading();
    //    count++;
    /*} else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("bar").style.display = "none";
        document.getElementById("forinfo").style.display = "none";
    }*/
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("bar").style.display = "block";
    document.getElementById("forinfo").style.display = "block";
}

function myFunction() {
    alert('Oops! It doesn\'t work');
}

/*
let test = document.getElementById("update");
test.addEventListener('click', myFunction);
*/

function updatesFunction() {
    // var x = document.lastModified;
    //document.getElementById("demopara").innerHTML = x;
    document.getElementById("updateform").style.display = "block";
    forDateUpdate();
}

function forDateUpdate() {
    var x = new Date(document.lastModified);
    const store = document.getElementById("date").innerHTML = x;
    p.appendChild(store);
}

function closeUpdateBtn(){
    document.getElementById("updateform").style.display = "none";
}
/*let fori = document.getElementById("forinfo");
fori.addEventListener('click', myFunction);*/

function ibtn() {
    document.getElementById("thebox").style.display = "block";
    /*const box = document.createElement("div");
    const para = document.createElement("p");
    box.appendChild(para);
    const node = document.createTextNode("This website has NO copyrights.");
    para.appendChild(node);
    const element = document.getElementById("thebox");
    element.appendChild(para);*/
}

function ibtnclose() {
    document.getElementById("thebox").style.display = "none";
}

let forChat = document.getElementById("chat");
forChat.addEventListener('click', myFunction);