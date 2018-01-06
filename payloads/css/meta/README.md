# <code>meta</code>
## What is <code>meta</code>?
<code>meta</code>data is information that controls how a page behaves, such as how often it refreshes or how search engines will find it.
### What does <code>meta-a.css</code> do?
<code>meta.css</code> uses a <code>meta</code> tag to remotely run a JavaScript script that brings up an <code>XSS</code> <code>alert()</code>.
### What does <code>meta-b.css</code> do?
<code>meta-b.css</code> is similar to <code>meta-a.css</code>, but uses a slightly different technique. A JavaScript script that brings up an <code>XSS</code> <code>alert()</code> will be run if vulnerable.
### What does <code>meta-base64.css</code> do?
<code>meta-base64.css</code> encodes a JavaScript script in Base64. It will bring up an <code>XSS</code> <code>alert()</code> if vulnerable.
### What does <code>meta-double-url.css</code> do?
<code>meta-double-url.css</code> puts <code>URL=</code> twice to confuse filters. It will bring up an <code>XSS</code> <code>alert()</code> if vulnerable.
