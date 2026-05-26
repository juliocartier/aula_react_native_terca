import axios from 'axios';

const API_URL = 'http://127.0.0.1:5009';

export const registrarUsuario = async(email, password) => {
    try {

        const response = await axios.post(`${API_URL}/criar`, {
            email,
            password
        })

        console.log("Resposta da api", response.data);
        return response.data;

    } catch (erro) {
        console.error("Erro ao registrar", erro.response?.data || erro.message);
        throw erro;
    }
};

export const deletarUsuario = async(id) => {
    try {
        const response = await axios.delete(`${API_URL}/deletar_usuario/${id}`);
        return response.data;
    } catch (erro) {
        console.error("Erro ao deletar", erro);
    }
}