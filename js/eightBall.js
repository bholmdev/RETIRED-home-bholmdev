function eightBall() {
    const randomNum = Math.floor(Math.random() * 21);
    console.log(randomNum);

    let name = prompt("What is your name?");
    if (name === null) {
        return;
    }
    let question = prompt(`Welcome, ${name} what is your question?`);
    if (question === null) {
        return;
    }
    let answer = "";

    switch(randomNum) {
        case 1:
            answer = "It is certain.";
            break;
        case 2:
            answer = "It is decidedly so.";
            break;
        case 3:
            answer = "Without a doubt.";
            break;
        case 4:
            answer = "Yes definitely.";
            break;
        case 5:
            answer = "You may rely on it.";
            break;
        case 6:
            answer = "As I see it, yes.";
            break;
        case 7:
            answer = "Most Likely.";
            break;
        case 8:
            answer = "Outlook good.";
            break;
        case 9:
            answer = "Yes.";
            break;
        case 10:
            answer = "Signs point to yes.";
            break;
        case 11:
            answer = "Reply Hazy, try again.";
            break;
        case 12:
            answer = "Ask again later.";
            break;
        case 13:
            answer = "Better not tell you now.";
            break;
        case 14:
            answer = "Cannot predict now.";
            break;
        case 15:
            answer = "Concentrate and ask again."
            break;
        case 16:
            answer = "Don't count on it.";
            break;
        case 17:
            answer = "My reply is no.";
            break;
        case 18:
            answer = "My sources say no.";
            break;
        case 19:
            answer = "Outlook not so good.";
            break;
        case 20:
            answer = "Very doubtful."
            break;
        default:
            answer = "I am Error!";
    }

if (name === "") {
    alert(`Question: ${question}`);
}
else {
    alert(`${name} asks: ${question}`);
}

if (question === "") {
    alert("The Magic 8-Ball cannot provide a fortune unless you ask it something.");
    restartGame();
}
else {
    alert(`Magic 8-Ball's answer: ${answer}`);
    restartGame();
}
}

function restartGame() {
    let restart = prompt(`Do you want to play again? Answer "yes" or "no"`).toLowerCase();
    
    if (restart === null) {
        return;
    }
    else if (restart === "yes" || restart === "y") {
        eightBall();
    }
    else if (restart === "no" || restart === "n") {
        alert("Have a great day!");
        return;
    }
    else {
        alert(`Please answer "yes" or "no".`);
        restartGame();
    }
}