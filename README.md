# slingshot.xss

<pre>
<b>
                        \\ (*) //   _____        ___         ____     _____          ____  _____
                         ::, `::   /     \ |      |  |\   | /    \   /     \ |    | /    \   |
                          \\ //    \_____  |      |  | \  | |   _,   \_____  |____| |    |   |
                           |||           \ |      |  |  \ | |    |         \ |    | |    |   |
                           |||     \_____/ L____ _|_ |   \| \____/   \_____/ |    | \____/   |
                           |||
</b>
</pre>

### Supported platforms:
> <h5>Any OS with a modern web browser</h5>
### Supported browsers:
> <h5>Firefox</h5>
> <h5>Google Chrome</h5>

## What is it?
Slingshot.XSS is a script that allows users to enter a URL, select a payload, and launch it at a website! This tool allows people to test websites for XSS vulnerabilities in GET requests.
## What is an XSS vulnerability?
An XSS (Cross-Site Scripting) vulnerability is a vulnerability in a webpage that allows an attacker to type code into an <code>input</code> box and then the site will become confused and actually run the script. There are two types of XSS vulnerabilities: stored and refletive XSS. Stored XSS saves the code into the server so anyone who visits a page will have code ran on them. This can sometimes be found in social media platforms. Reflective XSS reflects code back at the target and often uses GET requests. This can attack someone by sending a link to a victim, who will have code executed on their device upon clicking on it.
> ## Download and Install
> ### 1. Download
> Firstly, on any OS, you would navigate to https://github.com/keeganjk/slingshot.xss. Once on this page, click the button that says "Clone or Download" and then "Download as ZIP".
> <br />
> ![Clone or Download](https://github.com/keeganjk/slingshot.xss/blob/master/images/clone-download.gif?raw=true "")
> <br />
> If you are on Unix (Linux, macOS, or BSD), you can type <code>git clone https://github.com/keeganjk/slingshot.xss</code> into the terminal to 
> clone this repository and then <code>mv</code> into the directory.
> ### 2. Extract files
> Nextly, extract the ZIP file and then move into the <code>slingshot.xss</code> folder.

<hr>

> ## How to use it
> ### 1a. Open 'index.htm'
> Open <code>index.htm</code> with any web modern browser.
> <br />
> ![Clicking on index.htm](https://github.com/keeganjk/smokescreen/blob/master/images/index.GIF?raw=true "") 
> ### 1b. Enable JavaScript
> After opening <code>index.htm</code>, you have to enable JavaScript (for <code>index.htm</code>).
> This will be different in every browser, but it is usually in Settings.
> JavaScript will most likely be enabled, but make sure that it is.
> ### 2. Enter a URL (with <code>*</code> in the place of query)
> To test for an XSS vulnerability, you need to enter a URL with <code>*</code> in the place of query.
> If you don't know how to get the query, go to your site and search something. You should see what you searched at the end of the URL. Replace it with <code>*</code> and then copy the URL. (If you see a bunch of other characters after your query, they can usually be removed.)
> ![Getting the query](https://github.com/keeganjk/slingshot.xss/blob/master/images/url.gif?raw=true "") 
> ### 3a. Selecting a payload
> To test for an XSS vulnerability, you need a payload. Default payloads are located in the <code>payloads/</code> directory included in <code>slingshot.xss</code>.
> To select a payload, click on the <code>Choose File</code> button and select a payload. To submit your payload, click <code>Submit</code>.
> It should then say <code>Payload submitted!</code>.
> [Payload Help](https://github.com/keeganjk/slingshot.xss/tree/master/payloads "Payload Help")
> ### 3b. Launching the payload
> After submitting your payload, a link that says <code>Launch Payload!</code> should appear.

<hr>

> ## XSSing other people
> If you found an XSS vulnerability and you're like me, you probably want to run some code on your friends (or enemies). Here's how:
> ### 1. Shorten the link with payload
> Copy the link from <code>Launch Payload!</code> if the XSS attack wa successful.
> HINT: If your target is not using the same browser that the payload worked with, the attack may not work.
> Shorten your link in a URL shortener like [Bitly](https://bit.ly "Bitly") or my personal favorite, [Grabify](https://grabify.link "Grabify"), which will also get IPs and other target info.
> <i>Why would I want to shorten the URL?</i>
> Shortening the URL both disguises it (<code>goo.gl/12345</code> is a lot less suspiscous than <code>https://vulnerable.site/<script>document.cookie(); alert("j0uV3 /bin pwned!");</script></code>!!) and some services, such as Gmail, will automatically turn scripts from links into normal text.
> ### 2. Share the shortened URL!
> Next, share your XSS link through social media, email, chat, etc.!

XSS script launcher to test for vulnerabilities
## Credits:
<b>[OWASP XSS Filter Evasion Cheatsheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet "OWASP XSS Filter Evasion Cheatsheet")</b>: Most XSS payloads came from here. <br />
<b>[mattulm/offense](github.com/mattulm/offense "github.com/mattulm/offense")</b>: Provides alert text for some payloads <br />
<b>[Redox01 Theme](https://www.toptal.com/designers/subtlepatterns/redox-01/ "Redox01 Theme")</b>, Hendrik Lammers. <br />
<b>[Muli Font](https://fonts.google.com/specimen/Muli "Muli Font")</b>, Vernon Adams.
