
const validPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

function createPass() {
    let passChoice = "abfilmnqtvwABCNSUVZ124567890!@#$%^&*()_-+=";
    let pass = "";
    for (let index = 0; index < 13; index++) {
        let rand = Math.floor(Math.random() * (passChoice.length - 1));
        pass += passChoice[rand];
    }
    console.log(pass)
    if (validPass.test(pass) == true) {
        return pass
    } else {
        createPass();
    }
}


console.log(createPass());
