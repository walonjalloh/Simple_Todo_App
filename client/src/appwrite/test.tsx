import { Client, Account } from 'appwrite';

export const client = new Client()

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6716e761000ed6443e3c")


export const account = new Account(client) 

export { ID } from 'appwrite'   