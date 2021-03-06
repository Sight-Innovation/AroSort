'''
    Description: Sorting algorithm based on hash tables.

    Copyright 2022 Sight-Innovation LLC to Present.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
'''


def aroSort(array):
    '''
    AroSort, this sorts an array of whole numbers, be it negative or positive using hash keys
    :param array: list[int]
    :return: list[int]
    '''
    if array == None:
        return []
    elif len(array) <= 1:
        return array
    else:
        pos = {}
        neg = {}
        sortedArray = [0] * len(array)
        negLength = 0
        counter = 1

        for i in range(len(array)):
            element = array[i]

            # Creating the hash for each number found
            if element < 0:
                element *= -1
                # If a duplicate negative number is found, increment its occurrence count
                if element in neg:
                    neg[element] += 1
                else:
                    # If a negative number is found, then its passed into the neg hash table
                    neg[element] = 1
                negLength += 1
            else:
                # If a duplicate positive number is found, increment its occurrence count
                if element in pos:
                    pos[element] += 1
                else:
                    # If a positive number is found, then its passed into the pos hash table
                    pos[element] = 1

        # If negative numbers did occur...
        if negLength > 0:
            # Considering the fact that the keys in Python are not arranged by default, the sorted() function - which uses the TimSort algorithm - is called to carryout sorting on the keys, then the result is looped through to insert their values into the sortedArray

            # Loop through the sorted keys of the neg hash table and assign their values to their rightful sorted position in the sortedArray
            for numValue in sorted(neg.keys()):
                if neg[numValue] > 1:
                    for i in range(neg[numValue]):
                        sortedArray[negLength - counter] = int(numValue) * -1
                        counter += 1
                else:
                    sortedArray[negLength - counter] = int(numValue) * -1
                    counter += 1

        # If positive numbers did occur...
        if len(pos) > 0:
            # Loop through the sorted keys of the neg hash table and assign their values to their rightful sorted position in the sortedArray
            for numValue in sorted(pos.keys()):
                if pos[numValue] > 1:
                    for i in range(pos[numValue]):
                        sortedArray[negLength] = int(numValue)
                        negLength += 1
                else:
                    sortedArray[negLength] = int(numValue)
                    negLength += 1

        return sortedArray