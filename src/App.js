import './App.scss';
import InputPanel from './components/InputPanel';
import NoteList from './components/NoteList';
import {useSelector} from 'react-redux'
import Empty from './components/Empty';

function App() {
  let contents = useSelector(state => state)
  return (
      <>
        <InputPanel />
        {contents.length >0 ? <NoteList /> : <Empty/>}
      </>
  );
}

export default App;
