// Animações e interatividade simples para a linha do tempo

window.addEventListener('scroll', function() {
    let timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        let itemPosition = item.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (itemPosition < screenPosition) {
            item.classList.add('active');
        }
    });
});
