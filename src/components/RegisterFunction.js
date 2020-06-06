import axios from 'axios';

export const getList = () => {
    return axios 
    .get('http://127.0.0.1:8000/api/register', {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
        return res.data
    })
}

export const addItem = formDate => {
    return axios
    .post('http://127.0.0.1:8000/api/register', formDate, { 
        headers: { 'Content-Type': 'application/json' }
    }
    )
    .then(resp => {
        console.log(resp);
    })
}

export const deleteItem = id => {
    axios.delete(`http://127.0.0.1:8000/api/register/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

export const updateItem = (addReg, id) => {
    return axios
    .put(`http://127.0.0.1:8000/api/register/${id}`, {
        body: JSON.stringify(addReg)
    },
    {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}