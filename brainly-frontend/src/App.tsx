import './App.css';
import { Button } from './components/ui/button';
import { PlusIcon } from './components/icons/PlusIcon';


const App = () =>{

  return(
    <div className='flex'>
    <Button startIcon={<PlusIcon size='sm' />} variant='secondary' text='Add' size='sm' />
    <Button startIcon={<PlusIcon size='md' />} variant='primary' text='Share' size='md' />
    <Button  startIcon={<PlusIcon size='lg' />} variant='primary' text='Share' size='lg' />
    </div>
  )
}




export default App;