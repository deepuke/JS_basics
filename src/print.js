import _ from "lodash";

let log = (date, importance, message) => {
  console.warn(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
};

log = _.curry(log);

export default log = _.curry(log);