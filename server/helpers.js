module.exports = {
  sendResponse: (res, data, statusCode) => {
    statusCode = statusCode || 200;
    res.end(JSON.stringify(data));
  },
  parseData: (req, cb) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      cb(JSON.parse(data));
    });
  }
};
