/**
 *   Description: Sorting algorithm based on hash tables.
 * 
 *   Copyright 2022 Emmanuel Agbavwe to Present.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/**
 * AroSort, this sorts an array of whole numbers, be it negative or positive using hash keys
 * @param {Array<Number>} array 
 * @returns Array<Number>
 */
const aroSort = (array) => {
    if (array === null || array === undefined) {
        return [];
    } else if (array.length <= 1) {
        return array;
    } else {
        const pos = {}, neg = {}, sorted = [];
        let negLength = 0, counter = 1;

        for (let index = 0; index < array.length; index++) {
            let element = Number(array[index]);

            // Creating the hash for each number found
            if (element < 0) {
                element *= -1;
                // If a duplicate negative number is found, increment its occurrence count
                if (neg[element]) {
                    neg[element]++;
                } else {
                    // If a negative number is found, then its passed into the neg hash table
                    neg[element] = 1;
                }
                negLength++;
            } else {
                // If a duplicate positive number is found, increment its occurrence count
                if (pos[element]) {
                    pos[element]++;
                } else {
                    // If a positive number is found, then its passed into the pos hash table
                    pos[element] = 1;
                }
            }
        }

        // If negative numbers did occur...
        if (negLength) {
            // Dependent on the fact that the keys in JavaScript are arranged by default, the keys in each hash table are looped through to insert their values into the sorted array

            // Loop through the presorted keys of the neg hash table and assign their values to their rightful sorted position in the sorted array
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

        // If positive numbers did occur...
        if (Object.keys(pos).length) {
            // Loop through the presorted keys of the pos hash table and assign their values to their rightful sorted position in the sorted array
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
        }
        return sorted;
    }
};

export default aroSort;
