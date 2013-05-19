"use strict";
var iterator = (function () {
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9,10],
        index = 0;        
    return {
        next: function () {
            var element;
            if (!iterator.hasNext) {
                return null;
            }
            element = data[index];
            index += 2;
            return element;
        },
        hasNext: function () {
            return index <  data.length;
        },
        rewind: function () {
            index = 0;
            return data[index];
        },
        current: function () {
            return data[index];
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
1  
3  
5  
7 
9  
1 
*/