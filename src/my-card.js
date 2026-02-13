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
    this.link = "https://hax.psu.edu";
    this.fancy = false;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
      <div class="card">
        <div class="image">
          <img src="${this.image}" alt="${this.alt}">
        </div>

        <h3 class="heading">
          <slot name="heading">${this.title}</slot>
        </h3>

        <div class="paragraph">
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.paragraph}</slot>
            </div>
          </details>
        </div>

        <a href=${this.link}>
          <button class="button">
            <slot name="button">${this.buttonText}</slot>
          </button>
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
      buttonText: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
      display: inline-block;
      }

      .card {
      width: 300px;
      background-color: white;
      border-radius: 16px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      margin: 25px;
      display: inline-block;
      height: 320px;
      overflow-y: scroll;
      }

      :host([fancy]) .card {
      background-color: pink;
      border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
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

      details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

      .details {
        max-height: 100px;
        overflow-y: scroll;
      }
      
      @media (min-width: 500px) and (max-width: 800px) {
      .button {
        display: inline-block;
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