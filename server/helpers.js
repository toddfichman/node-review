//Let's first add in our headers. These will allow Cross-Origin resource
//sharing (CORS)
//It allows the server to talk to websites that are on different domains
//like our to do list file://node-review/todolist.html

//TALK ABOUT WHAT THESE ARE

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
