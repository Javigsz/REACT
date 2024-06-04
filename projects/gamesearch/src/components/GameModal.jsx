import {useState} from 'react'

export function GameModal ({modal,newModal}) {

    const [i,setI] = useState(0)

    const images = modal.short_screenshots

    const backButton = () => {
        newModal();
    }

    const goNext = () => {
        if(images[i+1]) setI(i+1)
    }

    const goPrevious = () => {
        if(images[i-1]) setI(i-1)
    }

    console.log(modal.genres)
    console.log(modal.platforms)

    return(
        <>
            <div className="modal">
                <h2>{modal.name}</h2>
                <p><b>Release:</b> {modal.released}</p>
                {modal.platforms && <p><b>Platforms:</b> {modal.platforms.map((p) => p.platform.name).join(', ')}</p>}
                <div><b>Genres: </b> 
                    {modal.genres && modal.genres.map(p => 
                    <span> &nbsp;{p.name}</span>
                )}</div>
                {modal.stores && <p><b>Stores:</b> {modal.stores.map((p) => p.store.name).join(', ')}</p>}
                {modal.metacritic && <p><b>Metacritic:</b> {modal.metacritic}</p>}
                {images.length>0 
                    ?   <div className="gameShortImages">
                            <button onClick={goPrevious}>&#8592;</button>
                            <img src={images[i].image}/>
                            <button onClick={goNext}>&#8594;</button>
                        </div>
                    :   <img src='../game.jpg' />
                }
                <button onClick={backButton}>Back</button>
            </div>
            
        </>
    )
}