/*
<html>
    <head>
        <title>Dom Traversing</title>
        <script src="./21.js" defer></script>
    </head>
    <body>
        <div class="container">
            <h1>My heading</h1>
            <p>Some useful information</p>
        </div>
    </body>
</html>

double line text node
single line element node
                                     Document --> Root Node
                                        |
                                      HTML --> Root element
                    ____________________|______________________
                   |                    ||                     |
                  Head                 (/n)                   Body
                   |                                           |
         ==========|==========_______________==============    |
         ||        |         ||              |            ||   |
        (/n)     title      (/n)           script        (/n)  |
     TextNode     ||                                           |
            (Dom Traversing)                                   |
                                   =======================_____|================
                                  ||                      |                    ||        
                                 (/n)                    div                  (/n)
                                           ============___|========_____________==========
                                          ||           |          ||           |         ||
                                         (/n)          h1        (/n)          p        (/n)
                                                       ||                      ||
                                                 (My heading)        (Some useful information)
*/

// const rootNode = document.getRootNode()
// console.log(rootNode.childNodes) // NodeList [html]

// const htmlElementNode = rootNode.childNodes[0]
// console.log(htmlElementNode.childNodes) // NodeList(3) [head, text, body]

// const headElement = htmlElementNode.childNodes[0]
// console.log(headElement.childNodes) // NodeList(5) [text, title, text, script, text]

// const textNode1 = htmlElementNode.childNodes[1]
// console.log(textNode1.childNodes) // NodeList []

// const bodyElement = htmlElementNode.childNodes[2]
// console.log(bodyElement.childNodes) // NodeList(7) [text, div.container, text, comment, text, script, text]

// console.log(bodyElement.parentElement)  // html
// console.log(bodyElement.previousSibling)  // text
// console.log(bodyElement.previousElementSibling)  // head


const h1 = document.querySelector("h1")
const div = h1.parentElement
div.style.color = "#dedede"
div.style.backgroundColor = "#334"
div.style.padding = "5px 25px"
const body = div.parentElement
body.style.backgroundColor = "#333"