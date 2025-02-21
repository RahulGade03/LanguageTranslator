import { useState, useEffect, useRef } from 'react'
import './App.css'
import Title from './components/Title'
import Languages from './components/Languages'

function App() {
  const [toLang, setToLang] = useState ('');
  const [fromLang, setFromLang] = useState ('');
  const [translation, setTranslation] = useState('');
  const dataRef = useRef();
  const fromLangRef = useRef();
  const toLangRef = useRef();

  async function fetchData() {
    let a = await fetch(`https://api.mymemory.translated.net/get?q=${dataRef.current.value}&langpair=${fromLangRef.current.value}|${toLangRef.current.value}`)
      a = await a.json()
      return a.responseData.translatedText
  }

  async function handleTranslate() {
    let a = await fetchData()
    setTranslation(a);
  }

  return (
    <div className='bg-[#B7E4C7] w-screen h-screen flex flex-col items-center justify-start'>
      <Title />
      <div className="App bg-[#52B788] flex justify-center items-center w-[75vw] h-[60vh] rounded-2xl">
        <div className="mainArea flex flex-col h-full w-full justify-around">
          <div className="translateArea flex gap-30 justify-center w-full">
            <div className="from bg-[#2D6A4F] rounded-3xl p-4 w-[40%]">
              <input type="text" ref={dataRef} className='w-full text-white placeholder:text-gray-300 resize-none outline-none' placeholder="Translate here..."/>
            </div>
            <div className="to bg-[#2D6A4F] rounded-3xl p-4 w-[40%]">
              <input type="text" value={translation} className='w-full text-white placeholder:text-gray-300 resize-none outline-none' placeholder="Translation will be..." readOnly/>
            </div>
          </div>
          <div className="functionality flex justify-around">
            <div className="from bg-[#2D6A4F] rounded-2xl">
              <select ref={fromLangRef} value={fromLang} onChange={(e)=>{setFromLang(e.target.value)}} className='outline-none p-2 text-white'>
                <Languages />
              </select>
            </div>
            <div className="exchangeIcon">
              <i>
              </i>
            </div>
            <div className="to bg-[#2D6A4F] rounded-2xl">
              <select ref={toLangRef} value={toLang} onChange={(e)=>{setToLang(e.target.value)}} className='outline-none p-2 text-white'>
                <Languages />
              </select>
            </div>
          </div>
          <div className='flex justify-center'>
            <button id="translateBtn" className='bg-[#081C15] w-[300px] text-white p-3 rounded-3xl font-bold' onClick={handleTranslate}>
              TRANSLATE
            </button>
          </div>
        </div>
        {/* <div className="translationHistory">
        <h2>Translation History</h2>
        <ul>
          {translations.map((translation, index) => (
            <li key={index}>
              <p>
                <strong>Original:</strong> {translation.originalText}
              </p>
              <p>
                <strong>Translated:</strong> {translation.translatedText}
              </p>
            </li>
          ))}
        </ul>
      </div> */}
      </div>
    </div>
  )
}

export default App
