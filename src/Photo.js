import React, {Component} from 'react';
import axios from 'axios';

class Photo extends Component{
    state = {
        photo:[],
        loading:true
    };
    componentDidMount(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let photo_id = params.get('id');
        axios.get(`https://api.unsplash.com/photos/${photo_id}?client_id=dcf8f764924e1d92e5b05bc53566cad52127a9d0ea98297f44896dea62cd4cae`)
            .then(res =>{
                this.setState({
                    photo:res.data,
                    loading:false
                })
            })
    }
    render(){
        console.log(this.state.photo)
        return(
            <h3>Single Photo</h3>
        )
    }
};
export default Photo;