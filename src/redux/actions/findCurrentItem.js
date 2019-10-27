export const type='findCurrentItem'

const findCurrentItem =id=>{
    return{
        type,
        paylosd:id,
    }
}
export default findCurrentItem