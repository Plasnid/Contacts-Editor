app.controller('ContactsController',function($scope, contactData){
  init();
  function init(){
    contactData.getContacts().success(function(data, status){
      $scope.contacts = data;
      contactData.contacts = angular.copy(data);
      $scope.initialDataLoad = true;
    });
    $scope.$watch('contacts', function(){
      console.log("there is a change in the data");
      /*if(contactData.contacts !== $scope.contacts){
        console.log("we have a change");
        console.log($scope.contacts);
        $scope.updateDataFile();
      }else{*/
        //console.log("there us a no change. leave it be");
      /*}*/
    },true);
  }
  $scope.updateDataFile = function(){
    //call the factory to reach out to the php to update the json
    contactData.updateContacts($scope.contacts).success(function(data){
      console.log("we are good");
    });
  };
  $scope.order = {
    field: 'lastName',
    reverse: false
  };
  $scope.makeList = function(){
    console.log("lets make a list");
    $('#contacts .item').addClass('list-group-item');
  };
  $scope.makeGrid = function(){
    console.log("lets make a grid");
    $('#contacts .item').removeClass('list-group-item');
  };
  $scope.toggleEditor = function(evt){
    let selectedElement = angular.element(evt.currentTarget).parent().children('.editor');
    if(selectedElement.css("display") == "block"){
      console.log("I am visible");
      selectedElement.css("display","none");
    }else{
      selectedElement.css("display","block");
    }
  };
  $scope.toggleNewEntry = function(evt){
    let selectedElement = angular.element(evt.currentTarget).parent().parent().children('.newEntry');
    if(selectedElement.css("display") == "block"){
      console.log("I am visible");
      selectedElement.css("display","none");
    }else{
      selectedElement.css("display","block");
    }
  }
  $scope.addContact = function(newContact){
    newContact.id = $scope.contacts.length+1;
    console.log(newContact);
    console.log($scope.contacts);
    $scope.contacts.push(newContact);
    $scope.reset();
  }
  $scope.reset = function(){
    console.log("I should reset the form");
    $scope.newContact = null;
    for(let i in $scope.newContact){
      $scope.newContact[i]="";
    }
    $scope.newContactForm.$setPristine();
    $scope.newContactForm.$setValidity();
    $scope.newContactForm.$setUntouched();
  };

  $scope.reverseOrder = false;

  $scope.dynamicOrder = function(contact){
    var order = 0;
    order = contact[$scope.order.field];
    return order;
  }
});
