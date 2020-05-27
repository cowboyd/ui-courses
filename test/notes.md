# Notes on automated UI tests


## Tools

Mike Taylor [14:42]
I believe we use NightmareJS for some UI tests and BigTest for others. Correct? Do we have any other alternatives in use?

Mark Deutsch [14:45]
correct. but really aint nothing stopping you from using something else.

Mike Taylor [14:47]
Yep.

Zak Burke [15:09]
At present, NightmareJS for integration tests, and most unit tests use BigTest. Both are somewhat outdated. The UI testing group is in the midst of regrouping to consider the best path forward. If you were to consider something other than Nightmare, I would suggest cypress.io or webdriver.io. If you were to consider something other than BigTest, I would suggest Jest and react-testing-library.
Jest and react-testing-library in particular have emerged as react community standards, at least to some extent.

Mike Taylor [15:19]
Thank you. this is very helpful.


## Mocking tapes

I remember Anton thought Pact was the solution to the universe.

In fact the mod-graphql test suite uses this approach. (edited) 

It uses Flickr’s YakBak library: https://github.com/flickr/yakbak (edited) 

It works pretty well, but the API is a bit too magical for my tastes, so that every time I have to do anything with it I need to go back and re-read the documentation to remember how it does what it does.

It’s not really too bad at all, I just don’t do it often enough to remember I guess:
https://github.com/folio-org/mod-graphql/blob/master/doc/recording-tests.md


## Dashboards

https://sonarcloud.io/organizations/folio-org/projects

https://wiki.folio.org/pages/viewpage.action?spaceKey=DQA&title=FOLIO+Quality+Dashboard

