import { Flex } from "@chakra-ui/react"
import Navbar, { Page } from "./components/Navbar/Navbar"
import Routes from "./Routes"

const pages: Page[] = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/base64",
        title: "Base64"
    },
    {
        path: "/json",
        title: "JSON Formatter"
    },
    {
        path: "/differences",
        title: "Differences"
    },
    {
        path: "/todo",
        title: "Todo list"
    },
]

const App = () => {
    return (
        <Flex h="100vh" flexDirection="column">
            <Navbar pages={pages} />
            <Flex mx={4}>
                <Routes />
            </Flex>
        </Flex>
    )
}

export default App
