export const type='findResult'

const findResult =text=>{
    return{
        type,
        payload:text,
    }
}
export default findResult