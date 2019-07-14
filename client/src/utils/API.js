import axios from 'axios';

export default {
    getBooks: () => {
        return axios.get('/api/books');
    },

    searchBook: (title) => {
        return axios.get('/api/books/' + { title: title })
    },

    addBookToDB: (bookData) => {
        return axios.post('/api/books', bookData);
    }, 

    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`;
    }
};