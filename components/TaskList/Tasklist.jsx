
import { Task } from '@components/SingleTask/Task';

import { FlatList,  Text, View } from 'react-native';
import { styles } from '@components/SingleTask/style';

import React from 'react';
import { LoadingRow } from './LoadingRow';

// @ts-ignore
export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <View style={styles.listItems}>
        <LoadingRow/>
        <LoadingRow/>

        <LoadingRow/>
        <LoadingRow/>

      </View>
    );
  }

  if (tasks.length === 0) {
    return (
      <View style={styles.listItems}>
        <Text>empty</Text>
      </View>
    );
  }

  const tasksInOrder = [
    // @ts-ignore
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    // @ts-ignore
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <View style={styles.listItems}>
    <FlatList
      data={tasksInOrder}
      keyExtractor={(task) => task.id}
      renderItem={({ item }) => (
        <Task key={item.id} task={item} {...events} />
      )}
    />
  </View>
  );
};