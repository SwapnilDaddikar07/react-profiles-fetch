const useFetchProfiles = () => {
    const fetchProfiles = async (numberOfProfiles) => {
        const url = `https://randomuser.me/api?results=${numberOfProfiles}`;
        let profiles = await fetch(url);
        return profiles.json();
    };
    return {fetchProfiles};
};

export default useFetchProfiles;