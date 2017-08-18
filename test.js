'use strict'
function main(array, item){
    var result = [];
    //var array = arr.concat();
    array.forEach(function (elem,key,arr) {
        if(elem === item)
            result.push(key);
    })
    console.log("array: "+array+"\nitems: "+ item +"\nthe key of items: "+ result);
}
var arr = [1,3,7,1,4], item = 1;
main(arr,item);