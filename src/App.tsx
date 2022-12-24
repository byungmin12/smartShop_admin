import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Search from "./components/Search";
import Table from "./components/Table";
import DataLength from "./components/DataLength";


function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Search/>
                <DataLength />
                <Table />
            </div>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>


    );
}

export default App;
