import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Router from './Router'
import "./index.css"

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <Router></Router>
        </ChakraProvider>
    </React.StrictMode>,
)