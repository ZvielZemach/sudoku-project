function fillboard(mat){
    
    for (row = 0; row < mat.length; row++) {
        let arr = [1,2,3,4,5,6,7,8,9]
        for (column = 0; column < mat[row].length; column++) {
            let index;
            let num;
            
            while(true) {
                index = Math.floor(Math.random()*(arr.length -1));
                var checkResult = checkRow(mat, row, arr[index], column) && checkColumn(mat, column, arr[index], row); 
                
                if(checkResult) {
                    break;
                }

                if(arr.length <= 2 && !checkResult) {
                    column = 0;
                    for(let i = 0; mat[row].length; i ++) {
                        mat[row][i] = '';       
                    }
                    break;
                }
            }
            if(checkResult) {
            mat[row][column] = arr[index]
            num = arr[arr.length-1];
            arr[arr.length-1] = index;
            arr[index] = num;
            arr.pop();
            }
        }
        console.log(row + ":" + mat[row]);
    }

    // for(let i = 0; i < 81; i++) {
    //     // debugger;
    //     let rand = Math.floor(Math.random()*(9 - 1)) +1;
    //     let row = Math.floor (Math.random()* (9));
    //     let column = Math.floor (Math.random()* (9));
         
    //     if(mat[row][column] == Number) {
    //         i--;
    //         continue;
    //     }
        
    //     else {   
    //         if(checkerror(mat , row , column , rand)) {
    //         mat[row][column] = rand;

    //         }
    //         else {
    //             i--;
    //             continue;
    //         }
    //     }
    // }
    console.log(mat);
    
}

fillboard([['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','',''],
           ['','','','','','','','','']])

//     function checkerror(mat , row , column , rand) {
// for(let i = 0; i < mat[row].length; i++) {
//     //בודק אם בשורה יש את אותו המספר
//         if(i == column) {
//             // דואג שאם אני נמצא על אותו מיקום הוא ידלג
//             continue;

//         } else {
//             if(mat[row][i] == rand) {
//                 return false;
//             }
//         }
//             // בודק אם בעמודה יש את אותו המספר
//         if(i == row) {
//             continue;

//             } else {
//             if(mat[i][column] == rand) {
//                 return false;
//             }
//             } 
//     }
//     return true;
// }

function checkRow(mat, row, num, column) {
    for(let i = 0; i < mat[row].length; i++) {
        if (i == column) {
            continue;
        }

        if (mat[row][i] == num) {
            return false;
        }
    }

    return true
}

function checkColumn(mat, column, num, row) {
    for(let i = 0; i < mat.length; i++) {
        if (i == row) {
            continue
        }

        if (mat[i][column] == num) {
            return false
        }
    }

    return true;
}

function checkSubMatrix(mat) {
    let rrow = Math.floor(Math.random() * 9);
    let ccolumn = Math.floor(Math.random() * 9);
            if(ccolumn <= 2 && rrow <= 2) {
                let submatone = [[],
                                 [],
                                 []];
                                 console.log('mat1');
                                 submatone = fillSubMat(submatone , rrow , ccolumn,mat[rrow][ccolumn]); 
            }
            else if((ccolumn > 2 && ccolumn < 6) && rrow <= 2) {
                let submattwo = [[],
                                 [],
                                 []];
                                 console.log('mat2');
                                 submattwo = fillSubMat(submattwo , rrow , ccolumn,mat[rrow][ccolumn]);
            }
            else if((ccolumn > 6 && ccolumn < 8) && rrow <= 2) {
                let submatthree = [[],
                                   [],
                                   []];
                                   console.log('mat3');
                                   submatthree = fillSubMat(submatthree , rrow , ccolumn,mat[rrow][ccolumn]);                      
            }
            else if(ccolumn <= 2 && (rrow > 2 && rrow < 6)) {
                let submatfour = [[],
                                  [],
                                  []];
                                  console.log('mat4');
                                  submatfour = fillSubMat(submatfour , rrow , ccolumn,mat[rrow][ccolumn]);         
            }
            else if((ccolumn > 2 && ccolumn < 6) && (rrow > 2 && rrow < 6)) {
                let submatfive = [[],
                                  [],
                                  []];
                                  console.log('mat5'); 
                                  submatfive = fillSubMat(submatfive , rrow , ccolumn,mat[rrow][ccolumn]);                    
            }
            else if((ccolumn >= 6 && ccolumn <= 8) && (rrow > 2 && rrow < 6)) {
                let submatsix = [[],
                                 [],
                                 []];
                                 console.log('mat6');
                                 submatsix = fillSubMat(submatsix , rrow , ccolumn,mat[rrow][ccolumn]);               
            }
            else if(ccolumn <= 2 && rrow >= 6 && rrow <=8) {
                let submatseven = [[],
                                   [],
                                   []];
                                   console.log('mat7'); 
                                   submatseven = fillSubMat(submatseven , rrow , ccolumn,mat[rrow][ccolumn]);                  
            }
            else if((ccolumn > 2 && ccolumn < 6) && (rrow >= 6 && rrow <=8)) {
                let submateight = [[],
                                   [],
                                   []];
                                   console.log('mat8');
                                   submateight = fillSubMat(submateight , rrow , ccolumn,mat[rrow][ccolumn]);                      
            }
            else if((ccolumn >= 6 && ccolumn <= 8) && (rrow >= 6 && rrow <= 8)) {
                let submatnine = [[],
                                  [],
                                  []];
                                  console.log('mat9');
                                  submatnine = fillSubMat(submatnine , rrow , ccolumn,mat[rrow][ccolumn]);                  
            }

}

checkSubMatrix([[1,2,3,4,5,6,7,8,9],
                [9,8,7,6,5,4,3,2,1],
                [3,2,4,1,5,6,7,8,9],
                [1,2,3,4,5,6,7,8,9],
                [9,8,7,6,5,4,3,2,1],
                [1,9,2,8,3,7,4,5,6],
                [9,1,8,2,7,3,6,5,4],
                [3,2,4,1,5,6,7,9,8],
                [1,7,3,5,2,8,4,9,6]])


function fillSubMat(submat ,  roww , columnn, Number) {
    for(let i = 0; i < submat.length; i++) {
        for(let j = 0; j < submat[i].length; j++) {
            

        }
    }
}