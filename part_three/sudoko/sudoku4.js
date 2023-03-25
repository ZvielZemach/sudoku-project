
let againButton = document.getElementById('again');
    againButton.addEventListener('click' , deletAllInputs);

function RandomBoard(arr) {
    let randomBoard = Math.floor(Math.random()* 3);
    let matBoard = arr[randomBoard];
    fillBoard(matBoard);
    deleteRandom(matBoard);
    return matBoard;
}
let matBoard = RandomBoard([[[5,3,4,6,7,8,9,1,2],
                          [6,7,2,1,9,5,3,4,8],
                          [1,9,8,3,4,2,5,6,7],
                          [8,5,9,7,6,1,4,2,3],
                          [4,2,6,8,5,3,7,9,1],
                          [7,1,3,9,2,4,8,5,6],
                          [9,6,1,5,3,7,2,8,4],
                          [2,8,7,4,1,9,6,3,5],
                          [3,4,5,2,8,6,1,7,9]],
                         [[2,7,9,6,1,5,4,3,8],
                          [3,4,1,8,7,2,6,9,5],
                          [5,6,8,3,4,9,1,2,7],
                          [6,5,7,9,2,1,3,8,4],
                          [1,8,4,5,3,7,9,6,2],
                          [9,3,2,4,6,8,5,7,1],
                          [4,2,3,7,5,6,8,1,9],
                          [8,1,6,2,9,4,7,5,3],
                          [7,9,5,1,8,3,2,4,6]],
                         [[6,3,4,8,9,1,7,2,5],
                          [7,8,1,5,2,6,4,9,3],
                          [2,9,5,3,4,7,8,6,1],
                          [5,4,2,9,6,8,1,3,7],
                          [3,7,6,2,1,4,9,5,8],
                          [8,1,9,7,5,3,2,4,6],
                          [1,6,8,4,3,9,5,7,2],
                          [4,2,3,1,7,5,6,8,9],
                          [9,5,7,6,8,2,3,1,4]]]);
                       
 function fillBoard(mat) {
    for(let row = 0; row < mat.length; row++) {
        for(let column = 0; column < mat[row].length; column++) {
                let td = document.createElement('td');
                td.setAttribute('id' , `td${row}${column}`);
                td.innerHTML =  mat[row][column]; 
                document.getElementById(`line${row+1}`).appendChild(td);
                if(column == 2 || column == 5) {
                    td.style.borderRightWidth = "5px"; 
                }
            }
        }
    }

  

function deleteRandom(mat) {
    // debugger;
    // var NumOfRandom = localStorage.getItem('level');
    // console.log(NumOfRandom);
    var level = parseInt(window.location.search.substring(1).split('=')[1]);
    console.log(level);
    
    let i = 0;
    while(i < level) {
        let rrow = Math.floor(Math.random()* (9)) ;
        let ccolumn = Math.floor(Math.random()* (9)) ;
        mat[rrow][ccolumn] = '';
        arr = mat[rrow];
        let td = document.getElementById(`td${rrow}${ccolumn}`);
        if(document.getElementById(`td${rrow}${ccolumn}`).innerText != '') {
            td.innerHTML = '';
           let randDel = document.createElement('input');
            randDel.setAttribute('id' , `input${rrow}${ccolumn}`);
            randDel.type = Text ;
            // randDel.style.maxlength = 1;
            document.getElementById(`td${rrow}${ccolumn}`).appendChild(randDel); 
            i++;
        }                         
    }

}

function CheckIfSudokuCorrect() {
    console.log('i am here');
    for(let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
                if(document.getElementById(`td${row}${column}`).querySelector('input')) {
                    document.getElementById(`td${row}${column}`).innerText = document.getElementById(`input${row}${column}`).value;
                }
                if(document.getElementById(`td${row}${column}`).innerText == '') {
                    console.log('please fill all the missing places');
                    window.alert ('try again , there is a mistake');
                    return;
                }
                if(column == 8) {
                    continue;
                }
                else if(document.getElementById(`td${row}${column+1}`).querySelector('input')) {
                    document.getElementById(`td${row}${column+1}`).innerText = document.getElementById(`input${row}${column+1}`).value;
                if(document.getElementById(`td${row}${column}`).innerText == document.getElementById(`td${row}${column +1}`).innerText ) {
                    window.alert('try again , there is a mistake');
                    return;
                }
            }

                if(document.getElementById(`td${column}${row}`).querySelector('input')) {
                    document.getElementById(`td${column}${row}`).innerText = document.getElementById(`input${column}${row}`).value;
                }
                if(document.getElementById(`td${column}${row}`).innerText == '') {
                    console.log('please fill all the missing places');
                    window.alert('try again , there is a mistake');
                    return;
                    
                }
                if(column == 8) {
                    continue;
                }
                else {
                    if(document.getElementById(`td${column+1}${row}`).querySelector('input')) {
                        document.getElementById(`td${column+1}${row}`).innerText = document.getElementById(`input${column+1}${row}`).value;
                    }
        
                if(document.getElementById(`td${column}${row}`).innerText == document.getElementById(`td${column+1}${row}`).innerText ) {
                    window.alert('try again , there is a mistake');
                    return;
                }
            }
            
            
        }
    }
   
    window.alert('you are a genius');
    window.location = "http://127.0.0.1:5501/sudoku2.html";
}

function deletAllInputs() {
    for(let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
            if(document.getElementById(`td${row}${column}`).querySelector('input')) {
                document.getElementById(`input${row}${column}`).innerText = '';
                document.getElementById(`td${row}${column}`).innerText = document.getElementById(`input${row}${column}`).innerText;
                let randDel = document.createElement('input');
                randDel.setAttribute('id' , `input${row}${column}`);
                randDel.type = Text;
                document.getElementById(`td${row}${column}`).appendChild(randDel); 
            }
        }
    }
}


