
module.exports = async function (state, action, handler) {
    if(action.caller!=state.operator){
        throw new ContractError("Not operator")
    }else if(!action.input.metadata){
        throw new ContractError("No metadata provided.")
    }
    state.metadata=action.input.metadata
    return {state}
}
/*function-description
Edit metadata, operator only.
function-description*/