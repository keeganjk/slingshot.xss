# Comment
## What is a comment?
A comment is a part of a program that isn't read by the program... In most cases. So XSS filters usually ignore them.
### What does <code>dl-hidden-block.js</code> do?
<code>dl-hidden-block.js</code> can run code in a comment in some browsers. An <code>alert()</code> saying <code>XSS</code> will appear if vulnerable.
