import axios from 'axios';

export default {
    getGoogleSearchBooks: (query) => {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query)
    },

    getBooks: () => {
        return axios.get('/api/books');
    },

    searchBooks: (title) => {
        return axios.get('/search' + {title: title});
    },

    addBookToDB: (bookData) => {
        return axios.post('/api/books', bookData);
    }, 

    deleteBook: (id) => {
        return axios.delete('/api/books/' + id);
    }
};