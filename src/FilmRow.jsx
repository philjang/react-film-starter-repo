// import { Component } from 'react'
// import Fave from './Fave'
// import Poster from './Poster'

// export default class FilmRow extends Component {
//     handleDetailsClick = (film) => {
//         console.log(`Fetching details for ${film}`)
//     }
//     render() {
//         const posterUrl = "https://image.tmdb.org/t/p/w780/"+this.props.film.poster_path
//         return (
            // <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
            //     <Poster url={posterUrl} title={this.props.film.title} />
            //     <div className='film-summary'>
            //         <h1>{this.props.film.title}</h1>    
            //         <p>{this.props.film.release_date.substring(0,4)}</p>
            //     </div>
            //     <Fave />
            // </div>
//         )
//     }
// }

import Fave from './Fave'
import Poster from './Poster'

export default function FilmRow({film, onFaveToggle, isFave, handleDetailsClick}) {
    const posterUrl = "https://image.tmdb.org/t/p/w780/"+film.poster_path
    return (
        <div className="film-row" onClick={() => handleDetailsClick(film)}>
            <Poster url={posterUrl} title={film.title} />
            <div className='film-summary'>
                <h1>{film.title}</h1>    
                <p>{film.release_date.substring(0,4)}</p>
            </div>
            <Fave isFave={isFave} onFaveToggle={()=>{onFaveToggle(film)}} />
        </div>
    )
}