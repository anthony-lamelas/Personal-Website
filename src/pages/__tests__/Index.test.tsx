import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Index from '../Index';
import { projects } from '../../data/projects';

// Wrap the component with BrowserRouter because it uses navigation/links
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Index Page', () => {
  it('renders the coursework section', () => {
    renderWithRouter(<Index />);

    expect(screen.getByText('Relevant Coursework')).toBeInTheDocument();
    expect(screen.getByText('Data Structures & Algorithms')).toBeInTheDocument();
  });

  it('renders the first three projects as featured projects', () => {
    renderWithRouter(<Index />);

    for (const project of projects.slice(0, 3)) {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0);
    }
  });
});
