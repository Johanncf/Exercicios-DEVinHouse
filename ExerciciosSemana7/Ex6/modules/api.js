const callAPI = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        return data
    } catch {
        console.log('Ops... A requisição falhou!')
    } 
}

export default callAPI;