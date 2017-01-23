(function () {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective(){
    var ddo = {
    templateUrl: 'founItemsTemplate.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  console.log(ddo);
  return ddo;
  }


  NarrowItDownController.$inject =  ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService){
    var menuItems = this;

    menuItems.searchMenu = function(){
      var promise = MenuSearchService.getFullList();
      promise.then(function (response) {
        menuItems.list = MenuSearchService.getMatchedMenuItems(menuItems.searchTerm, response.data);
        //console.log(menuItems.list.length);
        if(!menuItems.list.length){
          menuItems.errorMessage = "Nothing found";
        }
      })
      .catch(function (error) {
        console.log("Something went terribly wrong."+error);
      });
    };

    menuItems.remove = function(index){
      menuItems.list = MenuSearchService.removeItem(menuItems.list, index);
    }

  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http){
    var menuService = this;
    menuService.getFullList = function (){
        var response = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
        });

        return response;
    };
    menuService.getMatchedMenuItems = function (searchTerm, fullList){
      var found = [];
      for (var i=0; i<fullList.menu_items.length; i++){
          if (fullList.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
            //console.log("Each Item is" + fullList.menu_items[i]);
            found.push(
              {
                short_name: fullList.menu_items[i].short_name,
                name: fullList.menu_items[i].name,
                description: fullList.menu_items[i].description
              }
            );
          }
      }
      //console.log(filteredList);
      return found;
    };

    menuService.removeItem = function (list, index){
      list.splice(index, 1);
      return list;
    };
  }

})();
