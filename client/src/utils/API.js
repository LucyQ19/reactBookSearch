import axios from 'axios';

export default {
    getBooks: () => {
        return axios.get('/api/books');
    },

    searchBooks: (bookTitle) => {
        return axios.post('/search', bookTitle)
    },

    addBookToDB: (bookData) => {
        return axios.post('/api/books', bookData);
    }, 

    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
};