// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Menubar from "./components/Menubar"
import axios from "axios"

function App() {
  // const [count, setCount] = useState(0)
  const [news, setNews] = useState([])
  console.log('news: ', news);
    useEffect(() => {
      getNews();
    }, []);
  

  const getNews = async () => {
    try{
      const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-07-28&sortBy=publishedAt&apiKey=37dedf3df9764d869a203f6e9524d5d3');
      setNews(response.data.articles);
    } catch (error){
      console.error(error);
    }

  }


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <Menubar/>
      <div className="pt-5 pb-28"> 
        {news.map((item, index) => (
        <a key={index} href={item?.url} target="_blank">
          <div key={index} className="bg-white p-4 border-gray-300"> 
          <img src={item?.urlToImage} alt={item?.title} className="w-24 h-24 object-cover-rounded"></img>
          <div>
            <h3 className="font-semibold text-lg">{item?.title}</h3>
            <p className="text-sm text-gray-600">{item?.description}</p>
          </div>
       </div>
        </a>
        ))}
      </div>
   </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
   
  )
}

export default App
