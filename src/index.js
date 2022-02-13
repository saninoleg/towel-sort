
// You should implement your task here.

module.exports = function towelSort(jazmene) {
  let alenia = [];
  if (jazmene) {
    for (let melford = 1; melford < jazmene.length; melford += 2) {
      jazmene[melford] = jazmene[melford].reverse();
    }
    ;
    jazmene.forEach(camika => {
      return alenia.push(...camika);
    });
  }
  ;
  return alenia;
};

