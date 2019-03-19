document.addEventListener("DOMContentLoaded", function () {
    function getById(id) {
        return document.getElementById(id);
    }
    function insertBefore(id, itemBeingInserted) {
        getById(id).insertBefore(itemBeingInserted, getById(id).childNodes[0]);
    }
    function generateRandomArray(lengthOfArray, maxInteger) {
        let arrayOfRandomIntegers = [];
        let i = 0;    
        let randomInteger;
        let largestNumberSoFar = 0;
        while (i < lengthOfArray) {
            randomInteger = Math.floor(Math.random() * maxInteger + 1);
            if (randomInteger >= largestNumberSoFar) {
                largestNumberSoFar = randomInteger;
            }
            arrayOfRandomIntegers.push(randomInteger);
            i += 1;
        }
        console.log(arrayOfRandomIntegers);
        console.log(largestNumberSoFar);
        generateGraph(arrayOfRandomIntegers, largestNumberSoFar);
    }
    function generateGraph(array, largestNumberInArray) {
        function generateColumns(i) {
            let rowString = " ";
            let j = 0;
            let rowP;
            while (j < array.length) {
                rowP = document.createElement("P");
                rowP.id = ("rowP" + i);
//                console.log("i: " + i);
//                console.log("array at j: " + array[j]);
                if (array[j] >= i) {
                    rowString += ("*" + " ");
                } else if (array[j] < i) {
                    rowString += (" " + " ");
                }
                j += 1;
            }
            console.log(rowString);
            console.log(" ");
        let rowPText = document.createTextNode(rowString);
        rowP.appendChild(rowPText);
        getById("container").appendChild(rowP);
        setTimeout(function () {
            rowP.classList.add("black");    
        }, (i * 100));
        }
        function generateRows() {
            let i = largestNumberInArray;
            console.log(i);
            while (i > 0) {
                generateColumns(i);
                i += -1;
            }
        }  
        generateRows();      
    }
    generateRandomArray(50, 15);   
});