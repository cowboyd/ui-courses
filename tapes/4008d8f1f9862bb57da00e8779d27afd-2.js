var path = require("path");

/**
 * GET /coursereserves/courselistings/2fd794bc-b36a-4b38-9c84-14e8685f87fe
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:31:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courselistings/2fd794bc-b36a-4b38-9c84-14e8685f87fe : 202 6061us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courselistings/2fd794bc-b36a-4b38-9c84-14e8685f87fe : 200 10903us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQduWCV/iw7s8NkabtkCTVZEFNRwWLGzJoOggRpB/L2VbrmsghauFFro8M3OHV68XVVVHX1ezqubBaytbIK1QjshWGGLBSMIkGmWaYHTA+uMIJPwZh5xcmu/I4fqGUbbT8CVj6txiL70cSYseXI59t5cCeCUBGVHWNkSaQImRFImxITjOjRH6BPza/kLII/xaPv+Z/OxKBencErfQvYtd9Tm2xcZmEqH3O/HT49Xt7dXd/Op+kuJwDTk+b+Wc1jh97oYc8/rIVmmMlIIjrmGmrFFa0iJlhCphPHXSQaMP/dxytR72oOIQtGo1AXDFhReCWM40QR8kL+6ckWYCF7u592TjtTFUIAFH5diyNEeHhIMSreWyDNJO5CrFZSG/Y3qOgN/62G0XWgsnqWm4J9KG8vKBE8eCJQq5kswptCxMNYYjeO6Hkf9xZoXqqZR4295qyclyioLVjHMrCadCEymDJoYqRThTDm1DgSuoD9C7MTi3ynEMHlLsYt5UnHJ68Jddyncu706MCil75WrSsfMnamlC64Mz6NdpwIfNCvf+LGsklaYlQtmSCY5Q0lEiAgGwDVQitbI+Qd9zeXatY5fzrlphGvpuUjwOkOJqzO32wJe+6rtF7LCCfrnqOyyxOPgZQ57WkPu0G2p/409bcYnZeZfd0aSQsKzndEe6XMQDpTNBZ426pIJ/oOU5/Ao75mbzWNI1/UooPWguSeOAkyY4XXItS6mGNUryFkwrJn698v/qyWaUXzIt/uq5Z/6/57iZi7ffAAAA//8=", "base64"));
  res.write(new Buffer("AwAi7B4mPQUAAA==", "base64"));
  res.end();

  return __filename;
};