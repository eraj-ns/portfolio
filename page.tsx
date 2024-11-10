import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import pic from "../app/public/InShot_pkg.jpg";

//import image from "next/image";
export default function Home() {
  return(
    // <div>
    //   <h1>This is class 2 of next js</h1>
    // </div>
     <div className="firstcontainer">
      <Header/>
      <div className="footer">
        <Footer />
        {/* Hello everyone.
        <br />
        This is Home Page. */}
      </div>
      <div className="image">
      <Image src={pic} alt="pic" height={150} width={350} />
      </div>
   </div>
  );
}
