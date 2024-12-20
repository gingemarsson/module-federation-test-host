import React from "react";
import { App as ClientApp } from 'testremote/App';
import "tailwindcss/tailwind.css";

export const App = () => {
    return <main className="flex min-h-screen flex-col items-center p-8 md:p-16">
        <div className="max-w-7xl w-full">
            <div className="bg-white shadow-md rounded px-6 pt-4 pb-6 mb-4 w-full text-black">Hello, host!</div>
        </div>

        <ClientApp apiUrl='/apiproxy/client_test_remote' />

        <div className="grow" />

        <footer className="text-center text-gray-500 text-sm">
            <p>Client Test Host</p>
        </footer>
        
    </main>
}