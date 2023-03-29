const status = {
  accounts: 23524524,
  characters: 2452424562465,
  online: 13453,
  online24: 42345,
};

const ranking = [
  {
    name: "Harzus",
    lvl: 120,
  },
  {
    name: "Tangram",
    lvl: 120,
  },
  {
    name: "Lynce",
    lvl: 120,
  },
  {
    name: "Haruz",
    lvl: 120,
  },
  {
    name: "Pumbo",
    lvl: 120,
  },
  {
    name: "DreadPool",
    lvl: 120,
  },
  {
    name: "Meydi",
    lvl: 120,
  },
  {
    name: "Dezpp",
    lvl: 120,
  },
  {
    name: "Heeth",
    lvl: 120,
  },
  {
    name: "jDfw",
    lvl: 120,
  },
];

export const getStatusData = () => {
  return status;
};

export const getTop5Data = () => {
  return ranking.slice(0, 5);
};
