import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, getCountFromServer, Query, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase.config';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        top: 10
    }
})

const TaskCounter = () => {
    const [taskCount, setTaskCount] = useState(0);

    useEffect( () =>{
        const taskRef = collection(db, 'tasks');

        //crear consulta para obtener el total de documentos en collection
        const queryRef = query(taskRef);

        //Ver cambios en la consulta
        const unsuscribe = onSnapshot(queryRef, (snapshot) => {
            //actualizar la cantidad de documentos
            setTaskCount(snapshot.size);
        });
        return() => unsuscribe();
    }, []);

    return (
        <View>
            <Text style={styles.text}> {taskCount} </Text>
        </View>
    );

};

export default TaskCounter;