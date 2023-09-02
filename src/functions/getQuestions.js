module.exports = async function (state, action, handler) {
    return { result:
         (action.input.start || action.input.max) 
         ? state.questions.slice(
            (action.input.start || 0),
            (action.input.start || 0) + (action.input.max || 0)
            )
         :state.questions
        }
}
/*function-description
Get questions to trivia, use `start` and `max` fields in input for pagination. 
function-description*/