import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card', () => {
  it('renders the correct card content', () => {
    render(<Card />);
    expect(screen.getByText(/Shift the overall look and feel/i)).toBeDefined();
    expect(
      screen.getByText(
        /Ever been in a room and felt like something was missing?/i
      )
    ).toBeDefined();
  });

  it('renders the Profile component by default', () => {
    render(<Card />);
    expect(screen.getByText('Michelle Appleton')).toBeDefined();
    expect(screen.getByText('28 Jun 2020')).toBeDefined();
  });

  it('toggles between Profile and ActiveSection when share button is clicked', async () => {
    render(<Card />);
    let shareButton = screen.getByLabelText('Share');

    // Initially, Profile should be visible
    expect(screen.getByText('Michelle Appleton')).toBeDefined();

    // Click share button
    await userEvent.click(shareButton);

    // Now, ActiveSection should be visible
    expect(screen.getByLabelText('Share on Facebook')).toBeDefined();
    expect(screen.getByLabelText('Share on Twitter')).toBeDefined();
    expect(screen.getByLabelText('Share on Pinterest')).toBeDefined();

    // After toggle state, find the button labeled Share again
    shareButton = screen.getByLabelText('Share');

    // Click share button again
    await userEvent.click(shareButton);

    // Profile should be visible again
    expect(screen.getByText('Michelle Appleton')).toBeDefined();
  });
});
