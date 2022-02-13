/**
 * This populates an an array of a specified size with randomly generated whole numbers given the min and max range as maxNMin
 * @param {Number} size 
 * @param {Number} negPos 
 * @returns Array<Number>
 */
const genArray = (size, negPos) => {
    let randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray[i] = ((Math.floor(Math.random() * ((negPos * 2) + 1))) - negPos);
    }
    return randomArray;
};
// To verify the output data in the array run the line below uncomment out and run the line below
// console.log(genArray(10000000, 1000000));


/**
 * EmSort, this sorts an array of whole numbers, be it negative or positive using the concept of hash tables
 * @param {Array<Number>} array 
 * @returns Array<Number>
 */
const emSort = (array) => {
    if (array === null || array === undefined) {
        return array;
    }
    if (array.length <= 1) {
        return array;
    } else {
        const pos = {}, neg = {}, sorted = [];
        let negLength = 0, counter = 1;

        for (let index = 0; index < array.length; index++) {
            let element = Number(array[index]);

            if (element < 0) {
                element *= -1;
                if (neg[element]) {
                    neg[element]++;
                } else {
                    neg[element] = 1;
                }
                negLength++;
            } else {
                if (pos[element]) {
                    pos[element]++;
                } else {
                    pos[element] = 1;
                }
            }
        }


        if (negLength) {
            for (const numValue in neg) {
                if (neg[numValue] > 1) {
                    for (let i = 0; i < neg[numValue]; i++) {
                        sorted[negLength - counter] = Number(numValue) * -1;
                        counter++;
                    }
                } else {
                    sorted[negLength - counter] = Number(numValue) * -1;
                    counter++;
                }
            }
        }

        for (const numValue in pos) {
            if (pos[numValue] > 1) {
                for (let i = 0; i < pos[numValue]; i++) {
                    sorted[negLength] = Number(numValue);
                    negLength++;
                }
            } else {
                sorted[negLength] = Number(numValue);
                negLength++;
            }
        }

        return sorted;
    }
};

let unsortedArray = genArray(1000000, 1000000);

// console.log('Sorted', emSort(unsortedArray));

emSort(unsortedArray)