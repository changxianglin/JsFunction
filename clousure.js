var myObject = (function () {
    var value = 0

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1
        },
        getValue: function () {
            return value
        }
    }
}())

var quo = function (status) {
    return {
        get_status: function () {
            return status
        }
    }
}

var myQuo = quo('amazed')
console.log(myQuo.get_status())

var fade = function (node) {
    var level = 1
    var step = function () {
        var hex = level.toString(16)
        node.style.backgroundColor = '#FFFF' + hex + hex
        if (level < 15) {
            level += 1
            setTimeout(step, 100)
        }
    }
    setTimeout(step, 100)
}

fade(document.body)

// fail Demo
var add_the_handlers = function (nodes) {
    for (i = 0; i < nodes.length; i++) {
        nodes[i].onclick = function (e) {
            alert(i)
        }
    }
}


// mend Demo
var add_the_handlers = function (nodes) {
    var helper = function (i) {
        return function (e) {
            alert(i)
        }
    }
    var i
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = helper(i)
    }
}