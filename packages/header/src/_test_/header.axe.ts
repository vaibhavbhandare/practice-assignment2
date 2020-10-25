import { OrxeHeader } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-header-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Header;

  beforeEach(async () => {
    OrxeHeader;
    document.body.appendChild(document.createElement('Header'));
    Header = document.querySelector('Header') as OrxeHeader;
  });

  afterEach(() => {
    Header.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Header);
    expect(result).toHaveNoViolations();
  });
});
