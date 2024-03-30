import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

function App() {
  

  return (
    <>
    <ChatEngine
      height = "100vh"
      projectID = "b1d8f485-70c7-45ef-ba84-41fedd4a3cb5"
      userName = "Saqib"
      userSecret="Saqib@415160"
      renderChatFeed = {(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
    />

    </>
  )
}

export default App
