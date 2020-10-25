import { html, customElement, LitElement, property } from 'lit-element';
import styles from './input-css';

@customElement('orxe-input')
export default class OrxeInput extends LitElement {

  /**
   *
   * @memberof OrxeInput
   * This property will set the prop1
   */
  @property({ type: Number, reflect: true, attribute: 'prop1' })
  prop1 = 0;

  /**
   *
   * @memberof OrxeInput
   * This property will set the prop2
   */
  @property({ type: Number, reflect: true, attribute: 'prop2' })
  prop2 = 0;

  constructor() {
    super();
    this.prop1 = 0;
    this.prop2 = 0;
  }

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <p>Prop 1 : ${this.prop1}</p>
      <p>Prop 2 : ${this.prop2}</p>
      <p>Hello, Welcome to lit Elements ${this.getTitle() } </p>
      <button @click="${ () => this.prop1 = this.change() }">Change Prop 1</button>
      <button @click="${ () => this.prop2 = this.change() }">Change Prop 2</button>
    `;
  }

  getTitle() {
    return 'In Client Development FrameWork'
  }

  change() {
    return Math.floor(Math.random()*10);
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
