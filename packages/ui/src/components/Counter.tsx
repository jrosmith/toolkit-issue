import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, selectCount } from "../state/slices/counter"
import { Button } from "../buttons/Button"
import { View, Text, StyleSheet } from "react-native"

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const dec = () => dispatch(decrement())
    const inc = () => dispatch(increment())

    return (
        <View style={styles.container}>
            <Button text="-" onClick={dec}/>
            <Text>{count}</Text>
            <Button text="+" onClick={inc}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap: 50
    }
})