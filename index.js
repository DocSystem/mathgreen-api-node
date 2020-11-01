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
          if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
            links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
          }
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
          if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
            links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
          }
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
          if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
            links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
          }
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
          if ($("a")[item]["children"] != undefined) if ($("a")[item]["children"][0] != undefined) if ($("a")[item]["children"][0]["data"] != undefined) if ($("a")[item]["children"][0]["data"].trim() != "") if ($("a")[item]["attribs"]["href"] != undefined) if ($("a")[item]["attribs"]["href"] != "http://creativecommons.org/licenses/by-nc-sa/4.0/") {
            links.push({"name": $("a")[item]["children"][0]["data"].trim(), "url": "http://mathgreen.fr/" + $("a")[item]["attribs"]["href"]});
          }
        }
        resolve(links);
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}
