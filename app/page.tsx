import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

export default function Home() {
 
  return (
    <div className="flex flex-col justify-center">
     <Status status="loading"/>         
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading>Oscar goes to Dicaprio</Heading>
     </Oscar>
    </div>
  );
}
