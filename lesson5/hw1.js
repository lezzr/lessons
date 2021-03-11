/**
 * @property {HTMLElement} container
 */

const bsettings = {
    container: document.getElementById('game'),

    getMap() {
        const rowCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
        const colCount = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
        for (let row = 0; row < rowCount.length; row++) {
            const tr = document.createElement('tr');
            this.container.appendChild(tr);

            for (let col = 0; col < colCount.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rowCount[row] === 0 && colCount[col] !== 0) {
                    td.innerHTML = colCount[col];
                }
                else if (colCount[col] === 0 && rowCount[row] !== 0) {
                    td.innerHTML = rowCount[row];
                }
                if (this.isBlack(row, col)) {
                    td.style.backgroundColor = 'black';
                }

            }

        }
    },

    /** 
    * @param {int} rowNum
    * @param {int} colNum
    * @returns {boolean}
    */
    isBlack(rowNum, colNum) {
        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
            return false;
        }
        return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
    },
};

bsettings.getMap();