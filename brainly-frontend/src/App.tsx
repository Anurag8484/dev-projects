import './App.css';
import { Button } from './components/ui/Button';
import { FaPlus } from 'react-icons/fa6';
import { FiShare2 } from 'react-icons/fi';


const App = () =>{

  return(
    <div className=''>
    <Button onClick={()=>{}} startIcon={<FaPlus className='' />} variant='secondary' text='Add Content' size='md' />
    <Button  onClick={()=>{}}  startIcon={<FiShare2 className='size-5' />} variant='primary' text='Share Brain' size='sm' />
    <Button   onClick={()=>{}} startIcon={<FaPlus className='' />}   variant='primary' text='Share' size='lg' />
    </div>
  )
}




export default App;