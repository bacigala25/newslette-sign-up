const validate = () => {
    let email = document.getElementById("input-email").value
    
    if (email.length == 0){       
        document.querySelector(".wrong-email").classList.remove("hidden")
    }
    else if (!email.match(/[a-z]+@[a-z]+\.[a-z]+/)){        
        document.querySelector(".wrong-email").classList.remove("hidden")
    }
    else {
        subscribe()
    }
}
    


const subscribe = () => {
    document.querySelector(".card").classList.add("hidden")
    document.querySelector(".thanks-page").classList.remove("hidden")
}

