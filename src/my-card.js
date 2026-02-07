import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1531981666/fujiguide/SG010_6";
    this.alt = "Mount Fuji";
    this.title = "Mount Fuji";
    this.paragraph = "Standing at 3,776 meters, Mt. Fuji is the tallest peak in Japan, the result of volcanic activity that began approximately 100,000 years ago.";
    this.buttonText = "Details";
  }

  render() {
    return html`
      <div class="card">
        <div class="image">
          <img src="${this.image}" alt="${this.alt}">
        </div>

        <h3 class="heading">${this.title}</h3>

        <p class="paragraph">${this.paragraph}</p>

        <a href="https://hax.psu.edu">
          <button class="button">${this.buttonText}</button>
        </a>
      </div>

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      paragraph: { type: String },
      buttonText: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        width: 300px;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        margin: 25px;
        display: inline-block;
      }
      
      .image img {
        width: 300px;
        height: 200px;
        border-radius: 8px;
      }
      
      .heading {
        text-align: center;
        color: var(--my-card-title-color, black);
      }
      
      .paragraph {
        font-size: 16px;
        margin: 10px;
        text-align: left;
        color: var(--my-card-paragraph-color, black);
      }
      
      .button {
        display: none;
        background-color: blue;
        font-size: 18px;
        border: none;
        padding: 12px 10px;
        text-align: center;
        margin: 2px 10px 20px 30px;
        width: 80%;
        border-radius: 8px;
        color: var(--my-card-button-text-color, black);
      }
      
      @media (min-width: 500px) and (max-width: 800px) {
        .button {
          display: block;
        }
      }
      
      @media (max-width: 500px) {
        .card {
          width: 250px;
        }
        .image img {
          width: 250px;
          height: 150px;
        }
        .paragraph {
          font-size: 14px;
        }
      }
      
      .button:focus,
      .button:hover {
        background-color: black;
      }
      
      .bg-change {
        background-color: pink;
      }
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);