import React from 'react'
import OutputForm from './components/OutputForm';
import DateTime from './components/DateTime';
import DialogBox from './components/DialogBox';

const App = () => {
  return (
      <div>
        <DateTime/>
        <OutputForm/>
        <DialogBox/>
      </div>
  )
}

export default App