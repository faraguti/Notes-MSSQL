function darkmode(){
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark")
    var theme;
    if(SetTheme.classList.contains("dark")){
        console.log("Dark mode");
        theme = "DARK";
        document.getElementById("mybtn").textContent = "ON";
        document.getElementById("mybtn").style.backgroundColor = "black";
        document.getElementById("mybtn").style.color = "white";

    }else{
        var SetTheme = document.body;
        SetTheme.classList.toggle("light")
        var theme;
        console.log("Light mode");
        theme = "LIGHT";
        document.getElementById("mybtn").textContent = "OFF";
        document.getElementById("mybtn").style.backgroundColor = "white";
        document.getElementById("mybtn").style.color = "black";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(GetTheme);
    if(GetTheme === "DARK"){
        document.body.classList = "dark";
    }else{
        document.body.classList = "light";
    }
}, 5);
