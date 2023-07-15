const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let userInput = document.querySelector(".date").value;
    let date = new Date(userInput);
    if (userInput == null || userInput == "") {
        document.querySelector(".message").innerHTML = "**Choose a date please!";
        return false;
    } else {
        let month_diff = Date.now() - date.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);

        return document.querySelector(".result").innerHTML = "Age is: " + age + "years."; 
    }
});