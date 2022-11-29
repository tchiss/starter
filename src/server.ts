import 'dotenv/config';
import App from './app';
import validateEnv from './utils/validateEnv';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import AuthRoute from './routes/auth.route';
import ProjectsRoute from './routes/projects.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new ProjectsRoute(),
]);

app.listen();
