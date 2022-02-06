
// You should implement your task here.

module.exports = function towelSort(matrix) {
     
    let arrayResult = [];

    if (matrix) {
        for (let i = 0; i < matrix.length; i += 1) {
            matrix[i] = matrix[i].reverse();
        };
        
        
        matrix.forEach((arrayInner) => arrayResult.push(...arrayInner));
    };
    
    return arrayResult;
};
