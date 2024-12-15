function scrollLeft() {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({
        top: 0,
        left: -300, 
        behavior: 'smooth'
    });
}

function scrollRight() {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({
        top: 0,
        left: 300, 
        behavior: 'smooth'
    });
}