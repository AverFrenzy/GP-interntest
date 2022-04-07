import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddInputs } from './AddInputs';

describe('AddInputs', () => {
  it('render Items List', () => {
    const { getByRole } = render(<AddInputs />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(getByRole('listitem')).toBeInTheDocument();
    const input = getByRole('textbox', { name: 'input №1' });
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'Spaghetti');
    expect(input).toHaveValue('Spaghetti');
  });
});
