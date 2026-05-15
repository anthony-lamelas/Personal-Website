import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../Projects';
import { projects } from '../../data/projects';

// Wrap the component with BrowserRouter because it uses navigation/links
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Projects Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Projects />);
    
    // Check if the page title renders
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });

  it('renders at least one project', () => {
    renderWithRouter(<Projects />);
    
    // Check if the first project title is rendered
    // If the projects array is not empty, it should be in the document
    if (projects.length > 0) {
      expect(screen.getByText(projects[0].title)).toBeInTheDocument();
    }
  });
});
