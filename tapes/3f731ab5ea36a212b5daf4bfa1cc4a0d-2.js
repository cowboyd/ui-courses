var path = require("path");

/**
 * GET /coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 202 15362us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 200 16276us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bOBC991cIvm6ZkBRJkb4l7QIbbJst0PS06GFIjhLtypJBy0GDIv99R5ZtKc7HOpvNQQg0fI/zRjPz/PNdls2qOMvm2UwXCp0qPNMhRqZsYZhXRcGULkuhNGin3ex9D2hggRvIGaR4C+nvzCfEWDXXQzziKqRq2VVtszl2dYNZgIQZNDErh5NZW2bd2q/rKmLTQYerHXYJqVvQu4shLaGNsUoEpkVApqIKDIA7xhGk8Jw7ruAQ+of/C0PXw39SYJR4NNdU5K9EepN9DRU2YZvlExovmlCvN8Kusa3b67v32RK7tPl3o3sJNWDbdJs3O5YFdhChgzFVehkSUj3iR3psqCWXnPGCSXvF83mu57k6yTX/hdPflohQ62V8DiXEnNt5Lk9kkT+NOr/7tsK0rTjm3gZTaOZDwZn2YJnluWfelx4g8ujBzTYE9/S839Q+tOu0wk/VqqMSbHlccDogcGaUzpmSKJiPJjIOPHBnYuG9mj1GP/fxjqYjSMJrIkuwk5TOzgUXuyj+6DA1UG+DPx4E6zZA/1W3wTJEowLdZZzTNBUlZ1ZxZNaVJUhpbV48gh4qGDW8gm3agp+harJPlSdBd2M4tHEI//7t9MOH048Xp5/HYLU6C111uznQpTWOgYaq3K0nEikB5DwAAy0sU1455pELxk1uIwcFQReTW2GxXK+2UCNDWRhfsBCA9MQ8Z06KgmEslSSdYJUdofWgYIvVsbDUV8gCcNVfSwkgIJPB5N5JRcn4EbtM1YKwXzHdVgG/tFWzKfAsB8WtlrSwXEmPWEoGonTMoDRKgEEnypFlNYFfxFXP8OeRHNn3oeW335o6aLFrEVcIKZ1ikue0LlVZ0LwYw6QwgE7zIE2YTWAvtMfxTNP2uEpVU3V3WT/yE60dLa6DdUDMZjyBzeG6oKv47IHOYTSv7pa4m2qhFVfWs9w4248h7VBNzRPKgL7kCrnbj+EIfl7zK/immi8a2q9pRdt3HztcyZdt1jZ11ZD5tItl25AxPNTWj0Jah65NQ3rbfjjM0OZBOmMEQyFkP7SBFo8lE9HcuyIXlKl/IsPfqrruTe8ca1oM4wEPaT+5QuZKTyf6DVv0WUN52VLIHJSba3linHhoDiPu9fYw4XjZmJ6/+23WNJgTPbPv/9Frh+RUcSKsO3DNN5fl34vy5L3/r1tfrhce0/BDbu+AtCJDP0GX+994NS5vhtDjCh5RP3sipJnqeGv1jqjd4zvfUrn7d/f/AAAA//8DAAI+oiwoCwAA", "base64"));
  res.end();

  return __filename;
};
