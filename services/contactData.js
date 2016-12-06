app.factory('contactData', function($http){
  var factory = {};
  factory.getContacts = function(){
    return $http.get('data/contact.json');
  };
  factory.updateContacts = function(jsonToSend){
    console.log("lets output a new json for php");
    console.log(jsonToSend);
    //var myData = $.param({
      //myData.contactsList = jsonToSend;
      //swedish:"bork bork"
    //});
    //return $http.post('php/contactWriter.php', myData);
    var contactData = $.param({swedish:"bork", contactsList:jsonToSend});
    $http({
    method: 'POST',
    url: 'php/contactWriter.php',
    data: {
      contactData:contactsList
    },
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
  }
  return factory;
});
