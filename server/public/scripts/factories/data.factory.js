colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var optionalColors = ['khaki', 'indigo', 'lime', 'darkorange', 'crimson', 'cornflowerblue', 'yellow'];

return{
  colors: colors,
  optionalColors: optionalColors
};
}]);
