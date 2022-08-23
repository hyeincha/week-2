import Header from "../header/Header";
import Form from "../form/Form";
import Layout from "../layout/Layout";
import List from "../list/List";

const TodoList = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default TodoList;
