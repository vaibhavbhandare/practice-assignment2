import { OrxeInput } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-input-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Input;

  beforeEach(async () => {
    OrxeInput;
    document.body.appendChild(document.createElement('Input'));
    Input = document.querySelector('Input') as OrxeInput;
  });

  afterEach(() => {
    Input.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Input);
    expect(result).toHaveNoViolations();
  });
});
