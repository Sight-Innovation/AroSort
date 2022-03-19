/**
 *   Description: A function that returns an array filled with random integers.
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
 * Populates an array of a specified size with randomly generated integers given the min and max range as negPos
 * @param {Number} size 
 * @param {Number} negPos 
 * @returns array<Number>
 */
const genArray = (size, negPos) => {
    let randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray[i] = ((Math.floor(Math.random() * ((negPos * 2) + 1))) - negPos);
    }
    return randomArray;
};
// Please note that this takes considerable amount of runtime for especially large arrays (usually few seconds)
// To verify the output data in the array uncomment and run the line below
// console.log(genArray(10000000, 1000000)); // This will create an array 1 million indices big and fill it with integers given the minimum possible and maximum possible values as -1000000 and 1000000 respectively

export default genArray;