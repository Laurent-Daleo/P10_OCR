export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// date.getMonth compte à partir de 0 pour janvier => donc pour correspondre au tableau MONTHS on fais + 1
export const getMonth = (date) => MONTHS[date.getMonth() + 1];