function highlight() {
    document.querySelectorAll('strong').forEach(element => {
        element.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    setTimeout(() => {
        document.querySelectorAll('strong').forEach(element => {
            element.style.color = 'rgb(0, 0, 0)';
        });
    }, 50);  // Small delay to ensure Cypress detects the change
}
