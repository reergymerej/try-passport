# Try Passport

http://www.passportjs.org/docs/

It is middleware.

uses https://github.com/senchalabs/connect#readme

Not just for Express, but works really well with it.



Unknown authentication strategy "local"
> Strategies must be configured prior to using them in a route.


How to set up a strategy
  http://www.passportjs.org/docs/configure/
  Add strategy package.
  const LocalStrategy = require('passport-local').Strategy

  http://www.passportjs.org/packages/passport-local/

  Bad Request
    This is because we did not provide a failure redirect.
