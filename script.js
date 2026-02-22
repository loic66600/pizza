const orderForm = document.getElementById('orderForm');
const orderMessage = document.getElementById('orderMessage');

if (orderForm && orderMessage) {
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!orderForm.checkValidity()) {
            orderMessage.textContent = 'Merci de compléter tous les champs obligatoires avant l\'envoi.';
            orderMessage.classList.remove('success');
            orderMessage.classList.add('error');
            orderForm.reportValidity();
            return;
        }

        const customerName = document.getElementById('customerName')?.value?.trim();
        const pizzaChoice = document.getElementById('pizzaChoice')?.value;
        const pizzaQty = document.getElementById('pizzaQty')?.value;

        orderMessage.textContent = `Commande envoyée ✅ Merci ${customerName}, ${pizzaQty} x ${pizzaChoice}. Nous vous rappelons rapidement pour confirmation.`;
        orderMessage.classList.remove('error');
        orderMessage.classList.add('success');

        orderForm.reset();
    });
}
