import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import { registrarUsuario, deletarUsuario } from "../services/usuarios";


const ConexaoRemotaScreen = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registraUsuario = async () => {
        try {
            const resposta = await registrarUsuario(email, senha);
            console.log("Sucessooo na api ", resposta);
            setEmail('');
            setSenha('');
            listarUsuario();
        } catch (erro) {
            console.error("Erro ao chamar a api", erro.response?.data || "Erro ao registrar");
        }
    }

    useEffect(() => {
        listarUsuario();
    }, []);

    const listarUsuario = async() => {
        fetch('http://127.0.0.1:5009/listar_usuarios')
        .then(res => res.json())
        .then(data => {
            console.log("Usuario recebidos: ", data);
            setUsuarios(data);
        })
        .catch(error => console.error("Erro ao buscar usuarios: ", error));
    }

    const deleteUsuario = async (id) => {
        try {
            const resposta = await deletarUsuario(id);
            console.log("Sucesso ao deletar na api", resposta);
            listarUsuario();
        } catch (erro) {
            console.error("Erro ao chamar o endpoint delete", erro.response?.data || "Erro ao deletar");
        }
    }

    return (
        <View style={{ padding: 16 }}>
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                style={{ borderBottomWidth: 1, marginBottom: 10}}
            />

            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                style={{ borderBottomWidth: 1, marginBottom: 10}}
            />

            <Button title="Registrar" onPress={registraUsuario}/>

            <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Lista de Usuarios
            </Text>
            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 15, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
                        <Text style={{ marginBottom: 5}}> { item.id } {item.email} </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10}}>
                            <Button title="Deletar" color="red" onPress={() => deleteUsuario(item.id)}/>
                        </View>
                    </View>
                )}
            />

        </View>  
    );

}

export default ConexaoRemotaScreen;