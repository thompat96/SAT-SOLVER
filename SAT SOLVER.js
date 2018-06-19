exports.solve = function(fileName) {
  let formula = propsat.readFormula(fileName)
  let result = doSolve(formula.clauses, formula.variables)
  return result 
}

function readFormula(fileName) {
  let fs = require('fs');
  let text = fs.readFileSync(fileName, 'utf8'); 
  let line = text.split("/n");
  let clauses = readClauses(line);
  let variables = readVariables(clauses);
  let specOk = checkProblemSpecification(text, clauses, variables);
  let result = { 'clauses': [], 'variables': [] }
  if (specOk) {
    result.clauses = clauses
    result.variables = variables
  }
  return result
}
function readClauses(line) {
    let clauses = [];
    let cont = 0;
    for (var i = 0; i < line.length; i++) {
        if ((line[i].charAt(0) !== 'c') && (line[i].charAt(0) !== 'p') && (line[i].charAt(0) !== '')) {
            clauses[cont] = line[i];
            x = x+1;
        }
    }
    clauses = clauses.join('');
    clauses = clauses.split(' 0');
    clauses.pop();
    for (var j = 0; j < line.length; j++) {
        line[j] = line[j].split(' ');
        //separa os elementos por linhas válidas de números, tipo uma matriz
    }
    return clauses;
}
function readVariables(clauses) {
    
}

function nextAssignment(currentAssignment) {
  newAssignment = [];
  return newAssignment
}

function doSolve(clauses, assignment) {
  let isSat = false
  while ((!isSat) && /* must check whether this is the last assignment or not*/) {
    // does this assignment satisfy the formula? If so, make isSat true. 

    // if not, get the next assignment and try again. 
    assignment = nextAssignment(assignment)
  }
  let result = {'isSat': isSat, satisfyingAssignment: null}
  if (isSat) {
    result.satisfyingAssignment = assignment
  }
  return result
}








