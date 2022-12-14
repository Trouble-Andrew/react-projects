import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from 'hooks/use-http';
import { Json, Task } from 'interfaces';
import { BASE_URL } from './constants';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const transformTasks = useCallback((data: Json[]) => {
    const loadedTasks: Task[] = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  }, [])

  const httpData = useHttp(
    {
      url: `${BASE_URL}/tasks.json`,
    },
    transformTasks,
  );

  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    fetchTasks();
  }, []);

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
