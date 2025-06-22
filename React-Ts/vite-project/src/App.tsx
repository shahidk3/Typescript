import Box from "./components/box";

function App() {
  return (
    <>
      <div>
      <Box heading = {"Hello World"} count={234} func1={(a: string) => alert(a)}  />
       
      </div>
    </>
  );
}
export default App
