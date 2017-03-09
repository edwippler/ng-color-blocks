colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory) {
  console.log("settings controller running");
  var self = this;
  self.colors = DataFactory.optionalColors;

  self.addColor = function(color){
    console.log(color, 'was clicked');
  }
}]);
