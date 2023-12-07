method = document.getElementById('method')
result = document.getElementById('result')

console.log(method)


const checkIfEmpty = () => {
    inputOne = parseFloat(
        document.getElementById('input-one').value
    )
    inputTwo = parseFloat(
        document.getElementById('input-two').value
    )
    if (inputOne === '' || inputTwo === '') {
        return true;
    } else {
        return false;
    }
}

const updateDOM = (final, methodSymbol) => {
    final = (isNaN(final) || !isFinite(final)) ? 'Math Error' : final;
    console.log(final, methodSymbol);
    result.innerHTML = final;
    method.innerHTML = methodSymbol;
}

const add = () => {
    inputOne = parseFloat(
        document.getElementById('input-one').value
    )
    inputTwo = parseFloat(
        document.getElementById('input-two').value
    )
    if (checkIfEmpty()) {
        alert('Please fill in both fields');
    } else {
        let final = inputOne + inputTwo;
        updateDOM(final, '+');
    }
}

const subtract = () => {
    inputOne = parseFloat(
        document.getElementById('input-one').value
    )
    inputTwo = parseFloat(
        document.getElementById('input-two').value
    )
    if (checkIfEmpty()) {
        alert('Please fill in both fields');
    } else {
        let final = inputOne - inputTwo;
        updateDOM(final, '-');
    }
}

const multiply = () => {
    inputOne = parseFloat(
        document.getElementById('input-one').value
    )
    inputTwo = parseFloat(
        document.getElementById('input-two').value
    )
    if (checkIfEmpty()) {
        alert('Please fill in both fields');
    } else {
        let final = inputOne * inputTwo;
        updateDOM(final, 'x');
    }
}

const divide = () => {
    inputOne = parseFloat(
        document.getElementById('input-one').value
    )
    inputTwo = parseFloat(
        document.getElementById('input-two').value
    )
    if (checkIfEmpty()) {
        alert('Please fill in both fields');
    } else {
        let final = inputOne / inputTwo;
        updateDOM(final, '/');
    }
}

const clearAll = () => {
    document.getElementById('input-one').value = '0';
    document.getElementById('input-two').value = '0';
    result.innerHTML = '0';
    method.innerHTML = '+';
}