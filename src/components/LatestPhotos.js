import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class LatestPhotos extends React.Component{

    state = {
        photos:[],
        page:1,
        search_query:'',
        searching:false,
        totalFound:'',
        totalPages:''
    };

    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/?client_id=dcf8f764924e1d92e5b05bc53566cad52127a9d0ea98297f44896dea62cd4cae&per_page=16&page='+this.state.page)
            .then(res => {
                this.setState({photos:res.data})
            });
        this.setState({
            page: this.state.page + 1
        });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        console.log('[Inside the componentDidMount method]: ' + this.state.page);
    };

    loadMore = () => {
        this.setState({
            page: this.state.page + 1
        });
        axios.get('https://api.unsplash.com/photos/?client_id=dcf8f764924e1d92e5b05bc53566cad52127a9d0ea98297f44896dea62cd4cae&per_page=16&page='+this.state.page)
            .then(res => {
                this.setState({photos:res.data})
            });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    serachQuery = (e) => {
        this.setState({
            search_query:e.target.value
        })
    };
    searchTrigger = (e) => {
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos/?client_id=dcf8f764924e1d92e5b05bc53566cad52127a9d0ea98297f44896dea62cd4cae&per_page=16&query='+this.state.search_query+'&page='+this.state.page)
            .then(res => {
                this.setState({
                    photos:res.data.results,
                    searching:true,
                    page:2,
                    totalFound:res.data.total,
                    totalPages:res.data.total_pages

                })
            });
    };
    loadSearhedNextPage = (e) => {
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos/?client_id=dcf8f764924e1d92e5b05bc53566cad52127a9d0ea98297f44896dea62cd4cae&per_page=16&query='+this.state.search_query+'&page='+this.state.page)
            .then(res => {
                this.setState({
                    photos:res.data.results,
                    searching:true,
                    page:this.state.page + 1

                })
            });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };

    render(){
        console.log('[Inside the render method]: ' + this.state.page);
        let searchHeading = '';
        let searchBtnMarkup = '';
        let searchInfo = '';
        if(this.state.searching){
            searchHeading = <h2>Your have searched with <i>{this.state.search_query}</i></h2>
            searchBtnMarkup =<button className='btn btn-success' onClick={this.loadSearhedNextPage}>Load Page {this.state.page}</button>
            searchInfo = `Total found ${this.state.totalFound} | Page ${this.state.page - 1} of ${this.state.totalPages}`
        }else{
             searchHeading = <h2>Latest Photos</h2>;
            searchBtnMarkup =<button className='btn btn-success' onClick={this.loadMore}>Load Page {this.state.page}</button>
            searchInfo = '';
        }
        return (
            <React.Fragment>
                <div className="row top-heading">
                    <div className="col my-auto">
                        <h2>{searchHeading} {searchInfo}</h2>
                    </div>
                    <div className="col col-auto my-auto">
                        <form onSubmit={this.searchTrigger}>
                            <input type='text' value={this.state.search_query} onChange={this.serachQuery} placeholder='Search Keyword' />
                            <input type='submit'  value='search' />
                        </form>
                    </div>
                </div>

                <div className="row">


                    {
                        this.state.photos.map(photo => {
                            return (
                                <div key={photo.id} className="col-lg-3">
                                    <div className="single-photo-item">
                                        <Link className="d-block" to={'photo?id='+photo.id}>
                                            <div className="photo-wrapper">
                                                <img src={photo.urls.small} alt={photo.alt_description} />
                                            </div>
                                            <h5>{photo.description ? photo.description: 'Picture' }</h5>
                                            <p className="cat-name">by - {photo.user.name}</p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-md-12">
                    <div className="load-more-btn text-center">
                        {searchBtnMarkup}
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default LatestPhotos;