module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toString();
    },
    total_score: (score) => {
      // format large numbers with commas
      return parseInt(score).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
    },
  };