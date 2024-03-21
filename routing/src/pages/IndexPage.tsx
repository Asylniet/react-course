import prsch from './../assets/models/prsch.png'

export const IndexPage = () => {
    return(
        <div className="my-4 grid justify-center">
            <h2 className='grid my-4 justify-center font-marker'>Welcome to Porsche world </h2>    
            <img src={prsch} alt="911" />
        </div>
    )
}