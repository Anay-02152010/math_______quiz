function adduser(){
    player1_name=document.getElementById("player1_number_input").value;
    player2_name=document.getElementById("player2_number_input").value;
    localStorage.setItem("number1_score",player1_name);
    localStorage.setItem("number2_score",player2_name);
    window.location="game_page.html";
}