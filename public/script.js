const starContainer = document.getElementById('star-container');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.opacity = Math.random();
    starContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 100);