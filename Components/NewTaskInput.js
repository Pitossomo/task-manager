import React, { useState } from "react";
import { View } from "react-native";

export default NewTaskInput = () => {
  const [value, setValue] = useState("")
  const onChangeText = (text) => {
    setValue(text)
  }

  return (
    <View>
      <View>
        <TextInput placeholder="Add Task..." onChangeText={onChangeText} />
      </View>
      <TouchableOpacity onPress={() => {
        console.log('button clicked')
      }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}