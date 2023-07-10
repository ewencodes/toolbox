import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BurgerIcon } from '../Icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export type Page = {
    title: string,
    path: string
}

type NavbarProps = {
    pages: Page[]
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { pathname } = useLocation()
    const btnRef = React.useRef()

    return (
        <Flex alignItems="center" m={4} gap={4}>
            <Button ref={btnRef.current} onClick={onOpen}>
                <BurgerIcon />
            </Button>
            <Text flex={1} fontSize='xl'>
                Toolbox | <strong> {pages.find(page => page.path === pathname)?.title}</strong>
            </Text>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef.current}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Toolbox</DrawerHeader>

                    <DrawerBody display="flex" gap={4} flexDirection="column">
                        {pages.map(page => <Button as={RouterLink} to={page.path} onClick={onClose}>{page.title}</Button>)}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Navbar