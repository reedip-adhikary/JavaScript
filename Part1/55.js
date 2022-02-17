const myfunc = () => {
    function hello() {
        return "hello world"
    }
    return hello
}

const ans = myfunc()
console.log(ans())

// // ans has become function because myfunc is returning a function and value os ans is a function