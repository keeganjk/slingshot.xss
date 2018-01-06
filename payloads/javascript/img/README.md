# <code>IMG</code>
## What is <code>IMG</code>?
The HTML <code>IMG</code> tag is an HTML element that provides images for users. However, this can be linked to JavaScript or PHP.
### What does <code>img-src.js</code> do?
<code>img-src.js</code> sources an <code>IMG</code> tag to JavaScript. <code>XSS</code> will appear on screen if vulnerable.
### What does <code>img-src-case.js</code> do?
<code>img-src-case.js</code> is a variant of <code>img-src.js</code> that uses case sensitivities to its advantage. <code>XSS</code> will appear on screen if vulnerable.
### What does <code>img-src-no-quotes.js</code> do?
<code>img-src-no-quotes.js</code> is a variant of <code>img-src.js</code> that uses no quotes to its advantage. <code>XSS</code> will appear on screen if vulnerable.
### What does <code>img-src-backtick.js</code> do?
<code>img-src-backtick.js</code> is like <code>img-src.js</code>, but it uses backticks <code>`</code> instead of quotes, since many filters are unaware of backticks. <code>RSnake says, XSS</code> will appear if vulnerable.
<hr />

### What does <code>img-default-src.js</code> do?
<code>img-default-src.js</code> puts <code>#</code> as the source. If you hover the mouse over the link, it will <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
### What does <code>img-blank-src.js</code> do?
<code>img-blank-src.js</code> keeps the source blank. If you hover the mouse over the link, it will <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
### What does <code>img-no-src.js</code> do?
<code>img-no-src.js</code> uses no source. If you hover the mouse over the link, it will <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
<hr />

### What does <code>img-html-char-refs.js</code> do?
<code>img-html-char-refs.js</code> encodes the string <code>javascript:alert(
'XSS')</code>. Will <code>alert()</code> <code>XSS</code> to the screen if vulnerable.
### What does <code>img-html-char-refs-no-trailing-semicolons.js</code> do?
<code>img-html-char-refs-no-trailing-semicolons.js</code> incorrectly assumes that a semicolon is required, thus executing a script that will <code>alert()</code> <code>XSS</code> to the screen if vulnerable.
### What does <code>img-hex-no-trailing-semicolons.js</code> do?
<code>img-hex-no-trailing-semicolons.js</code> is the same as <code>img-html-char-refs-no-trailing-semicolons.js</code>, except it uses hexadecimals. It will execute a script that will <code>alert()</code> <code>XSS</code> to the screen if vulnerable.
### What does <code>img-meta-spaces-before-js.js</code> do?
<code>img-meta-spaces-before-js.js</code> puts meta characters and spaces before the JavaScript. An <code>XSS</code> <code>alert()</code> will appear if vulnerable.
<hr />

### What does <code>img-tab.js</code> do?
<code>img-tab.js</code> uses a tab to break up the code, confusing XSS filters. An <code>XSS</code> <code>alert()</code> will appear if vulnerable.
### What does <code>img-encoded-tab.js</code> do?
<code>img-encoded-tab.js</code> is the same as <code>img-tab.js</code>, except it encodes the tab. An <code>XSS</code> <code>alert()</code> will appear if vulnerable.
### What does <code>img-newline.js</code> do?
<code>img-newline.js</code> is like <code>img-tab.js</code>, but it uses a new line instead of a tab. An <code>XSS</code> <code>alert()</code> will appear if vulnerable.
### What does <code>img-cr.js</code> do?
<code>img-cr.js</code> is like <code>img-tab.js</code>, but it uses a Carriage Return. An <code>XSS</code> <code>alert()</code> will appear if vulnerable.
<hr />

### What does <code>img-onerror-alert.js</code> do?
<code>img-onerror-alert.js</code> uses <code>/</code> as the source, which will result in an error. However, it is set to bring up an <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
### What does <code>img-onerror-encoded.js</code> do?
<code>img-onerror-encoded.js</code> is intentionally malformed so when it has an error it runs an encoded message, which will read <code>XSS</code> if vulnerable.
<hr />

### What does <code>img-dynsrc.js</code> do?
<code>img-dynsrc.js</code> acts like it plays a video, but it actually runs a script that shows <code>XSS</code> if vulnerable.
### What does <code>img-lowsrc.js</code> do?
<code>img-lowsrc.js</code> acts like it will display a low-resolution image, but it actual runs a script that shows <code>XSS</code> if vulnerable.
<hr />

### What does <code>img-charcode.js</code> do?
<code>img-charcode.js</code> uses Character Code to spell out <code>XSS</code>. It will bring up an <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
### What does <code>img-half-open.js</code> do?
<code>img-half-open.js</code> doesn't close <code>IMG</code> tag. It will bring up an <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
### What does <code>img-malformed.js</code> do?
<code>img-malformed.js</code> uses a malformed image tag that shows <code>XSS</code> if vulnerable.
### What does <code>img-style.js</code> do?
<code>img-style.js</code> runs XSS through <code>img</code> <code>style</code>. It will bring up an <code>alert()</code> that says <code>XSS</code> if the site is vulnerable.
### What does <code>img-malformed.js</code> do?
