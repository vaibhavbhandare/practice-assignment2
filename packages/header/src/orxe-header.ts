import { html, customElement, LitElement } from 'lit-element';
import styles from './header-css';

@customElement('orxe-header')
export default class OrxeHeader extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <p>Hello, Welcome to lit Elements ORXe header</p>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
