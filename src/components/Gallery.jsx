import { Component } from 'react'
import FirstCollection from './FirstCollection'
import SecondCollection from './SecondCollection'
import ThirdCollection from './ThirdCollection'

class Gallery extends Component {
    render(){
        return (
            <div>
            <FirstCollection/>
            <SecondCollection/>
            <ThirdCollection/></div>
        )
    }
}

export default Gallery