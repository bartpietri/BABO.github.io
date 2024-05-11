document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validation des identifiants - À remplacer par une validation côté serveur dans une application réelle
    if (username === "admin" && password === "admin") {
        // Redirection vers la page de discussion
        window.location.href = "../accueil/accueil.html";
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
});