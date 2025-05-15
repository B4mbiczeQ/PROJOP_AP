    let operation = ""
    let operated = false
    let rotation1 = 0
    const maxOperationLength = 17

    function RandomRotateBlock(){

        let toRotate = Math.floor((Math.random() * 10) + 1)
        if(toRotate == 10){

            rotation1 += 90
            document.getElementById("Calculator").style.transform = `rotate(${rotation1}deg)`

        }

    }

    function RandomMarginBlock(){

        let toChance = Math.floor((Math.random() * 10) + 1)
        if(toChance == 10){

            let buttons = document.getElementsByClassName("Button")

            let widthMultiplaier = Math.floor((Math.random() * 20) + 1)
            let newWidth = 7 * widthMultiplaier / 4

            let rotICMultiplaier = Math.floor((Math.random() * 361))
            document.getElementById("Item_cont").style.transform = `rotate(${rotICMultiplaier}deg)`

            for(i = 0; i < buttons.length; i++){

                buttons[i].style.width = `${newWidth}vh`
                
                let rotMultiplaier = Math.floor((Math.random() * 361))
                buttons[i].style.transform = `rotate(${rotMultiplaier}deg)`

            }

        }

    }

    function numberclick(){

        if(!operated && operation.length < maxOperationLength){

            let number = Math.floor((Math.random() * 10))
            operation += number

            updateResult(operation)
            RandomRotateBlock()
            RandomMarginBlock()

        }
        
    }

    function opclick(operator){

        if(!operated && operation.length < maxOperationLength && operation[operation.length - 1] != operator){  

            operation += operator

            updateResult(operation)
            RandomRotateBlock()
            RandomMarginBlock()

        }
        
    }

    function DeleteLastDigit(){

        if(operation.length > 0){

            operation = operation.slice(0, (operation.length - 1))

            updateResult(operation)
            RandomRotateBlock()
            RandomMarginBlock()

        }

    }

    function clearCalc(){

        let funnyDecs = [
            "No",
            "Stop it",
            "Leave C alone :(",
            "STOP",
            "Leave at this point",
            "Seriously?",
            "It's been 20 minutes...",
            "OK FINE",
            "What's wrong?",
            "Let me think",
            "How's wife?",
            "Loading...",
            "...",
            "Just give up :|",
            "How's life?",
            "You feeling it? I don't",
            "No I'm good",
            "Look behind you.",
            "Look up",
            "Haha i no work",
            "It's sooooo long",
            "I'm tired at this point",
            "Stop spamming",
            "Hold on",
            "I'm tired, boss",
            "Are you happy now?",
        ]

        let random1 = Math.floor((Math.random() * 4) + 1)

            if(random1 <= 3){

                let random2 = Math.floor((Math.random() * funnyDecs.length))
                operation = funnyDecs[random2]
                if(operated == false) operated = true

            } 

            else{

                if(operated == true) operated = false
                operation = ""
                
            }

            updateResult(operation)

    }

    function updateResult(Item){

        textbox = document.getElementById("Item_cont")
        textbox.value = Item

    }

    function showAnswer(){

        if(!operated){

            let funnyTexts = [
                "I don't know",
                "Google It",
                "Ask Chat-GPT",
                "Idk ask mr. Konko",
                "Guess",
                "Dude it's easy",
                "Just do it yourself",
                "You serious?",
                "Haha no answer",
                "I would know",
                "I'm sure you know",
                "Maybe... 4?",
                "Give me a second",
                "Coffee break",
                "Nah thanks",
                "I'm just a Calculator",
                "Ask Deepseek",
                "Yes",
                "How's your day?",
                "You look great",
                "Don't ask me",
                "Forgot :(",
                "Hooman Calculatur",
                "Use Math, dummy",
                "That's what i thought",
                "I think it's 7",
                "..."
            ]

            if(operation.length > 0){

                let random1 = Math.floor((Math.random() * 6) + 1)

                if(random1 <= 5){

                    operation = eval(operation).toFixed(2)

                } 

                else{

                    let random2 = Math.floor((Math.random() * funnyTexts.length))
                    operation = funnyTexts[random2]
                    if(operated == false) operated = true

                } 

                updateResult(operation)

            }

        }
        
    }