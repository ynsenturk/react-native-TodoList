import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import Colors from './src/styles/Colors';
import FloatingButton from './src/components/FloatingButton';
import AddTaskModal from './src/components/AddTaskModal';
import TaskCard from './src/components/TaskCard';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);
  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }
  function addTask(taskContent: string) {
    console.log(taskContent);
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find(
      (todo: any) => todo.task.trim().toLowerCase() === taskContentCheck,
    );
    console.log(checkDublicate);
    if (taskContentCheck === '' || taskContentCheck === undefined) {
      Alert.alert('Lütfen geçerli bir görev giriniz');
    } else {
      if (checkDublicate) {
        Alert.alert('Bu görevi daha önce eklediniz.');
      } else {
        const newTask = {
          id: toDoList.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        setToDoList((oldTasks: any) => [...oldTasks, newTask]);
        setModalVisible(false);
      }
    }
  }
  function deleteTask(task: any) {
    if (task.isCompleted === false) {
      const newList = toDoList.map((todo: any) => {
        if (todo.id === task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setToDoList(newList);
    } else {
      setToDoList(toDoList.filter((item: any) => item.id !== task.id));
    }
  }
  const renderTodoList = ({item}: any) => (
    <TaskCard
      item={item}
      isCompleted={item.isCompleted}
      onDelete={() => deleteTask(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do List</Text>
      <FlatList data={toDoList} renderItem={renderTodoList} />
      <FloatingButton onPress={handleModalVisible} />
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultDarkColor,
    flex: 1,
    padding: 20,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontSize: 25,
    marginTop: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default App;
