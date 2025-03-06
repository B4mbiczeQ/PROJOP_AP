    let operation = ""

    function numberclick(number){

        if( operation.length >= 17 ){}
        else{

            operation += number
            updateResult(operation)

        } 

    }

    function opclick(operator){

        if( operation.length >= 17 ){}
        else{

            if(operation.lastIndexOf != operator){

                operation += operator
                updateResult(operation)

            }

        }
        
    }

    function clearCalc(){

        operation = ""
        updateResult(operation)

    }

    function updateResult(Item){
        
        textbox = document.getElementById("Item_cont")
        textbox.value = Item

    }

    function showAnswer(){

        if(operation.length > 0){

            operation = eval(operation)
            updateResult(operation)

        }
        
    }