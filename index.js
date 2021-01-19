const https = require('https');
const cheerio = require('cheerio');

exports.premiere = function() {
  return new Promise((resolve, reject) => {
    https.get('https://mathgreen.fr/Premiere.html', (resp) => {
      var data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var $ = cheerio.load(data);
        var links = [];
        for (var item in $("a")) {
          try {
            if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
              links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
            }
          } catch {}
        }
        resolve(links);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

exports.terminale = function() {
  return new Promise((resolve, reject) => {
    https.get('https://mathgreen.fr/Terminale.html', (resp) => {
      var data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var $ = cheerio.load(data);
        var links = [];
        for (var item in $("a")) {
          try {
            if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
              links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
            }
          } catch {}
        }
        resolve(links);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

exports.mathexp = function() {
  return new Promise((resolve, reject) => {
    https.get('https://mathgreen.fr/mathexp.html', (resp) => {
      var data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var $ = cheerio.load(data);
        var links = [];
        for (var item in $("a")) {
          try {
            if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
              links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
            }
          } catch {}
        }
        resolve(links);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

exports.nsi = function() {
  return new Promise((resolve, reject) => {
    https.get('https://mathgreen.fr/NSI.html', (resp) => {
      var data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var $ = cheerio.load(data);
        var links = [];
        for (var item in $("a")) {
          try {
            if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
              links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
            }
          } catch {}
        }
        resolve(links);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

exports.bcpst = function() {
  return new Promise((resolve, reject) => {
    https.get('https://mathgreen.fr/BCPST.html', (resp) => {
      var data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var $ = cheerio.load(data);
        var links = [];
        for (var item in $("a")) {
          try {
            if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
              links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
            }
          } catch {}
        }
        resolve(links);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

exports.home = function() {
  return new Promise((resolve, reject) => {
    https.get('https://mathgreen.fr/', (resp) => {
      var data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var $ = cheerio.load(data);
        var finaldata = {};
        finaldata["homework"] = {};
        for (var item in $("article.post")[1]["children"][0]["children"]) {
          if ($("article.post")[1]["children"][0]["children"][item].nodeName == "P") {
            finaldata["homework"]["premiere"] = $("article.post")[1]["children"][0]["children"][item]["data"];
          }
        }
        for (var item in $("article.post")[2]["children"][0]["children"]) {
          if ($("article.post")[2]["children"][0]["children"][item].nodeName == "P") {
            finaldata["homework"]["terminale"] = $("article.post")[2]["children"][0]["children"][item]["data"];
          }
        }
        var databylines = data.split("\n");
        finaldata["topmessage"] = databylines[0] + " " + databylines[1];
        finaldata["mathlinks"] = [];
        for (var item in $("section.sidebar a")) {
          if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
            finaldata["mathlinks"].push({"name": $("section.sidebar a")[item]["children"][0]["data"].trim(), "url": $("section.sidebar a")[item]["attribs"]["href"]})
          }
        }
        resolve(finaldata);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}
