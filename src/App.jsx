import React from 'react';
import './App.css';
import { useTodosPoll } from './custom-hooks/useTodosPoll';
import { useTodos } from './custom-hooks/useTodos';
import { useIsOnline } from './custom-hooks/useIsOnline';
import { useMousePointer } from './custom-hooks/useMousePointer';
import { useDimensions } from './custom-hooks/useDimensions';


function App() {
  const {todos,loading} = useTodosPoll(5);
  const {todos2,loading2} = useTodos();
 const online = useIsOnline();
 const {x,y} = useMousePointer();
 const {width,height} = useDimensions();
  if(loading)return <>"Loading.......""</>
  return (
    <>
    <nav>Your mouss position is {x} {y}</nav>
    <nav>Your  dimensons are {width}PX {height}PX</nav>
    {todos2 && todos2.map((todo) => <Track key={todo.id} todo={todo} />)}

    <br/>
     {online && <div>yayy you are online</div> }
     {!online && <div>oops you are offline</div>}
     
      {todos && todos.map((todo) => <Track key={todo.id} todo={todo} />)}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
