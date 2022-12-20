const API_URL = 'http://localhost:3030/jsonstore'

export const createTodo = async (todo) => {
    let response = await fetch(`${API_URL}/MOCK_DATA`, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    let result = response.json();

    return result

}
