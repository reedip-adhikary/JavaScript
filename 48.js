const app = () => {
    const func = () => console.log("in func")

    const add2 = (a, b) => console.log(a + b)

    const mul2 = (a, b) => console.log(a * b)

    console.log("inide app")
    func()
    add2(4, 5)
    mul2(4, 5)
}

app()