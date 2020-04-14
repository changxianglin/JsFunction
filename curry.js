Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func
    }
    return this
}

// like Array
// Function.method('curry', function () {
//     var args = arguments, that = this
//     return function () {
//         return that.apply(null, args.concat(arguments))
//     }
// })

Function.method('curry', function () {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)))
    }
})