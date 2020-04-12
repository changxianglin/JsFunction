var add = function (a, b) {
    return a + b
}

let myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1
    }
}

var sum = add(3, 4)
console.log(sum)

myObject.double = function () {
    var that = this

    var helper = function () {
        that.value = add(that.value, that.value)
    }

    helper()
}

myObject.double()
document.writeln(myObject.value)