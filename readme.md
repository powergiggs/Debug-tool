# PG Debug Utility Tool

## Installation

``npm install debugging-tool``

## Usage
debugging-tool can be use in replace of console.log
to create streams of logs to the console in a color and dynamic
way with recognize notification colors
example use

```
const util = require('debugging-tool');

util.debug('title', message, 'status');

```

note also the environment variable must be set

``DEBUG=true``

### Version Bump
Version bump accept 2 arguments, the Version
and a type argument to increment the Version,
then return a version number as a string.

Using Version Bump:
```
const util = require('debugging-tool');
const patch = util.bumpIt('3.3.3', 'patch');
const minor = util.bumpIt('3.3.3', 'minor');
const major = util.bumpIt('3.3.3', 'major');
```
