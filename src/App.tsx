import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from 'hooks/use-http';
import { Task } from 'interfaces';
import { BASE_URL } from './constants';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj: Task[]) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: `${BASE_URL}/tasks.json`,
        body: null,
        method: '',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      },
      transformTasks,
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;
