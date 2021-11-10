console.log("hello world")

let app = document.body.querySelector(".app")
app.innerHTML = "Enable audio and wait, please :)"

function clearText() {
    app.innerHTML = ""
}
setTimeout(clearText, 3000);