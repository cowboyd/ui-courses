var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 7124us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 4648us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/4K5LUhOuDsGo9VO2To0o+p6nCGS2LJsZFNhijKfy9xGlVqWilSGU5w8D5CD+xvhMg8Bxrihrs4ZqIS72Kfuqnf+OMyU3lRlKiczJVjiR6dJAIrgUmrGsACUjY7RTra8BR6TMS1eHENd47H87bn0Q1NiE3fTacWnWu3vulWYsV92692MxE4DtNUUOdFoJa47+LUOVM2HMlTpCPidNXUdANTZP+QyoTWoEHCnTTqFUxl8grzubF4C2l8gVJqG/xfKaUrYyvEuQH4PXW/ext5WJws1YBlXTBJ1GUuc4tGlpArWReImpY5FhayCXBI9TD7KXnprFIapfM6MZbE0hKjRDBF6UuwpfYXkp8ornlDsXFXGK779CBhO/AklkJoG/Yipdfj/8WW6nqxl6lvLeLjSMhiH6l9ZtcPfvqS+ubwCQAA//8DAEVTmoCqAgAA", "base64"));
  res.end();

  return __filename;
};