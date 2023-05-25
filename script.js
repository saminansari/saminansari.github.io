// Function to sort the list
function sortList(list) {
    return list.sort(function(a, b) {
        return a - b;
    });
}

// Function to calculate the minimum value
function getMinimum(list) {
    return Math.min(...list);
}

// Function to calculate the average value
function getAverage(list) {
    const sum = list.reduce((a, b) => a + b, 0);
    return sum / list.length;
}

// Button click event handlers
document.getElementById('sortBtn').addEventListener('click', function() {
    const inputList = document.getElementById('inputList').value;
    const list = inputList.split(',').map(Number);
    const sortedList = sortList(list);
    document.getElementById('output').textContent = 'Sorted List: ' + sortedList;
});

document.getElementById('minBtn').addEventListener('click', function() {
    const inputList = document.getElementById('inputList').value;
    const list = inputList.split(',').map(Number);
    const minimum = getMinimum(list);
    document.getElementById('output').textContent = 'Minimum Value: ' + minimum;
});

document.getElementById('avgBtn').addEventListener('click', function() {
    const inputList = document.getElementById('inputList').value;
    const list = inputList.split(',').map(Number);
    const average = getAverage(list);
    document.getElementById('output').textContent = 'Average Value: ' + average;
});
