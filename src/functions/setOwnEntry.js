module.exports = async function (state, action, handler) {
    state.entries.push({
        author:action.caller,
        questions:action.input.questions
    })
    return {state}
}
/*function-description
Submit your answers to the trivia.
function-description*/