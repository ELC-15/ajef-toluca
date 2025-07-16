class Carousel {
    constructor(container) {
        this.container = container;
        this.images = container.querySelectorAll('img');
        this.prevButton = container.querySelector('.carousel-prev');
        this.nextButton = container.querySelector('.carousel-next');
        this.currentIndex = 0;
        this.intervalTime = 3000; // 3 seconds
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        if (this.images.length === 0) return;

        // Show the first image
        this.showImage(this.currentIndex);

        // Add event listeners
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.changeSlide(-1));
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.changeSlide(1));
        }

        // Start autoplay
        this.startAutoPlay();
    }

    showImage(index) {
        this.images.forEach(img => img.style.display = 'none');
        this.images[index].style.display = 'block';
        this.currentIndex = index;
    }

    changeSlide(direction) {
        const newIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        this.showImage(newIndex);
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.changeSlide(1);
        }, this.intervalTime);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.querySelector('.carrusel'));
});