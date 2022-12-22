import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Search from "./components/Search";
import Table from "./components/Table";


function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Search/>
                <Table/>
            </div>
        </QueryClientProvider>


    );
}

export default App;
