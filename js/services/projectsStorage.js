/**
 * Projects Persistent Storage Service
 * 
 * Provides modular persistence for student-authored Data Science projects.
 * Uses browser localStorage for client-side persistence with clean error handling.
 * 
 * NOTE: Storage is scoped to the current browser profile on this machine.
 * It persists across page refreshes and browser sessions, but does NOT automatically
 * sync across external devices or other users. The architecture is modular so a 
 * backend database or REST API can easily replace this client adapter.
 */

const STORAGE_KEY = 'mbu_ds_digital_library_projects_v1';

export const projectsStorage = {
  /**
   * Retrieve all saved projects
   * @returns {Array} List of project objects (empty array if none exist)
   */
  getProjects() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      if (!serialized) {
        return [];
      }
      const parsed = JSON.parse(serialized);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error('[ProjectsStorage] Failed to read from localStorage:', err);
      return [];
    }
  },

  /**
   * Retrieve a single project by unique ID
   * @param {string} id 
   * @returns {Object|null}
   */
  getProjectById(id) {
    const list = this.getProjects();
    return list.find(p => p.id === id) || null;
  },

  /**
   * Create or update a project
   * @param {Object} projectData 
   * @returns {Object} Saved project
   */
  saveProject(projectData) {
    const list = this.getProjects();
    const now = new Date().toISOString();

    if (projectData.id) {
      // Update existing project
      const index = list.findIndex(p => p.id === projectData.id);
      if (index !== -1) {
        list[index] = {
          ...list[index],
          ...projectData,
          updatedAt: now
        };
        this._write(list);
        return list[index];
      }
    }

    // Insert new project
    const newProject = {
      ...projectData,
      id: projectData.id || `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      status: projectData.status || 'published',
      createdAt: now,
      updatedAt: now
    };

    list.unshift(newProject);
    this._write(list);
    return newProject;
  },

  /**
   * Delete a project by ID
   * @param {string} id 
   * @returns {boolean} True if deleted
   */
  deleteProject(id) {
    const list = this.getProjects();
    const filtered = list.filter(p => p.id !== id);
    if (filtered.length !== list.length) {
      this._write(filtered);
      return true;
    }
    return false;
  },

  /**
   * Internal helper to commit changes to localStorage
   */
  _write(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      console.error('[ProjectsStorage] Failed to save to localStorage:', err);
      throw err;
    }
  }
};
