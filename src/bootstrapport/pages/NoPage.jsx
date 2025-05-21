import { useLocation } from "react-router-dom";
// import ScrollReveal from "./ScrollReveal"; // Import the ScrollReveal component
import FuzzyText from "./FuzzyText";
export default function NoPage() {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        flexDirection: "column",
        backgroundImage: "linear-gradient(120deg,rgb(36, 33, 25) 0%,rgb(67, 62, 61) 100%)",
        color: "#000",
        padding: "20px",
      }}
    >
      {/* ScrollReveal applied to the 404 message */}
     
        <>
          <p>⚠️ 404 Not Found</p>
          <p>No page exists at <strong>{location.pathname}</strong></p>
          <p>
            "When does a man die? When he is hit by a bullet? No! When he suffers a disease?  
            No! When he ate a soup made out of a poisonous mushroom? No!  
            A man dies when he is forgotten!"
          </p>
        </>
      
      
  
<FuzzyText 
  baseIntensity={0.2} 
  
>
  404
</FuzzyText>
    </div>
  );
}
