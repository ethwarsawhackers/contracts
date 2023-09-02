module.exports = async function (state, action, handler) {
    return { result:
         state.metadata
        }
}
/*function-description
Get questions to trivia, use `start` and `max` fields in input for pagination. 
function-description*/