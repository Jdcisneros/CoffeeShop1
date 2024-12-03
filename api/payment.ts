import axios from 'axios'

export const  makePaymentRequest = axios.create({
    baseURL: "http://localhost:1337",
    headers: {
        Authorization: "bearer" + "pk_test_51QRlfVABogrp7lDZppnGgqYNR4xafcnjNNJM7vGLYq8EV9GzymivkN9bif3LpDEbYEHaD3LzA8NMmGrzKqQGuLC30050yvd6ES",
        'Content-Type': 'application/json',
    }
})