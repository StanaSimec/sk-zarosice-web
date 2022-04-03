import { TEAMS } from "../constants/constants";

const DEFAULT_YEAR = 2022;
const DEAFULT_HOUR = 10;
const DEFAULT_MINUTE = 15;

const getDate = ({
  year = DEFAULT_YEAR,
  month,
  day,
  hour = DEAFULT_HOUR,
  minute = DEFAULT_MINUTE,
}) => {
  return new Date(year, month - 1, day, hour, minute);
};

export const MATCH_PLAN = {
  A_TEAM: [
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.BUKOVANY,
      date: getDate({ month: 3, day: 20 }),
    },
    {
      homeTeam: TEAMS.ZERAVICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 3, day: 27, hour: 14, minute: 0 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.LIPOV,
      date: getDate({ month: 4, day: 3 }),
    },
    {
      homeTeam: TEAMS.RATISKOVICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 4, day: 10, hour: 15, minute: 30 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.DAMBORICE,
      date: getDate({ month: 4, day: 17 }),
    },
    {
      homeTeam: TEAMS.DOLNI_BOJANOVICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 4, day: 24, hour: 16, minute: 0 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.PETROV,
      date: getDate({ month: 5, day: 1 }),
    },
    {
      homeTeam: TEAMS.HOVORANY,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 5, day: 8, hour: 16, minute: 30 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.VLKOS,
      date: getDate({ month: 5, day: 15 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.KEN_VESELI,
      date: getDate({ month: 5, day: 22 }),
    },
    {
      homeTeam: TEAMS.ST_PODVOROV,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 5, day: 29, hour: 17, minute: 0 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.HR_LHOTA_B,
      date: getDate({ month: 6, day: 5 }),
    },
    {
      homeTeam: TEAMS.KNEZDUB,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 6, day: 12, hour: 16, minute: 30 }),
    },
  ],
  U19: [
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.TEMICE_PISEK,
      date: getDate({ month: 4, day: 3, hour: 13 }),
    },
    {
      homeTeam: TEAMS.KOSTELEC,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 4, day: 10, hour: 13 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.MILOTICE,
      date: getDate({ month: 4, day: 24, hour: 13, minute: 45 }),
    },
    {
      homeTeam: TEAMS.KOBYLI_BORETICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 5, day: 1, hour: 14, minute: 0 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.VNOROVY,
      date: getDate({ month: 5, day: 8, hour: 14 }),
    },
    {
      homeTeam: TEAMS.CEJKOVICE_HOVORANY,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 5, day: 14, hour: 14 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.CHARVATSKA,
      date: getDate({ month: 5, day: 22, hour: 15, minute: 30 }),
    },
    {
      homeTeam: TEAMS.BUKOVANY,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 5, day: 29, hour: 13, minute: 30 }),
    },
    {
      homeTeam: TEAMS.BRUMOVICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 6, day: 5, hour: 14, minute: 45 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.RATISKOVICE,
      date: getDate({ month: 6, day: 12, hour: 14, minute: 45 }),
    },
  ],
  U15: [
    {
      homeTeam: TEAMS.PETROV,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 4, day: 10, hour: 12, minute: 30 }),
    },
    {
      homeTeam: TEAMS.MILOTICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 4, day: 16, hour: 13, minute: 30 }),
    },
    {
      homeTeam: TEAMS.CEJC_HOVORANY,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 4, day: 23, minute: 0 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.PISEK_ZERAVICE,
      date: getDate({ month: 5, day: 1, hour: 13 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.CEJC_HOVORANY,
      date: getDate({ month: 5, day: 10, hour: 17, minute: 30 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.PETROV,
      date: getDate({ month: 5, day: 15, hour: 13, minute: 15 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.MILOTICE,
      date: getDate({ month: 5, day: 22, hour: 13, minute: 15 }),
    },
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.CEJC_HOVORANY,
      date: getDate({ month: 5, day: 29, minute: 0 }),
    },
    {
      homeTeam: TEAMS.PISEK_ZERAVICE,
      awayTeam: TEAMS.ZAROSICE,
      date: getDate({ month: 6, day: 4, hour: 14, minute: 30 }),
    },
  ],
};

export const FRIENDLY_MATCHES = {
  A_TEAM: [
    {
      homeTeam: TEAMS.ZAROSICE,
      awayTeam: TEAMS.BOLERADICE,
      date: new Date(2022, 3 - 1, 13, 12, 0),
      place: "UT Dambořice",
    },
  ],
};
