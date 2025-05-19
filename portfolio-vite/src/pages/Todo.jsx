import { useState } from 'react';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() === '') return; // 빈 값 방지
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 투두리스트</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button onClick={handleAddTodo} style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
          추가
        </button>
      </div>

      <ul>
        {todos.length === 0 ? (
          <li>할 일이 없습니다!</li>
        ) : (
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        )}
      </ul>
    </div>
  );
}

export default Todo;