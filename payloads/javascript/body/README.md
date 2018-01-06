# <code>body</code>
## What is <code>body</code>?
### What does <code>na-nd.js</code> do?
<code>na-nd.js</code> is Non-Alpha-Non-Digit XSS. It assumes that you are using a whitespace when you actually put <code>!#$%&()*~+-_.,:;?@[/|\]^`</code>. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>onload.js</code> do?
<code>onload.js</code> runs a script when the page loads that will bring up an <code>XSS</code> alert if vulnerable.
### What does <code>bg.js</code> do?
<code>bg.js</code> runs a script in the background when the page loads that will bring up an <code>XSS</code> alert if vulnerable.
