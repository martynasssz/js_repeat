//IFFE function invokes automatically

/*

//Basic structure

(function(){
   //Declare private variables an functions

   return {
      // Declare public variables and functions
   } 
})();

*/

/*
//STANDARD MODULE PATTERN
const UICtrl = (function() {
   let text = 'Hello world';

   const changeText = function() {
      const element = document.querySelector('h1');
      element.textContent = text;
   }

   return {
      callChangeText : function() {
         changeText();
         //console.log(text);
      }
   }
})();

UICtrl.callChangeText();

console.log(UICtrl.text);
*/

//REVEALING MODULE PATERN
const ItemCtrl = (function() {
   let data = [];

   function add(item) {
      data.push(item);
      console.log('Item Added...');
   }

   function get(id) {
      return data.find(item => {
         return item.id === id;
      });
   }

   return {
      add: add,
      get: get
   }
})();

ItemCtrl.add({id:1, name:'Martin'});
ItemCtrl.add({id:2, name:'Tom'});
console.log(ItemCtrl.get(2));
   
