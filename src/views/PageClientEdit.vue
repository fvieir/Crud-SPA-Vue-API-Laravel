<template>
    <div>
        <h1>Editar User {{this.$route.params.id}}</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <label><b>Nome</b></label>
                    <b-form-input v-model="nome" class="mt-2" placeholder="Enter your name"></b-form-input>
                    <label class="mt-2"> <b>Email</b></label>
                    <b-form-input v-model="email" class="mt-4" placeholder="Enter your e-mail"></b-form-input>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button @click="saveClient()" type="button" class="btn btn-success">Salvar</button>
                        <button @click="deleteClient()" type="button" class="btn btn-danger m-2">Exlcuir</button>
                        <div class="contanier">
                            <div v-if="msg" class="alert alert-primary" role="alert">
                                Usuario exlcuido com sucesso.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nome:'',
                email:'',
                msg: false
            }
        },
        methods:{
            getUser(){
                this.$http.get(`client/${this.$route.params.id}`)
                .then(response => {
                    this.nome = response.data.nome
                    this.email = response.data.email
                    console.log(response)
                }, error =>{
                    console.log(error)
                })
            },
            saveClient(){
               let postData = {
                   id: this.$route.params.id,
                   nome:this.nome,
                   email: this.email
               }
               this.$http.put(`client/${this.$route.params.id}`, postData)
               .then(res => {
                   if(res.data.data === 'success'){
                       this.msg = res.data.data
                       console.log(res.data.data)
                   }
               }, error =>{
                   console.log(error)
               })
            },
            deleteClient(){
                this.$http.delete(`client/${this.$route.params.id}`)
                .then(res =>{
                    if(res.data.data === 'success'){
                        this.msg = true
                        setTimeout(()=>{
                            this.$route.push('/client_list')
                        },5000)
                    }
                    console.log(res)
                }, error =>{
                    console.log(error)
                })
            }
        },
        created () {
            this.getUser()
        }
    }
</script>

<style >

</style>