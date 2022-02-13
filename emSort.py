'''This populates an an array of a specified size with randomly generated whole numbers given the min and max range as maxNMin'''
import math
import random

def genArray(size, neg_pos):
    randomArray = [0] * size
    for i in range(size):
        randomArray[i] = (int(math.floor(random.randrange(neg_pos*-1,neg_pos+1))))
    return randomArray    

# genArray(1000000,1000000)

def emSort(array):
    if len(array) <= 1:
        return array
    else:
        pos = {}
        neg = {}
        sortedArray = [0] * len(array)
        negLength = 0
        counter = 1

        for i in range(len(array)):
            element = array[i]

            if element < 0:
                element *= -1
                if element in neg:
                    neg[element] += 1
                else:
                    neg[element] = 1
                negLength += 1
            else:
                if element in pos:
                    pos[element] = pos[element] +1
                else:
                    pos[element] = 1

        if negLength > 0:
            for numValue in sorted(neg.keys()):
                if neg[numValue] > 1:
                    for i in range(neg[numValue]):
                        sortedArray[negLength - counter] = int(numValue) * -1
                        counter += 1
                else:
                    sortedArray[negLength - counter] = int(numValue) * -1
                    counter += 1
        
        for numValue in sorted(pos.keys()):
            if pos[numValue] > 1:
                    for i in range(pos[numValue]):
                        sortedArray[negLength] = int(numValue)
                        negLength += 1
            else:
                sortedArray[negLength] = int(numValue)
                negLength += 1

        return sortedArray

unsortedArray = genArray(1000000, 1000000)

# print(emSort(unsortedArray))
emSort(unsortedArray)