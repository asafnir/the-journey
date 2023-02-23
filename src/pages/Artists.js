import React, {useState, useEffect} from "react";
import MainLayout from "layouts/MainLayout"
import { supabase } from 'lib/supabaseClient'
import { Link } from "react-router-dom";

const ArtistCard = (props) => {
    const { artist } = props;
    return (
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: artist.image }}>
                <img src={artist.image} alt={ artist.name}/>
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <p class="text-gray-900 text-2xl leading-none">{ artist.name}</p>
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">{artist.desc}</div>
                </div>
                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" src={artist.artistImage} alt={ artist.name}/>
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{ artist.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Artists = () => {
    const [loading, setLoading] = useState(false)
    const [artists, setArtists] = useState([])

    useEffect(() => {
        getArtists()
    }, [])

    const getArtists = async () => {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('artists_profile')
                .select('*')
            
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setArtists(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  return (
    <MainLayout>
        <div className="flex justify-between pb-16">
              <p className="text-4xl text-white">Artists</p>
               <Link to="/join">
                <button className="group relative flex  justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="inset-y-0 left-0 flex items-center pr-3">
                        <svg fill="white" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
                    </span>
                    Join as an artist
                </button>
                </Link>
        </div>
        <div>
            {artists.map(artist =>
                <Link to={`/artists/${artist.id}`}>
                    <div className="mb-4 hover:">
                        <ArtistCard artist={artist} />
                    </div>
                </Link>
              )}
              {Boolean(!artists.length) && <p className="text-xl  text-center">No Artists yet</p>}
        </div>
    </MainLayout>
  );
}

export default Artists;
