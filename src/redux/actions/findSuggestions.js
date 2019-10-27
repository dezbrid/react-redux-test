export const type='findSuggestions'

const findSuggestions =text=>{
    return{
        type,
        paylosd:text,
    }
}
export default findSuggestions