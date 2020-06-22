import React from 'react';
import Layout from './hoc/Layout/Layout';
import Todo from './containers/Todo/Todo';

function App() {
  return (
    <div>
      <Layout>
        <Todo />
      </Layout>
    </div>
  );
}

export default App;
