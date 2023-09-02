
module.exports = async function (state, action, handler) {
    if(action.caller!=state.operator){
        throw new ContractError("Not operator")
    }else if(!action.input.question){
        throw new ContractError("No question provided.")
    }
    let questionIndex=state.questions.find(q=>q.id==action.input.question.id)
    if(questionIndex){
    state.questions[questionIndex]=action.input.question
    } else{
        state.questions.push(action.input.question)
    }

    return {state}
}
/*function-description
Edit single question, operator only.
function-description*/