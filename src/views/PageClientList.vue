<template>
    <div>
        <b-button v-b-modal.modal-1>Registrar Cliente</b-button>
        <b-modal ok-disabled id="modal-1" title="Cadastro de Usuario">
            <b-form-input v-model="id" placeholder="Id"></b-form-input>
            {{id}}
             <b-form-input class="mt-2" v-model="nome" placeholder="Enter your name"></b-form-input>
             {{nome}}
             <b-form-input class="mt-4" v-model="email" placeholder="Enter your e-mail"></b-form-input>
             {{email}}

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
                    <tr v-for="usuario in usarios" :key="usuario.id">
                        <th >{{usuario.id}}</th>
                        <td>{{usuario.nome}}</td>
                        <td>{{usuario.email}}</td>
                        <td>
                            <button type="button" class="btn btn-primary">Editar</button>
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
                usarios: [],
                nome:'',
                email:'',
                id: 0
            }
        },
        methods: {
            addUsuario(){
                this.usarios.push({id: this.id, nome: this.nome, email:this.email}) 
                this.nome=''
                this.email=''
            }
        },
        created() {
            let list =[
                { id: 1, nome: 'Dickerson', email: 'Macdonald@gmail.com'},
                { id: 2, nome: 'Larsen', email: 'Shaw@gmail.com' },
                { id: 3, nome: 'Geneva', email: 'Wilson@gmail.com' },
                { id: 4, nome: 'Jami', email: 'Carney@gmail.com' }
            ]
            this.usarios = list
        }
    }
</script>

<style>

</style>