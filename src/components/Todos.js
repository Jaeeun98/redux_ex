import React, {useState} from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }){
    return(
        <li
            //todo가 done이면 textDecoration이 line-through 
            style={{
                textDecoration : todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    )
})

const TodoList = React.memo(function TodoList({todos, onToggle}){
    return(
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />)
            }
        </ul>
    )
})

function Todos({ todos, onCreate, onToggle }){
    //모든 데이터를 redux에서 관리할 필요 없음
    //필요 시 로컬에서 hook을 사용하는 것도 괜찮음
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder='할일을 입력하세요'/>
                <button type='submit'>등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    )
}

export default Todos;