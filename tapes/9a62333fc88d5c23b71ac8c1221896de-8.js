var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7280us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3349us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOgN2wGPVDhm69GOqOhxwSSz5A9lkiKL89xKnUaWmlSKV4QQHzyv0wGHGWOYp4BBb6uKYsYq9s0Pqpn7tT8ssL8pSq9zxInfElVeOI4LhQChyC2BAYTY/Ix22NEGPKXHLXlxNnaPxsu1pdEMdYt1306lV55qdr7sN21Df9Jv9nAWKwzRl2HkWsEHquzh1LiktRfQY8RRxvmpquoEwkn9IZYoWIIDDkgv9CrKSRSXVQhZwB2l8BSVqF/xfVJ5XRVkVYmFA/k7d799GGlZnSyStduWy4NYtgRcWNdcgLbd2bRE9eIsmmwKOqR7nPyWvnclzobjzArlaI3GDpLgCWWqvwWjhryQ/YdxSi7F2Nxi2fXqQsBtoEoshNDV5lujt+H+x0twu9pr61sI+TglZ7CM2z+T6wU9fUsyOnwAAAP//AwB+ZyaFqgIAAA==", "base64"));
  res.end();

  return __filename;
};
