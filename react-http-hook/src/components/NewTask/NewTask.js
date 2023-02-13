import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHTTP from '../../hook/use-HTTP';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHTTP();

  const url = 'https://react-http-tests-5c0a0-default-rtdb.firebaseio.com/tasks.json';

  const enterTaskHandler = async (taskText) => {
    const requestConfig = {
      url: url,
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const createTask = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }
    // we can use .bind(null, taskText) here
    sendTaskRequest(requestConfig, createTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
