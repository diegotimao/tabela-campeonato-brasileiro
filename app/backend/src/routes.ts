import * as express from 'express';
import TeamsController from './controller/teamsController';
import UserService from './services/userService';
import UserController from './controller/userController';
import User from './database/models/user';
import AuthToken from './utils/authToken';
import TeamService from './services/teamServices';
import Teams from './database/models/teams';
import MatchesController from './controller/matchesController';
import MatchesServices from './services/matcheServices';
import Matches from './database/models/matches';
import LeadBoardController from './controller/leadBoardController';
import LeadBoardServices from './services/leadBoardServices';

const auth = new AuthToken();
const userController = new UserController(new UserService(User, auth));
const teamsController = new TeamsController(new TeamService(Teams));
const matchesController = new MatchesController(new MatchesServices(Matches));
const leadBoardController = new LeadBoardController(new LeadBoardServices(Teams));

const routes = express.Router();

routes.post('/login', (req, res, next) => userController.login(req, res, next));
routes.get('/login/validate', (req, res, next) => userController.validate(req, res, next));
routes.get('/teams', (req, res, next) => teamsController.getAll(req, res, next));
routes.get('/teams/:id', (req, res, next) => teamsController.getOne(req, res, next));
routes.post('/matches', (req, res, next) => matchesController.createMatches(req, res, next));
routes.get('/matches', (req, res, next) => matchesController.getMatches(req, res, next));
routes.patch('/matches/:id/finish', (req, res, next) =>
  matchesController.updatedMatches(req, res, next));
routes.patch('/matches/:id', (req, res, next) =>
  matchesController.updatedMatchesGoals(req, res, next));
routes.get('/leaderboard/home', (req, res, next) =>
  leadBoardController.getLeadBoardHome(req, res, next));
routes.get('/leaderboard/away', (req, res, next) =>
  leadBoardController.getLeadBoardAway(req, res, next));
export default routes;
