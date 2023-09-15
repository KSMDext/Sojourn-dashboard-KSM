import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL, // get this guy out into an environment variable
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTE4Nzg1LCJpYXQiOjE2OTQxMDQzODUsImp0aSI6ImRiYzlmMzRjNjY0NjRjZjJhMTI2NThhMjg1NTcxMTY4IiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.-iiBSlSiaHd_DieLV7LcrawzPEsM9Dj2-q6ux2edYN0'
        // Put the token in the store, and read it from the store 
    },
})
