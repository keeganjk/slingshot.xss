# <code>script</code>
## What is <code>script</code>?
<code>script</code> is a tag that enables JavaScript. However, most XSS filters block the <code>script</code> tag.
### What does <code>src.js</code> do?
<code>src.js</code> uses a sourced JavaScript file on another site. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>direct.js</code> do?
<code>direct.js</code> runs code directly from the script, instead of sourcing it. <code>XSS</code> should appear on the screen if vulnerable.
### What does <code>na-nd-a.js</code> do?
<code>na-nd-a.js</code> is Non-Alpha-Non-Digit XSS. It assumes that you are using a whitespace when you actually put <code>/XSS</code>. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>na-nd-b.js</code> do?
<code>na-nd-a.js</code> is similar to <code>na-nd-a.js</code>. It uses Non-Alpha-Non-Digit XSS. It assumes that you are using a whitespace when you actually put <code>/XSS</code>. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>extraneous-open-brackets.js</code> do?
<code>extraneous-open-brackets.js</code> uses an extra bracket in the HTML tag to confuse filters. An <code>XSS</code> <code>alert()</code> will appear if vulnerable.
### What does <code>no-closing-tag.js</code> do?
<code>no-closing-tag.js</code> uses no closing <code>script</code> tag. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>protocol-resolution.js</code> do?
<code>protocol-resolution.js</code> uses protocol resolution to trick filter. A message from [xss.rocks](https://xss.rocks "xss.rocks") should override the page if vulnerable.
### What does <code>esc-js-esc.js</code> do?
<code>esc-js-esc.js</code> escapes possible interfering <code>script</code>s with a closing <code>/script</code>. An <code>XSS</code> <code>alert()</code> should appear if vulnerable.
### What does <code>close-title.js</code> do?
<code>close-title.js</code> escapes possible interfering <code>title</code>s with a closing <code>/title</code> and can encapsulate attack. An <code>XSS</code> <code>alert()</code> should appear if vulnerable.
### What do <code>quote-encapsulation</code>s</code>-a-g</code> do?
<code>quote-encapsulation</code>s</code>-a-g</code> encapsulate parts of HTML tags in quotes. The higher the letter, the more comlex. They all result in an <code>XSS</code> <code>alert()</code> from [xss.rocks](https://xss.rocks "xss.rocks") if vulnerable.
