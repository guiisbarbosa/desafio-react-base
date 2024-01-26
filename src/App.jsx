import './App.css'
import Button from './components/button/button'
import Paragraph from './components/paragraph/paragraph'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore eum dolorem mollitia, corrupti autem dolores assumenda nisi atque odit sunt, placeat animi quo? Hic nemo ex itaque esse dicta.'

function App() {
  return (
    <>
      <Paragraph text={text} color='blue' />
      <Button label='Baixar CV' />
    </>
  )
}

export default App
