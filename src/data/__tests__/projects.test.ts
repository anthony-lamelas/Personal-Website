import { existsSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import { projects } from '../projects';

// Site-absolute asset paths ("/images/foo.png") are served from public/
const publicPath = (assetPath: string) => path.resolve(process.cwd(), 'public', `.${assetPath}`);

const isHttpsUrl = (value: string) => {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('has unique ids', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe.each(projects)('$id', (project) => {
    it('has a URL-safe id', () => {
      expect(project.id).toMatch(/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/);
    });

    it('has the required text fields filled in', () => {
      expect(project.title.trim()).not.toBe('');
      expect(project.shortDescription.trim()).not.toBe('');
      expect(project.description.trim()).not.toBe('');
      expect(project.role.trim()).not.toBe('');
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.features.length).toBeGreaterThan(0);
    });

    it('has a GitHub link that points at a GitHub repository', () => {
      if (project.github === undefined) return;
      expect(project.github).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/);
    });

    it('has a valid https demo link', () => {
      if (project.demo === undefined) return;
      expect(isHttpsUrl(project.demo)).toBe(true);
    });

    it('references images that exist in public/', () => {
      const assets = [project.image, ...project.screenshots].filter((asset) => asset.startsWith('/'));
      const missing = assets.filter((asset) => !existsSync(publicPath(asset)));
      expect(missing).toEqual([]);
    });
  });
});
