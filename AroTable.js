const genArray = (size, negPos) => {
    let randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray[i] = ((Math.floor(Math.random() * ((negPos * 2) + 1))) - negPos);
    }
    return randomArray;
};

class AroTable {
    #pos = {};
    #neg = {};
    #negLength = 0;
    #array = [];
    #indices = {};
    constructor(array) {
        this.add(array);
    }

    #arrange () {
        let counter = 1;
        (() => {
            this.#indices = {};
            this.#array = [];
            (this.#negLength > 0) &&
                (() => {
                    for (const numValue in this.#neg) {
                        if (isNaN(numValue))
                            return;

                        if (this.#neg[numValue] > 1)
                            (() => {
                                for (let i = 0; i < this.#neg[numValue]; i++)
                                    (() => {
                                        this.#array[this.#negLength - counter] = Number(numValue) * -1;

                                        this.#indices[numValue * -1] ?
                                            this.#indices[numValue * -1] = [Number(this.#negLength - counter), ...this.#indices[numValue * -1]] :
                                            this.#indices[numValue * -1] = [Number(this.#negLength - counter)];

                                        counter++;
                                    })();
                            })();
                        else if (this.#neg[numValue] > 0)
                            (() => {
                                this.#array[this.#negLength - counter] = Number(numValue) * -1;

                                this.#indices[numValue * -1] ?
                                    this.#indices[numValue * -1] = [Number(this.#negLength - counter), ...this.#indices[numValue * -1]] :
                                    this.#indices[numValue * -1] = [Number(this.#negLength - counter)];

                                counter++;
                            })();
                        else continue;
                    }
                })();
        })();


        (Object.keys(this.#pos).length) &&
            (() => {
                const negLength = this.#negLength;
                for (const numValue in this.#pos) {
                    if (isNaN(numValue))
                        return;
                    if (this.#pos[numValue] > 1)
                        (() => {
                            for (let i = 0; i < this.#pos[numValue]; i++)
                                (() => {
                                    this.#array[this.#negLength] = Number(numValue);

                                    this.#indices[numValue] ?
                                        this.#indices[numValue][this.#indices[numValue].length] = (Number(this.#negLength)) :
                                        this.#indices[numValue] = [Number(this.#negLength)];

                                    this.#negLength++;
                                })();
                        })();
                    else if (this.#pos[numValue] > 0)
                        (() => {
                            this.#array[this.#negLength] = Number(numValue);

                            this.#indices[numValue] ?
                                this.#indices[numValue][this.#indices[numValue].length] = (Number(this.#negLength)) :
                                this.#indices[numValue] = [Number(this.#negLength)];

                            this.#negLength++;
                        })();
                    else continue;
                }
                this.#negLength = negLength;
            })();
    };

    add (array) {
        if (array == null || array == undefined) return false;
        if (typeof array == 'string') return false;
        if (!Array.isArray(array) && Number.isInteger(array)) {
            array < 0 ?
                (() => {
                    array *= -1;
                    this.#neg[array] ?
                        this.#neg[array]++ :
                        this.#neg[array] = 1;

                    this.#negLength++;
                })() :
                this.#pos[array] ?
                    this.#pos[array]++ :
                    this.#pos[array] = 1;
            this.#arrange();
            return true;
        }

        Array.isArray(array) ?
            (() => {
                for (let index = 0; index < array.length; index++) {
                    let element = Number(array[index]);

                    if (array[index] == null) continue;
                    if (isNaN(element)) continue;
                    element < 0 ?
                        (() => {
                            element *= -1;
                            this.#neg[element] ?
                                this.#neg[element]++ :
                                this.#neg[element] = 1;

                            this.#negLength++;
                        })() :
                        this.#pos[element] ?
                            this.#pos[element]++ :
                            this.#pos[element] = 1;
                };
                this.#arrange();
                return true;
            })()
            : ([]);
    }

    search (value) {
        if (value == null || value == undefined || isNaN(value)) return false;

        if (this.#indices[Number(value)]) {
            return this.#indices[Number(value)];
        } else {
            return false;
        }
    }

    returnArray () {
        return this.#array;
    }

    delete (value) {
        if (this.search(value) !== false) {
            if (Number(value) < 0) {
                this.#neg[Number(value * -1)]--;
                this.#negLength--;
            } else {
                this.#pos[Number(value)]--;
            }
            this.#arrange();
            return true;
        } else {
            return false;
        }
    }

    deleteAll (value) {
        if (this.search(value) !== false) {
            if (Number(value) < 0) {
                const reducer = this.#neg[Number(value * -1)];
                this.#neg[Number(value * -1)] = 0;
                this.#negLength -= reducer;
            } else {
                this.#pos[Number(value)] = 0;
            }
            this.#arrange();
            return true;
        } else {
            return false;
        }
    }
}

let unsortedArray = genArray(100, 100);

const aroTable = new AroTable(unsortedArray);

console.log(aroTable);
console.log(aroTable.returnArray());
aroTable.delete(0);
console.log(aroTable.returnArray());
aroTable.deleteAll(-1);
console.log(aroTable.returnArray());
aroTable.add([-6, null, 'se', 'ff', '99', 0, -7]);
console.log(aroTable.returnArray());
console.log(aroTable.search(0));
console.log(new AroTable([-6, null, 'se', 'ff', '99', 0, -7]).returnArray());
console.log(new AroTable([-6, null, 'se', 'ff', '99', 0, -7]).search(99));