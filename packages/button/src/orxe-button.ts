import { html, customElement } from 'lit-element';
import styles from './button-css';
import '@checkbox/singlecheckbox';
import '@checkbox/checkboxgroup';
import '@my-first-project/chip-group';
import { TranslationClass } from '@orxe-culture/lit';

@customElement('orxe-button')
export default class OrxeButton extends TranslationClass {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <h1>${this.t('orxe-button.title')}</h1>
      <h1>${this.t('orxe-button.custom')}</h1>
      <h1>${this.t('orxe-button.basic')}</h1>
      <h1>${this.t('orxe-button.grid-three')}</h1>
      <h1>${this.t('orxe-button.grid-four')}</h1>
      <h1>${this.t('orxe-button.grid-five')}</h1>
      <h1>${this.t('orxe-button.grid-six')}</h1>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   * <orxe-singlecheckbox></orxe-singlecheckbox>
      <orxe-checkboxgroup>
      <orxe-singlecheckbox></orxe-singlecheckbox>
      <orxe-singlecheckbox checkbox-state='checkbox-enable'
      name="checkbox-unselect" value="true" required>
       People 1
      </orxe-singlecheckbox>
      <orxe-singlecheckbox checkbox-state='checkbox-group' name="checkbox-unselect" value="true">
      People 3
      <span slot="data">$400</span>
     </orxe-singlecheckbox>
      </orxe-checkboxgroup>
      <orxe-chip-group>
      <orxe-chips chip-content="All reviews" chip-counter="8.2"></orxe-chips>
      <orxe-chips chip-content="Couples" chip-counter="6.2"></orxe-chips>
      </orxe-chip-group>
   */
  static styles = styles;
}
