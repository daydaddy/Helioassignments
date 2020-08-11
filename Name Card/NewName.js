function changeName(){
    let inputName = document.getElementById("username")
    let badgeName = document.getElementById("badgeName")
    badgeName.innerHTML = inputName.value
}