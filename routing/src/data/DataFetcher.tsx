import React, { useEffect, useState } from 'react';

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export const DataFetcher = () => {
    const [data , setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        dataFetcher();
    }, []);

    const dataFetcher = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok){
                throw new Error('Error(');
            }
            const data = await response.json();
            setData(data);
            setLoading(false);
        }catch(error: any){
            setError(error.message);
            setLoading(false);
        }
    }

    return(
        <div>
            {loading ? (
                <p>Loading...</p>
            ): error ? (
                <p>Error: {error}</p>
            ):(
                <ul>
                    {data.map((user) => (
                        <li className='border rounded-lg p-3 my-2' key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                            <p>Company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}