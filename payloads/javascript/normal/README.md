# Normal
## What is "normal"?
The "normal" payloads are payloads that use no filter evasion or clever techniques. If successful, the site's security risk for XSS is high.
### What does <code>src.js</code> do?
<code>src.js</code> uses a sourced JavaScript file on another site. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>direct.js</code> do?
<code>direct.js</code> runs code directly from the script, instead of sourcing it. <code>XSS</code> should appear on the screen if vulnerable.
