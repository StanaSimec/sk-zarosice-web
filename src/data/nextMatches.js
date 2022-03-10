import { TEAMS } from "../constants/constants";

export const NEXT_MATCH = {
  A_TEAM: {
    homeTeam: TEAMS.ZAROSICE,
    awayTeam: TEAMS.BUKOVANY,
    date: new Date(2022, 3 - 1, 20, 14, 0),
  },
  U19: {
    homeTeam: TEAMS.ZAROSICE,
    awayTeam: TEAMS.TEMICE_PISEK,
    date: new Date(2022, 4 - 1, 3, 13, 15),
  },
  U15: {
    homeTeam: TEAMS.PETROV,
    awayTeam: TEAMS.ZAROSICE,
    date: new Date(2022, 4 - 1, 10, 10, 0),
  },
};

export const FRIENDLY_MATCHES = {
  A_TEAM: [
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.KLOBOUKY,
      date: new Date(2022, 2 - 1, 19, 13, 0),
      place: "UT Dambořice",
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.NASEDLOVICE,
      date: new Date(2022, 2 - 1, 27, 12, 0),
      place: "UT Dambořice",
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.POZORICE,
      date: new Date(2022, 3 - 1, 5, 10, 0),
      place: "UT Otnice",
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.BOLERADICE,
      date: new Date(2022, 3 - 1, 13, 12, 0),
      place: "UT Dambořice",
    },
  ],
};
