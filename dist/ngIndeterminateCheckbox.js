angular.module('ngIndeterminateCheckbox', [])
  .directive('indeterminateCheckbox', function () {
    return {
      link: function (scope, element, attrs) {
        var node = scope.$eval(attrs.node);
        var nodes = scope.$eval(attrs.nodes);
        var treeview = scope.$eval(attrs.treeview);
        var subtree = attrs.subtree || 'items';
        var collection = scope.$eval(attrs.selectedNodes) || [];
        
        if (treeview) {
          element.on('change', function () {
            scope.$apply(function () {
              selectTreeNodes(node);
            })
          })
        } else {
          element.on('change', function () {
            scope.$apply(function () {
              selectNodes(node);
            })
          })      
        }
  
        
        scope.$watch(attrs.nodes, function (newValue) {
          if (newValue && newValue.length > 0) {
            var all = true,
              some = false;
              
            angular.forEach(newValue, function (val) {
              if (!val.checked) {
                all = false;
              }  
              if (val.checked || val.indeterminate) {
                some = true;
              }
            });
            
            if (all) {
              node.checked = true;
              node.indeterminate = false;
              element.prop('indeterminate', false);
            } else {
              node.checked = false;
              node.indeterminate = some;
              element.prop('indeterminate', some);
            }
            
            selectNode(node);
          }
        }, true);
       
        
      function selectTreeNodes(item) {
        var isChecked = item.checked;
        selectNode(item);
            
      	angular.forEach(item[subtree], function(child) {
          child.checked = isChecked;
          selectTreeNodes(child);
        });
      }  
        
      function selectNodes(item) {
        var isChecked = item.checked;
        selectNode(item);
        
      	angular.forEach(nodes, function(child) {
          child.checked = isChecked;
          selectNode(child);
        });
      }  
        
      function selectNode(item) {
          var index = collection.indexOf(item);
            
          if (item.checked) {
            index === -1 && collection.push(item);
          } else {
            index > -1 && collection.splice(index, 1);
          }
        }
      }
    }
  })
