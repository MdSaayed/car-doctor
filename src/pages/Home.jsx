import CoreFeature from "../components/Feature/CoreFeature";
import AboutUs from "../components/about us/AboutUs";
import Locations from "../components/location/Locations";
import Services from "../components/services/Services";
import Slider from "../components/slider/Slider";
import TeamMebers from "../components/team members/TeamMebers";
import Products from "../products/Products";


const Home = () => {
    return (
        <div>
            <Slider />
            <AboutUs />
            <Services />
            <Locations />
            <Products />
            <TeamMebers />
            <CoreFeature />
        </div>
    );
};

export default Home;