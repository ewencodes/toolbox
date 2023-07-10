import { Box, Button, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Text, useDisclosure } from '@chakra-ui/react'
import React, { ChangeEventHandler, useState } from 'react'
import { AddIcon } from '../components/Icons'
import * as todosAtom from '../atoms/todos'
import { useAtom } from 'jotai'

const AddTodoDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useAtom(todosAtom.default)
    const [error, setError] = useState("")

    const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = () => {
        if (title != "") {
            setError("")
            onClose()
            setTodos([...todos, {
                title,
                isCompleted: false
            }])
            setTitle("")
        } else {
            setError("Empty text")
            setTitle("")
        }
    }

    return (
        <>
            <Button ref={btnRef.current} onClick={onOpen}>
                <AddIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef.current}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Add todo</DrawerHeader>

                    <DrawerBody display='flex' flexDirection="column" gap={2}>
                        <Input onChange={handleTitleChange} />
                        <Button onClick={handleSubmit}>
                            Add
                        </Button>
                        {error && <Text color="red">{error}</Text>}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const Todo: React.FC<todosAtom.Todo> = ({ title, isCompleted }) => {
    return (
        <Flex p={4} gap={2} _hover={{ bg: '', borderRadius: "6px" }}>
            <Checkbox isChecked={isCompleted} />
            <Text>
                {title}
            </Text>
        </Flex>
    );
}

const TodoList = () => {
    const [todos, setTodos] = useAtom(todosAtom.default)

    return (
        <Flex w="full" direction='column'>
            {todos.map(todo => <Todo {...todo} />)}

            <AddTodoDrawer />
        </Flex>
    )
}

export default TodoList