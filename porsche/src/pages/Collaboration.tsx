import img1 from './../assets/dualipaxporsche/dl.jpeg'
import img2 from './../assets/dualipaxporsche/dlp2.jpg'
import img3 from './../assets/dualipaxporsche/dlp3.jpg'
import img5 from './../assets/dualipaxporsche/dlp5.jpg'
import img6 from './../assets/dualipaxporsche/dlp6.jpg'
import img8 from './../assets/dualipaxporsche/dlp8.jpeg'

export const Collaboration = () => {
    return(
        <div>
            <div className='m-5 grid justify-center'>
                <h2 className='font-marker'>Discovering Porsche with Dua Lipa</h2>
                <p>Global pop phenomenon Dua Lipa starts her Porsche journey with all the feels</p>
            </div>
            <div className="m-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div>
                    <img src={img1} alt="" className="rounded-lg shadow-md" />
                    <h2 className='m-3 font-marker'>Grammy Award-winning British singer-songwriter Dua Lipa as she visits the Porsche Experience Center in Los Angeles</h2>
                </div>
                <img src={img2} alt="" className="rounded-lg shadow-md" />
                <img src={img5} alt="" className="rounded-lg shadow-md" />
                <img src={img8} alt="" className="rounded-lg shadow-md" />
                <div>
                    <img src={img6} alt="" className="rounded-lg shadow-md" />
                    <h2 className='font-marker m-3'>Dua Lipa meets a classic Porsche 911</h2>
                    <p className='m-3'>It’s time for a spot of Porsche history for Dua – and it begins in the form of a 911 Carrera (G-Series) </p>
                </div>
                <img src={img3} alt="" className="rounded-lg shadow-md" />
            </div>     

        <div className="m-5 flex justify-evenly bg-black text-white p-5">
            <div>
                <h2 className='my-3 font-marker'>Porsche X Dua Lipa</h2>
                <video className="border rounded-xl" width="380" height="180" controls>
                    <source src="https://v1.pinimg.com/videos/mc/720p/86/8f/00/868f00a8705becfefb1937999a454f7f.mp4" type="video/mp4" />
                </video>   
            </div>
            <div>
                <h2 className='my-3 font-marker'>Porsche Sally Special</h2>
                <video className="border rounded-xl" width="380" height="180" controls>
                    <source src="https://v1.pinimg.com/videos/mc/720p/53/08/b4/5308b4aee7fa5f863ca030139ff13f27.mp4" type="video/mp4" />
                </video>              
            </div>
        </div>
        </div>
    )
}