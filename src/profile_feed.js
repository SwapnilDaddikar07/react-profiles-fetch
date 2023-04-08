import {useState, useEffect} from "react";
import './useFetchProfiles'
import useFetchProfiles from "./useFetchProfiles";
import ProfileInfo from "./profile_info";

const ProfileFeed = () => {
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {fetchProfiles} = useFetchProfiles();

    useEffect(() => {
        (async () => {
            const allProfiles = await fetchProfiles(5);
            setProfiles(allProfiles);
            setIsLoading(false);
        })();
    }, []);

    return (
        (!isLoading)
            ? profiles.results.map((profile) => (
                <ProfileInfo
                    displayPhoto={profile.picture.large}
                    firstName={profile.name.first}
                    lastName={profile.name.last}
                    gender={profile.gender}
                    email={profile.email}
                    phone={profile.phone}
                />
            )) :
            <div className="loaderContainer">
                <img className="loaderImage" src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif"/>
            </div>
    );
};

export default ProfileFeed;