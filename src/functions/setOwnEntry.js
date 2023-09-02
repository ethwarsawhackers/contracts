
module.exports = async function (state, action, handler) {
    if(state.metadata.maxEntries!=0&&state.entries.length>=state.metadata.maxEntries){
        throw new ContractError("Sorry, trivia already received max amount of entries.")
    }
    state.entries.push({
        author:action.caller,
        questions:action.input.questions
    })
    return {state}
}
/*function-description
Submit your answers to the trivia.
function-description*/