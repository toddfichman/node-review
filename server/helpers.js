//Let's first add in our headers. These will allow Cross-Origin resource
//sharing (CORS)
//It allows the server to talk to websites that are on different domains
//like our to do list file://node-review/todolist.html

//another way to get around this restriction is if
//we server our client from this domain by setting
//up static file server which we'll go through

//TALK ABOUT WHAT THESE ARE
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};

module.exports = {
  sendResponse: (res, data, statusCode) => {
    statusCode = statusCode || 200;
    res.writeHead(statusCode, headers);
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
