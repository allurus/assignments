/*(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    //Call the function to get the Shopping List items from the service
    toBuy.shoppingList = ShoppingListCheckOffService.getShoppingListItems();
    toBuy.buyItem = function(index){
    ShoppingListCheckOffService.itemBought(index);
    toBuy.errorMessage = ShoppingListCheckOffService.ErrorMessage1;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
      alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughItems();
      alreadyBought.errorMessage = function (){
        return ShoppingListCheckOffService.getErrorMessage2();
      };

  }

  function ShoppingListCheckOffService(){
    var Service = this;
    Service.ErrorMessage2 ="Nothing bought yet";
    var items = [{Name: 'Cookies', Quantity:10},
                {Name: 'Bananas', Quantity:5},
                {Name: 'Games', Quantity:2},
                {Name: 'Plates', Quantity:50},
                {Name: 'bowls', Quantity:50},
                {Name: 'spoons', Quantity:100}];

    var items2=[];

    Service.getShoppingListItems = function(){
      return items;
    };

    Service.itemBought = function(index){
      items2.push(items[index]);
      items.splice(index, 1);
      if (items.length<1 ){
        //throw error
        Service.ErrorMessage1="Everything is bought!";
      }
      else{
        Service.ErrorMessage1="";
      }
      Service.ErrorMessage2="";
    };



    Service.getAlreadyBoughItems = function(){
        return items2;
    };

    Service.getErrorMessage2 = function(){
      if (items2.length<1){
        return "Nothing Bought Yet";
      }
      else{
        return "";
      }
    };

  }

})();
*/
!function(){"use strict";function e(e){var t=this;t.shoppingList=e.getShoppingListItems(),t.buyItem=function(r){e.itemBought(r),t.errorMessage=e.ErrorMessage1}}function t(e){var t=this;t.items=e.getAlreadyBoughItems(),t.errorMessage=function(){return e.getErrorMessage2()}}function r(){var e=this;e.ErrorMessage2="Nothing bought yet";var t=[{Name:"Cookies",Quantity:10},{Name:"Bananas",Quantity:5},{Name:"Games",Quantity:2},{Name:"Plates",Quantity:50},{Name:"bowls",Quantity:50},{Name:"spoons",Quantity:100}],r=[];e.getShoppingListItems=function(){return t},e.itemBought=function(n){r.push(t[n]),t.splice(n,1),t.length<1?e.ErrorMessage1="Everything is bought!":e.ErrorMessage1="",e.ErrorMessage2=""},e.getAlreadyBoughItems=function(){return r},e.getErrorMessage2=function(){return r.length<1?"Nothing Bought Yet":""}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",e).controller("AlreadyBoughtController",t).service("ShoppingListCheckOffService",r),e.$inject=["ShoppingListCheckOffService"],t.$inject=["ShoppingListCheckOffService"]}();
