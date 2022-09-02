import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ThirdCollection extends Component {

    state= {
        movies: [],
    }

    componentDidMount = () => {
        this.fetchReservations()
    }

    fetchReservations = async() => {
        try{
            let response = await fetch('http://www.omdbapi.com/?apikey=455cbba9&s=Fast+and+Furious' /*,
            {
                method: 'GET'
            }*/)

            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setTimeout(() => {
                    this.setState(
                    {
                    movies: data.Search,}
                )
                }, 500);
                
            }else{
                alert('something went wrong')
                this.setState({
                    loading:false,
                    error:true
                })
            }

        }catch(error){
            console.log(error)
            this.setState({
                loading:false,
                error:true
            })
        }
    }

    render(){
        return(        

            <Container className='mb-10'>
                <Row className="justify-content-center">
                        <h4 className='text-white start'>New Releases</h4>
                            

                            {
                                this.state.movies.map(movie => (
                                    <Col key={movie._id}>
                                        <img src={movie.Poster} alt="" />
                                    </Col>
                                ))
                            }


                        
                    
                </Row>
            </Container>
        )
    }
}

export default ThirdCollection