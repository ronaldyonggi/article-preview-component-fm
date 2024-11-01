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

  it('displays share options when share button is clicked', async () => {
    render(<Card />);
    
    // Find the share button
    const shareButton = screen.getByLabelText('Share');
    
    // Click the share button
    await userEvent.click(shareButton);
    
    // Check if social media icons are displayed
    expect(screen.getByLabelText('Share on Facebook')).toBeDefined();
    expect(screen.getByLabelText('Share on Twitter')).toBeDefined();
    expect(screen.getByLabelText('Share on Pinterest')).toBeDefined();
  });
});
