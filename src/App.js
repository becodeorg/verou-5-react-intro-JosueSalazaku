import HeaderComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/HeaderComponents.js'
import FooterComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/FooterComponents.js'
import TodoComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/TodoComponents.js'


function App() {
  return (
    <div className="App h-screen bg-zinc-900 flex flex-col">
      <HeaderComponents/>
      <main className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-white text-6xl pb-20'>My to do's</h1>
        
      <TodoComponents/>
      </main>
      <FooterComponents/>

    </div>
  );
}

export default App;
