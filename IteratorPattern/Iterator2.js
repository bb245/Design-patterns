"use strict";
var iterator = (function () {
    var data = {
        user1: 'bb245',
        user2: 'kw3939',
        user3: 'pc245'
    },
    keys = Object.keys(data),
    index = 0;
    console.log ("Keys: "+ JSON.stringify(keys));
    return {
        next: function () {
            var element;
            if (!iterator.hasNext) {
                return null;
            }
            element = data[keys[index]];
            index ++;
            return element;
        },
        hasNext: function () {
            return index < keys.length;
        },
        rewind: function () {
            index = 0;
            return data[keys[index]];
        },
        current: function () {
            return data[keys[index]];
        }

    };
}());

while (iterator.hasNext()) {
    console.log(iterator.next());
}

iterator.rewind();
console.log(iterator.current());

/*
Output:
Keys: ["user1","user2","user3"]  
bb245  
kw3939 
pc245 
bb245 
*/