    class QuoteAnimator {
    constructor() {
    this.words = document.getElementsByTagName('span');
    this.cite = document.getElementsByTagName('cite');
    this.animate();
}

    animate() {
    let maxDelay = 0;
    let maxDuration = 0;

    for (let i = 0; i < this.words.length; i++) {
    const word = this.words[i];
    const duration = parseFloat(word.dataset.duration);
    const delay = parseFloat(word.dataset.delay);
    const blur = word.dataset.blur;

    maxDelay = Math.max(delay, maxDelay);
    maxDuration = Math.max(duration, maxDuration);

    gsap.set(word, { filter: `blur(${blur}px)`, opacity: 0 });
    gsap.to(word, { opacity: 1, filter: "blur(0px)", duration, delay, ease: "power2.inOut" });
}

    gsap.to(this.cite, { opacity: 1, duration: maxDuration, delay: maxDelay });

    gsap.delayedCall(maxDuration + maxDelay + 3, () => {
    gsap.to([...this.words, ...this.cite], { opacity: 0, duration: 1 });
    gsap.delayedCall(4, () => this.animate());
});
}
}

    new QuoteAnimator();
