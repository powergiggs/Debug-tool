* **Installation**

``npm install debugging-tool``

* **Usage**
debugging-tool can be use in replace of console.log
to create streams of logs written to a log file
example use

```
const debug = require('debugging-tool');

debug('Our Server is running on port', port, 'success!');


```

note also the environment variable must be set

``DEBUG=true``
