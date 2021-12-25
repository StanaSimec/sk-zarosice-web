import { TEAMS } from "./constants";

export const RESULTS = {
  A_TEAM: [
    {
      round: 1,
      date: new Date('2021-10-31'),
      homeTeam: TEAMS.BUKOVANY,
      homeScore: 2,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 1,
    },
    {
      round: 13,
      date: new Date('2021-10-24'),
      homeTeam: TEAMS.ZAROSICE,
      homeScore: 2,
      awayTeam: TEAMS.KNEZDUB,
      awayScore: 0,
    },
    {
      round: 12,
      date: new Date('2021-10-16'),
      homeTeam: TEAMS.HR_LHOTA_B,
      homeScore: 1,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 4,
    },
    {
      round: 11,
      date: new Date('2021-10-10'),
      homeTeam: TEAMS.ZAROSICE,
      homeScore: 3,
      awayTeam: TEAMS.ST_PODVOROV,
      awayScore: 2,
    },
    {
      round: 10,
      date: new Date('2021-10-03'),
      homeTeam: TEAMS.KEN_VESELI,
      homeScore: 1,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 0,
    },
    {
      round: 9,
      date: new Date('2021-09-26'),
      homeTeam: TEAMS.VLKOS,
      homeScore: 6,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 2,
    },
    {
      round: 8,
      date: new Date('2021-09-19'),
      homeTeam: TEAMS.ZAROSICE,
      homeScore: 2,
      awayTeam: TEAMS.HOVORANY,
      awayScore: 0,
    },
    {
      round: 7,
      date: new Date('2021-09-12'),
      homeTeam: TEAMS.PETROV,
      homeScore: 1,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 1,
    },
    {
      round: 6,
      date: new Date('2021-09-05'),
      homeTeam: TEAMS.ZAROSICE,
      homeScore: 1,
      awayTeam: TEAMS.DOLNI_BOJANOVICE,
      awayScore: 4,
    },
    {
      round: 5,
      date: new Date('2021-08-29'),
      homeTeam: TEAMS.DAMBORICE,
      homeScore: 5,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 1,
    },
    {
      round: 4,
      date: new Date('2021-08-22'),
      homeTeam: TEAMS.ZAROSICE,
      homeScore: 0,
      awayTeam: TEAMS.RATISKOVICE,
      awayScore: 5,
    },
    {
      round: 3,
      date: new Date('2021-08-15'),
      homeTeam: TEAMS.LIPOV,
      homeScore: 2,
      awayTeam: TEAMS.ZAROSICE,
      awayScore: 0,
    },
    {
      round: 2,
      date: new Date('2021-08-08'),
      homeTeam: TEAMS.ZAROSICE,
      homeScore: 4,
      awayTeam: TEAMS.ZERAVICE,
      awayScore: 0,
    },
  ],
};

const CURRENT_MATCHES = 13;

export const POINTS = {
  A_TEAM: [
    {
      team: TEAMS.RATISKOVICE,
      points: 36,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.ST_PODVOROV,
      points: 31,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.VLKOS,
      points: 29,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.KNEZDUB,
      points: 17,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.PETROV,
      points: 17,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.BUKOVANY,
      points: 17,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.DOLNI_BOJANOVICE,
      points: 16,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.DAMBORICE,
      points: 16,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.HR_LHOTA_B,
      points: 16,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.ZAROSICE,
      points: 16,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.KEN_VESELI,
      points: 15,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.LIPOV,
      points: 15,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.ZERAVICE,
      points: 9,
      matches: CURRENT_MATCHES,
    },
    {
      team: TEAMS.HOVORANY,
      points: 6,
      matches: CURRENT_MATCHES,
    },
  ],
};
