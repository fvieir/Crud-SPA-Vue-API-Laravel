<template>
    <div>
        <b-button v-b-modal.modal-1>Registrar Cliente</b-button>
        <b-modal ok-disabled id="modal-1" title="Cadastro de Usuario">
            <b-form-input class="mt-2" v-model="nome" placeholder="Enter your name"></b-form-input>
            <b-form-input class="mt-4" v-model="email" placeholder="Enter your e-mail"></b-form-input>
            <div class="row mt-3">
                <div class="col-12">
                    <button @click="addUsuario" type="button" class="btn btn-primary">Salvar</button>
                </div>
            </div>
            
        </b-modal>
    <div class="container mt-3">
        <div class="col md-12">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in usuarios" :key="usuario.id">
                        <th>{{ usuario.id }}</th>
                        <td>{{ usuario.nome }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>
                            <router-link :to="{name: 'client_edit', params: {id: usuario.id} }">
                                <button type="button" class="btn btn-primary">Editar</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                usuarios: [],
                nome:'',
                email:'',
            }
        },
        methods: {
            addUsuario(){
                let postData = {
                    nome: this.nome,
                    email: this.email
                }
                this.$http.post('client',postData)
                .then(response =>{
                    if(response.data){
                        this.getClient()
                        console.log(response.data.data)
                    }
                },error =>{
                    console.log(error)
                })
            },
            getClient(){
                this.$http.get('/client')
                .then(response => {
                     this.usuarios = response.data
                    console.log(response.data)
                }, error =>{
                    console.log(error)
                })
            },
        },
        created() {
            this.getClient()
        }
    }
</script>

<style>

</style>