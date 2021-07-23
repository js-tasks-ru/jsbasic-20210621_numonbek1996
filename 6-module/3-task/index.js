import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.product = product;
    this.render();
    this.addEventListeners();
  }
  render() {
    this.elem = createElement(`<div class="carousel__slide" data-id="penang-shrimp">
    <img src="/assets/images/carousel/${this.slides.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${this.slides.price.toFixed(2)}</span>
      <div class="carousel__title">${escapeHtml(this.slides.name)}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>`)}
  addEventListeners() {
    this.elem.onclick = (event) => this.onClick(event);
  }

  onClick(event) {
    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    }));
  }
}
