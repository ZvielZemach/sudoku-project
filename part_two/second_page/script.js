function LevelDifficulty(value){
    // debugger;
    localStorage.setItem('level',value);
    window.location.href = `http://127.0.0.1:5502/sudoku4.html?level=${value}`
}


var num = localStorage.getItem('level');
console.log(num);

