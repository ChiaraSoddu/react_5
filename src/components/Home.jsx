import { Component } from 'react';
import Gallery from './Gallery';
import Form from 'react-bootstrap/Form'

class Home extends Component {
    render(){
        return(
            <div className="home">
                <h1 className='text-white' id='select'>TV Shows</h1>
                <Form.Select aria-label="Genres" className='text-white' id='select'>
                    <option className='invisible'>Genres</option>
                    <option value="1" className='text-white'>Comedy</option>
                    <option value="2" className='text-white'>Drama</option>
                    <option value="3" className='text-white'>Thriller</option>
                </Form.Select>
                <Gallery/>
            </div>
        )
    }
}

export default Home