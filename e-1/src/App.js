import { Fragment, useState } from 'react';
import ToDoList from './components/toDoList';
import OldToDoList from './components/oldToDoList';

const App = () => {
  const [reduxPattern, setReduxPatten] = useState('OLD');

  const _setReduxPattern = (pattern) => {
    setReduxPatten(pattern);
  }

  return (
    <Fragment>
      <div className="container">
        <button className="btn btn-info my-2 mx-2" onClick={() => _setReduxPattern("OLD")}>
          Old Redux Pattern
        </button>
        <button className="btn btn-primary" onClick={() => _setReduxPattern("NEW")}>
          New Redux Pattern
        </button>

        {reduxPattern == 'NEW' && <ToDoList />}
        {reduxPattern == 'OLD' && <OldToDoList />}
      </div>
    </Fragment>
  );
}

export default App;
