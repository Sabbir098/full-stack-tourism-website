import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import AuthProvider from "./Context/AuthProvider";
import ContactUs from "./Pagess/ContactUs/ContactUs";
import Gallery from "./Pagess/Gallery/Gallery";
import Login from "./Pagess/Login/Login";
import NotFound from "./Pagess/NotFound/NotFound";
import Services from "./Pagess/Servicess/Services";
// import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
function App() {
  return (
    <div className="App">
     <AuthProvider>
        
     <Router>
        <Header></Header>
      
        <Routes>

        <Route path="/" element={<Banner></Banner> } />
        <Route path="home" element={<Banner></Banner> } />
        <Route path="services" element={<Services></Services> } />
         <Route path="about us" element={ <ContactUs></ContactUs>}/>
         <Route path="gallery" element={ <Gallery></Gallery>}/>
         <Route path="contact-us" element={ <ContactUs></ContactUs>}/>
         <Route path="login" element={ <Login></Login>} />  
         <Route path="*" element={<NotFound></NotFound> } />  
        </Routes>
        
      </Router>

     </AuthProvider>
    </div>
  );
}

export default App;
