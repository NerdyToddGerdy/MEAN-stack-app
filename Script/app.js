console.log('app.js is up and running');

const app = angular.module('FoodApp', []);
const myURL = 'http://localhost:3000'

app.controller('FoodController', ['$http','$scope', function($http, $scope){
  const controller = this;
  this.limitToNumber = -12;
  this.modalData = {};
  this.showDetails = true;
  this.showModal = (food) => {
    this.modalData = food;
  }

// GET all the foods
  this.getFoods = function(){
    $http({
      method: 'GET',
      url: myURL + '/foods'
    }).then(
      function(response){
        controller.foods = response.data;
        console.log(controller.foods);
      }
    )
  }
this.getFoods();


// GET one food
this.getOneFood = function(food){
  $http({
    method: 'GET',
    url: myURL + '/foods/' + food._id
  }).then(
    function(response){
      controller.modalData = response.data;
      console.log(controller.modalData);
    }
  )
}

// POST a new food
this.createFood = () => {
  this.newItem.showDetails = false;
  this.newItem.updatedTime = Date.now();
  $http({
    method: 'POST',
    url: myURL + '/foods/',
    data:  this.newItem
  }).then(response => {
    console.log(response);
    controller.getFoods();
  }, ()=>{
    console.log('error');
  });
}


// PUT a food
this.updateFood = () => {
  console.log('start update');
  this.updated.showDetails = false;
  this.updated.updatedTime = Date.now();
  $http({
    method: 'PUT',
    url: myURL + '/foods/' + this.modalData._id,
    data:  this.updated
  }).then(response => {
    console.log(response);
    controller.getFoods();
    controller.getOneFood(this.modalData._id)
  }, () => {
    console.log('error');
  });
}

// DELETE the selected item
this.deleteFood = (thisItem) => {
  $http({
    method: 'DELETE',
    url: myURL + '/foods/' + thisItem._id
  }).then(response => {
    console.log(response);
    controller.getFoods();
  }, () => {
    console.log('error');
  });
}
}]);
