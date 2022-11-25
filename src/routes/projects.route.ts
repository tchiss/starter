import { Router } from 'express';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { ProjectsDto } from '../dtos/projects.dto';
import ProjectsController from '../controllers/projects.controller';

class ProjectsRoute {
  public path = '/projects';
  public router = Router();
  public controller = new ProjectsController();

  constructor() {
    this.router.get(`${this.path}`, () => this.controller.getProjects);
    this.router.post(`${this.path}`, validationMiddleware(ProjectsDto), this.controller.postProject);
    // this.router.get(`${this.path}/:id`, this.controller.getProject);
    // this.router.put(`${this.path}/:id`, this.controller.updateProject);
    // this.router.delete(`${this.path}/:id`, () => this.controller.deleteProject);
  }
}

export default ProjectsRoute;
