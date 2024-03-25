import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

function App() {
  

  return (
    <>
    <ChatEngine
      height = "100vh"
      projectID = "fd53ccfc-3950-4094-8520-21d7839f7871"
      userName = "Saqib"
      userSecret="Saqib@415160"
      renderChatFeed = {(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
    />

    </>
  )
}

export default App
