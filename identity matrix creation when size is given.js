const size = 3;
function createIdentityMatrix(size){
    const identityMatrix = [];
    for (let i = 0; i < size; i++){
        const row = [];
        for (let j = 0; j < size; j++){
            if (i === j){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        identityMatrix.push(row);
    }
    return identityMatrix;
}
const identityMatrix = createIdentityMatrix(size);
console.log("identity matrix : ");
console.log(identityMatrix);
