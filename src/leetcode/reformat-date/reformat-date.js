/**
 * Leetcode #1507
 * Difficulty: Easy
 * https://leetcode.com/problems/reformat-date/
 */
/**
 * @param {string} date
 * @return {string}
 */
export const reformatDate = function (date) {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };

  const [day, month, year] = date.split(' ');
  let parsedDay = parseInt(day);
  parsedDay = parsedDay > 9 ? parsedDay : `0${parsedDay}`;

  return `${year}-${months[month]}-${parsedDay}`;
};
