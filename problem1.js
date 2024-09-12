function findSquare(dataset) {
    const resultArr = []
    const maxSquareSize = Math.min(dataset.length, dataset[0].length)
    console.log("maxSquareSize ==>", maxSquareSize)

    for (let rowIndex = 0; rowIndex < dataset.length - 1; rowIndex++) {
        const row = dataset[rowIndex]

        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            // loop till the max possible sq. size

            for (let size = 2; size <= maxSquareSize; size++) {
                if (
                    rowIndex + size <= dataset.length &&
                    colIndex + size <= row.length
                ) {
                    const isSquareFound = isSquare(rowIndex, colIndex, size)
                    if (isSquareFound) {
                        // console.log({ rowIndex, colIndex, size })
                        resultArr.push({
                            startIndices: [rowIndex, colIndex],
                            size
                        })
                    }
                }
            }
        }
    }

    if (resultArr.length > 0) {
        console.log(resultArr)
    } else {
        console.log("No Square found. Try a different dataset.")
    }
}

function isSquare(i, j, size = 2) {
    const endRowIndex = i + size - 1
    const endColIndex = j + size - 1

    // Checks for the left side
    for (let x = i; x < endRowIndex; x++) {
        // i,j
        // i+1,j
        // i+2,j

        if (data[x][j] === 1) {
            continue
        }
        return false
    }

    // Checks for the top side
    for (let y = j; y < endColIndex; y++) {
        // i,j+1
        // i,j+2

        if (data[i][y] === 1) {
            continue
        }
        return false
    }

    // Checks for the bottom side
    for (let y = j; y <= endColIndex; y++) {
        // i+size-1,j
        // i+size-1,j+1
        // i+size-1,j+2

        if (data[endRowIndex][y] === 1) {
            continue
        }
        return false
    }

    // Checks for the right side
    for (let x = i; x <= endRowIndex; x++) {
        // i,j+size-1
        // i+1,j+size-1
        // i+2,j+size-1

        if (data[x][endColIndex] === 1) {
            continue
        }
        return false
    }

    return true
}

const data = [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0]
]
findSquare(data)

// const correctOutput = [
//     { rowIndex: 0, colIndex: 2, size: 2 },
//     { rowIndex: 0, colIndex: 2, size: 4 },
//     { rowIndex: 0, colIndex: 3, size: 2 },
//     { rowIndex: 0, colIndex: 4, size: 2 },
//     { rowIndex: 1, colIndex: 2, size: 2 },
//     { rowIndex: 1, colIndex: 3, size: 3 },
//     { rowIndex: 1, colIndex: 5, size: 2 },
//     { rowIndex: 2, colIndex: 2, size: 2 },
//     { rowIndex: 2, colIndex: 5, size: 2 }
// ]

// Data returned by previously submitted solution.
// The logic failed for the uncommented ones below.
// The fix was simple. The loop's condition needed to be fixed such that it runs one more time and <= solved the problem
const oldOutput = [
    // { rowIndex: 0, colIndex: 2, size: 2 },
    { rowIndex: 0, colIndex: 2, size: 3 },
    // { rowIndex: 0, colIndex: 2, size: 4 },
    // { rowIndex: 0, colIndex: 3, size: 2 },
    // { rowIndex: 0, colIndex: 4, size: 2 },
    // { rowIndex: 1, colIndex: 2, size: 2 },
    { rowIndex: 1, colIndex: 3, size: 2 },
    // { rowIndex: 1, colIndex: 3, size: 3 },
    // { rowIndex: 1, colIndex: 5, size: 2 },
    // { rowIndex: 2, colIndex: 2, size: 2 },
    // { rowIndex: 2, colIndex: 5, size: 2 },
    { rowIndex: 2, colIndex: 6, size: 2 }
]
