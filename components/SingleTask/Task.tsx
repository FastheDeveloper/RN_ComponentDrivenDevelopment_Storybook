// import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { styles } from './style'

interface TaskDetails {
  id: number
  title: string
  state: string
}
interface Task {
  task: TaskDetails
  onArchiveTask: (id: number) => void
  onPinTask: (id: number) => void
}

export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: Task) => {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== 'TASK_ARCHIVED' ? (
          <AntDesign name="checksquareo" size={24} color="#26c6da" />
        ) : (
          <AntDesign name="checksquare" size={24} color="#26c6da" />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Input Title"
        value={title}
        editable={false}
        style={state === 'TASK_ARCHIVED' ? styles.listItemInputTaskArchived : styles.listItemInputTask}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <AntDesign name="star" size={24} color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'} />
      </TouchableOpacity>
    </View>
  )
}
