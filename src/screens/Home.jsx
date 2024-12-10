import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from '../components/Card'
import Coursel from "../components/Couser";

const Home = () => {
  return (
    <>
       {/* NavBar */}
      <Navbar />
      <Coursel/>

       {/* Body */}
       <div className="d-flex  flex-wrap">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
       </div>
        
       {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
