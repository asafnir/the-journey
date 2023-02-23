import React,  {useState, useEffect} from "react";
import MainLayout from "layouts/MainLayout"
import JourneyCard from "components/JourneyCard"
import { supabase } from 'lib/supabaseClient'

const Journeys = () => {
    const [loading, setLoading] = useState(true)
    const [journeys, setJourneys] = useState([])

    useEffect(() => {
        getAllJourneys()
    }, [])

    const getAllJourneys = async () => {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('journeys')
                .select('*')
            
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setJourneys(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  
  return (
    <MainLayout>
      <div className="pb-16">
        <p className="text-4xl text-white text-center">Shared Journeys</p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {journeys.map(journey => 
          <JourneyCard journey={ journey } />
        )}
      </div>
    </MainLayout>
  );
}

export default Journeys;
