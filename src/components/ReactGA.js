import ReactGa from "react-ga";

function initializeAnalytics(){
    ReactGa.initialize("UA-156260386-1");
    ReactGa.pageview('/');
}

export default initializeAnalytics;