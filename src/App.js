import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  const personalDetails = {
    name: "Danaendraraj R",
    location: "Tiruchengode,India",
    email: "rajdr039@gmail.com",
    availability: "Open for work",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
