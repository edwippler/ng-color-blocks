colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var optionalColors = ['khaki', 'indigo', 'lime', 'darkorange', 'crimson', 'cornflowerblue', 'yellow'];

  var addColor = function(item){
    colors.push(item);
  }


return{
  colors: colors,
  optionalColors: optionalColors,
  add: addColor
};
}]);
