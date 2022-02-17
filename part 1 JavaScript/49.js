const myvar = "outside app"

const myApp = () => {
    // const myvar = "inside app"

    const func1 = function () {
        // const myvar = "inside func1"  

        // // if this is now present it'll take upper level myvar = "inside app", and if it is still not present i'll follow the same rule ie, "outside app"

        const func2 = () => {
            console.log("func2 - ", myvar)
        }
        func2()
    }

    console.log(myvar)
    func1()
}

myApp()