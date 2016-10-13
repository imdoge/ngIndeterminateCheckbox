# ngIndeterminateCheckbox
angular indeterminate checkbox directive

## Use

```html
<input type="checkbox" 
       ng-model="vm.all.checked"
       indeterminate-checkbox
       node="vm.all"
       nodes="vm.list"
       [selectedNodes="vm.selectedNodes"]
       [treeview="true"]
       [subtree="items"]/>
```
see the [demo](http://plnkr.co/edit/YPM5xCfE5D758GmWZtxU?p=preview) here

## API

### Options
Option | Description | Data Type | Default
------ | ----------- | --------- | -------
node | Current node | Object | null 
nodes | Child nodes list | Array | null 
selectedNodes | The array of selected nodes | Array | [] 
treeview | Whether it is a treeview | Boolean | false 
subtree | Tree's child node's name | String | "item"

### Property
node.checked: bind to ng-model  
node.indeterminate: If nodes is not checked all, true
