import React, {useState, useEffect} from "react";
import MainLayout from "layouts/MainLayout"
import JourneyCard from "components/JourneyCard"
import { supabase } from 'lib/supabaseClient'
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/Auth'

const MyJourneys = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)
    const [myJourneys, setMyJourneys] = useState([])

    useEffect(() => {
        getMyJourneys()
    }, [])

    const getMyJourneys = async () => {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('journeys')
                .select('*')
                .eq('user_id', user.id)
            
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setMyJourneys(data)
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
                <p className="text-2xl text-white text-center">My Journeys</p>
            </div>
            <div>
                {myJourneys.map(journey => {
                    <JourneyCard journey={journey}/>
                })}
            </div>
        </MainLayout>
    );
}

export default MyJourneys;
