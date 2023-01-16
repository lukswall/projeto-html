document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    if(lua.style.display == 'block'){
        lua.style.display = 'none'
        sol.style.display = 'block'
    }
    else{
        lua.style.display = 'block'
        sol.style.display = 'none'
    }
})