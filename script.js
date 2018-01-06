// When payload is submitted
function selectPayload() {

  var file = document.getElementById("file").files[0];
  if (file) {
    
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      
      // Initializes payload
      var submittedURL = document.getElementById("url").innerHTML
      payload = evt.target.result;
      var urlWithPayload = submittedURL.replace("*", payload);
      document.getElementById("selectedPayload").innerHTML = "Payload submitted!";
        
      // Creates 'Launch Payload!' link 
      var a = document.createElement('a');
      var linkText = document.createTextNode("Launch Payload!");
      a.appendChild(linkText);
      a.title = "Launch Payload!";
      a.href = urlWithPayload;
      document.body.appendChild(a); 
        
      }
      reader.onerror = function (evt) {
        document.getElementById("selectedPayload").innerHTML = "Error reading file";
    }
    
  }

}

// When URL is submitted
function selectURL() {

  // Creates vars
  var errors = [];
  var urlToSubmit = document.getElementById("urlInput").value;

  // Checks for vars
  if ( !urlToSubmit.includes("http://") && !urlToSubmit.includes("https://") ) {

    errors.push('missing HTTP or HTTPS in URL');

  }

  if ( !urlToSubmit.includes("*") ) {

    errors.push('missing * in place of query');

  }

  // Renders errors
  if (errors.length) {

    urlToSubmit = 'Error: ' + errors.join(', ') + '!';

  }

  // Updates submitted URL
  document.getElementById("url").innerHTML = urlToSubmit;

}
