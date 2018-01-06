# <code>iframe</code>
## What is <code>iframe</code>?
<code>iframe</code> is an HTML tag that creates "virtualizations" of webpages or scripts.
### What does <code>iframe-src.js</code> do?
<code>iframe-src.js</code> sources an <code>iframe</code> to a JavaScript script that will cause an <code>XSS</code> <code>alert()</code> if vulnerable.
### What does <code>iframe-onmouseover.js</code> do?
<code>iframe-onmouseover.js</code> will attempt to display a seemingly random cookie when the mouse goes over the <code>iframe</code>.
### What does <code>double-open-lt.js</code> do?
<code>double-open-lt.js</code> uses two <code><</code>s, but never closes <code>iframe</code>. An <code>XSS</code> <code>alert()</code> from [xss.rocks](https://xss.rocks "xss.rocks") should appear if vulnerable.
