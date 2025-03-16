import TabHeader from "../tab-header";
import TodoTable from "./components/TodoTable";

const List = () => {

  return (
    <div id="list-content">
      <TabHeader
      />
      <hr className="my-6 text-stone-400" />
      <TodoTable tasks={[]} />
    </div>
  );
};

export default List;
