// read seals json file and get all urls
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'seals.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

// insert all images declared on seals.json on seals list
loadJSON(function(response) {
  jsonresponse = JSON.parse(response);
    Object.keys(jsonresponse).forEach(function(key) {
      document.getElementById('seals-div').innerHTML += '<label><input type="radio" name="watermene" value="'+jsonresponse[key]+'" checked disabled><img src="'+jsonresponse[key]+'" alt="01"></label>';
    });
});