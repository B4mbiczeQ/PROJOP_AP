    let operation = ""
    let operated = false
    let rotation1 = 0
    const maxOperationLength = 17

    function RotateBlock(){

        rotation1 += 90
        document.getElementById("Calculator").style.transform = `rotate(${rotation1}deg)` 

    }

    function RandomRotateBlock(){

        let toRotate = Math.floor((Math.random() * 10) + 1)
        if(toRotate == 10){

            RotateBlock()

        }

    }

    function numberclick(){

        if(!operated){

            let number = Math.floor((Math.random() * 10))

            if( operation.length < maxOperationLength ){

                operation += number
                updateResult(operation)
                RandomRotateBlock()

            } 

        }
        
    }

    function opclick(operator){

        if(!operated){

            if( operation.length < maxOperationLength ){

                if(operation.lastIndexOf != operator){

                    operation += operator
                    updateResult(operation)
                    RandomRotateBlock()

                }

            }

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