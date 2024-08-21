document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire pour le moment

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const meal = document.getElementById('meal').value;
    const quantity = document.getElementById('quantity').value;
    const date = document.getElementById('date').value;

    // Valider les champs (ici on peut ajouter des validations supplémentaires si nécessaire)
    if (name && email && phone && address && meal && quantity && date) {
        alert(`Merci ${name}, votre commande pour ${quantity} ${meal}(s) a été reçue et sera livrée le ${date}.`);
    } else {
        alert('Veuillez remplir tous les champs avant de soumettre le formulaire.');
    }
});
