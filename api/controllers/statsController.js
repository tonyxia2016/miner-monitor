const Stats = require('../lib/stats');

let instance = {};

function getStats(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  if (!instance) {
    return res.send({entries: [], dashboardData: []});
  }

  res.send(JSON.stringify(instance.getStats()));
}

function restartInterval() {
  init();
}

function init() {
  instance = new Stats();
}

setTimeout(init, 2000);

exports.getStats = getStats;
exports.restartInterval = restartInterval;
