let myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1
    }
}

myObject.increment()
document.writeln(myObject.value)

myObject.increment(2)
document.writeln(myObject.value)

