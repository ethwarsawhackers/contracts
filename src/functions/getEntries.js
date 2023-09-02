module.exports = async function (state, action, handler) {
    return { result:
        (action.input.start || action.input.max) 
        ? state.entries.slice(
           (action.input.start || 0),
           (action.input.start || 0) + (action.input.max || 0)
           )
        :state.entries
       }
}
/*function-description
Returns all entries to trivia submitted, use `start` and `max` fields in input for pagination. 
function-description*/