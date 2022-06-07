
import styled from 'styled-components'

const BorderImage:React.FC=()=>{

    const Div = styled.div`
        max-width:100%;
    `
    const Image= styled.img`
        width:100%;
    `
    return(
        <Div>
            <Image src={'/img/may.jpg'}/>
        </Div>
    )
}
export default BorderImage