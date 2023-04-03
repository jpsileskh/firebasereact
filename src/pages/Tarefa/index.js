import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import database from '../../config/firebaseconfig'
import styles from './style'

export default function Tarefa(){
  const [tarefa, setTarefa] = useState([])

  useEffect(() => {
    database.collection("Tarefas").onSnapshot((query) => {
        const lista = []
        query.array.forEach((doc) => {
            lista.push({...doc.data(), id: doc.id })
        });
        setTarefa(lista)
    })

  }, [])

  return (
    <View>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={tarefa}
            renderItem={(item) => {
                <View>
                    <Text>
                        {item.descricao}
                    </Text>
                </View>
            }}
        />
    </View>
  )
}