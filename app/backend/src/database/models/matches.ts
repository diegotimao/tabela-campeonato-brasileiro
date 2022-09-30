import { DATE, Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';

class Matches extends Model {
  id?: number;
  homeTeam: number;
  homeTeamGols: number;
  awayTeam: number;
  awayGoals: number;
  inProgress: boolean;
  createdAt: Date;
  updatedAt: Date;
}

Matches.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGols: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: DATE,
    field: 'created_at',
  },
  updatedAt: {
    allowNull: false,
    type: DATE,
    field: 'updated_at',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

export default Matches;