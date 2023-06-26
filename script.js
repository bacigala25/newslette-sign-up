const validate = () => {
    let email = document.getElementById("input-email").value
    
    if (email.length == 0){       
        document.querySelector(".wrong-email").classList.remove("hidden")
        document.querySelector("#input-email").style.borderColor = "rgba(255, 98, 87)"
        document.querySelector("#input-email").style.borderWidth = "2px";
        document.querySelector("#input-email").style.borderStyle = "solid";
        document.querySelector("#input-email").style.backgroundColor = "rgba(255, 98, 87, 0.15)"
       
    }
    else if (!email.match(/[a-z]+@[a-z]+\.[a-z]+/)){        
        document.querySelector(".wrong-email").classList.remove("hidden")
        document.querySelector("#input-email").style.borderColor = "rgba(255, 98, 87)"
        document.querySelector("#input-email").style.borderWidth = "2px";
        document.querySelector("#input-email").style.borderStyle = "solid";
        document.querySelector("#input-email").style.backgroundColor = "rgba(255, 98, 87, 0.15)"
       
    }
    else {
        document.querySelector("#input-email").style.backgroundColor = "initial";
        subscribe()
    }
}
    


const subscribe = () => {
    document.querySelector(".card").classList.add("hidden")
    document.querySelector(".thanks-page").classList.remove("hidden")
}

