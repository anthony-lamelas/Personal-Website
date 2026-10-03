import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProjectDetail from '../ProjectDetail';
import { projects } from '../../data/projects';

// Render through a route so useParams() resolves the project id
const renderProject = (id: string) => {
  return render(
    <MemoryRouter initialEntries={[`/projects/${id}`]}>
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProjectDetail Page', () => {
  it.each(projects)('renders $id', (project) => {
    renderProject(project.id);

    expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeInTheDocument();
  });

  it.each(projects)('links to the code for $id only when it has a GitHub link', (project) => {
    renderProject(project.id);

    const codeLink = screen.queryByRole('link', { name: 'View Code' });
    if (project.github) {
      expect(codeLink).toHaveAttribute('href', project.github);
    } else {
      expect(codeLink).not.toBeInTheDocument();
    }
  });

  it.each(projects)('links to the demo for $id only when it has a demo link', (project) => {
    renderProject(project.id);

    const demoLinks = screen
      .queryAllByRole('link')
      .filter((link) => link.getAttribute('href') === project.demo);
    if (project.demo) {
      expect(demoLinks.length).toBeGreaterThan(0);
    } else {
      expect(screen.queryByRole('link', { name: 'Live Demo' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'View Paper' })).not.toBeInTheDocument();
    }
  });

  it('shows a not-found message for an unknown project id', () => {
    renderProject('does-not-exist');

    expect(screen.getByText('Project Not Found')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to Projects' })).toHaveAttribute('href', '/projects');
  });
});
