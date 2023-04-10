React project to fetch random fake profiles.
Used to understand state management , custom and inbuild hooks.

The project uses a public API to fetch fake profiles - 
API - https://randomuser.me/api

The code contains the following components
1. useFetchProfiles (custom hook. calls the API mentioned above to fetch "n" profiles)
2. profile_info (displays profile information fetched from the API. It also contains a collapsible component which is controlled by state.)
3. profile_feed (collects profiles fetched from the API and passes them onto the profile info component via props.)
4. loader (the loader is displayed while profiles are being fetched from the API)
5. functional components in contrast to class based components.
