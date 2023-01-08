import Header from "./features/header/Header";
import TodoList from "./features/todos/TodoList";
import Footer from "./features/footer/Footer";
// import produce from "immer"

// const baseState = [
//     {
//         title: "Learn TypeScript",
//         done: true
//     },
//     {
//         title: "Try Immer",
//         done: false
//     }
// ]

// const nextState = produce(baseState, draftState => {
//     draftState.push({title: "Tweet about it"})
//     draftState[1].done = true
// })

// console.log(nextState);

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
