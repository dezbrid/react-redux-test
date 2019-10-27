export const type='findResult'

const findResult =text=>{
    return{
        type,
        paylosd:text,
    }
}
export default findResult