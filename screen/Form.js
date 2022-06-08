import { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Provider, Portal, Modal, Dialog, Text } from "react-native-paper";

import DateTimePicker from '@react-native-community/datetimepicker';

export default function Form() {

    const [formEntries, setFormEntries] = useState({
        name: "",
        email: "",
        dob: new Date(Date.now()),
    })
    const [errors, setErrors] = useState({
        isNameNull: true,
        isNotEmail: true,
        hasNonAlpha: true
    })

    const [isInfoDialogVisible, setInfoDialogVisible] = useState(false)

    const validateName = (val) => {

        let isNameNull = true
        let hasNonAlpha = true

        // Must not be null
        if (val == null || /^$/.test(val)) {
            console.log("Has nothing")
            isNameNull = true
        } else {
            console.log("Has letters")
            isNameNull = false
        }

        // Must contain letters only (&spaces)
        if (!/^[a-zA-Z\s]+$/.test(val)) {
            hasNonAlpha = true
        } else {
            hasNonAlpha = false
        }

        setErrors({
            ...errors,
            hasNonAlpha,
            isNameNull
        })
        setFormEntries({ ...formEntries, name: val })
    }

    const validateEmail = (val) => {
        setFormEntries({ ...formEntries, email: val })

        // Credit to emailregex.com/RFC5322 
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {

            setErrors({
                ...errors,
                isNotEmail: false
            })
        } else {
            setErrors({
                ...errors,
                isNotEmail: true
            })
        }
    }

    const setDob = (event, date) => {
        setFormEntries({ ...formEntries, dob: date })
    }

    const submit = () => {
        // Before submission, do error checks
        if (Object.values(errors).findIndex((value) => value == true) != -1) {
            console.log("Has errors")
        } else {
            setInfoDialogVisible(true)
        }

    }

    useEffect(() => {

        console.log(JSON.stringify(formEntries))
        console.log(JSON.stringify(errors))
        return () => {

        };
    }, [formEntries, errors]);


    return (
        <Provider>
            <View style={styles.container}>

                <View >
                    <TextInput mode='outlined' style={styles.formInput} value={formEntries.name} label="Name" maxLength={50} onChangeText={validateName} />
                    <TextInput mode='outlined' style={styles.formInput} value={formEntries.email} label="Email" onChangeText={validateEmail} />
                    <View style={styles.dobContainer}>
                        <Text>Date of Birth</Text>
                        <DateTimePicker style={styles.dobPicker} value={formEntries.dob} mode='date' onChange={setDob} maximumDate={new Date(Date.now())} />

                    </View>


                    <Button mode='contained' onPress={submit} style={styles.submitButton}>Submit</Button>
                </View>

                <Portal>
                    <Dialog visible={isInfoDialogVisible} onDismiss={() => { setInfoDialogVisible(false) }}>
                        <Dialog.Title >User's Info</Dialog.Title>
                        <Dialog.Content >
                            <Text>Name: {formEntries.name}</Text>
                            <Text>Email: {formEntries.email}</Text>
                            <Text>Date Of Birth: {`${formEntries.dob.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(formEntries.dob)} ${formEntries.dob.getFullYear()} `}</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => { setInfoDialogVisible(false) }}>Close</Button>
                        </Dialog.Actions>
                    </Dialog>

                </Portal>

            </View>
        </Provider>

    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingVertical: 18,
        paddingHorizontal: 24
    },
    dobContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 24,
    },
    dobPicker: {
        position: 'absolute',
        right: 0,
        left: 0

    },
    formInput: {
        marginVertical: 12,
    },
    submitButton: {
        alignSelf: 'flex-start',
        marginTop: 18
    }
});
