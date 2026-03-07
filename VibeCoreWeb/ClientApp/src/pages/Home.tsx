import TodoList from "../components/TodoList";

function Home() {
  return (
    <section className="space-y-8">
      {/* Todo List Section */}
      <div className="mt-16">
        <TodoList />
      </div>
    </section>
  );
}

export default Home;
