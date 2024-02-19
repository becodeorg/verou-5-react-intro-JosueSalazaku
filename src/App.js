import HeaderComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/HeaderComponents.js'
import FooterComponents from '/Users/josuesalazaku/Developer/BeCode/Summerpastures/verou-5-react-intro-josuesalazaku/src/Components/FooterComponents.js'
import Todolist from './Components/Todolist.js'


function App() {
  return (
    <div className="App h-screen bg-zinc-900 flex flex-col">
      <HeaderComponents/>
      <main className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-white text-6xl pb-20'>My to do's</h1>
        
        <Todolist />
        <>
        <div className="flex justify-evenly items-center space-x-3">
             <input type="text" className="rounded-md h-8 w-52 p-2" />
             <button className="my-5 p-2 rounded-md font-bold text-white border border-green-600">ADD</button>
             <button className="my-5 p-2 rounded-md font-bold text-white border border-red-600">DELETE</button>
       </div>
        </>
      </main>
      <FooterComponents/>

    </div>
  );
}

export default App;
