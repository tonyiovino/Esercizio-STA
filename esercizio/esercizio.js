var modal = document.getElementById("login");

window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}

function validate(){
  var username = getElementById("username");
  var password = getElementById("password");
  
  if(username.value == null){
    alert("Username non inserito!");
    return false;
  }
  
  if(password.value == null){
    alert("Password non inserita!");
    return false;
  }
}