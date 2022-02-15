console.log(this) // provides window object which is given by JS

function myfunc() {
    "use strict"
    console.log(this) // this will also give window object to prevent this write use strict
}
myfunc()