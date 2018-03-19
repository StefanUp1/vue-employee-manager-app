<template>
    <div id="editEmpolyee">
        <h3>Edit Empolyee</h3>
        <div class="row">
            <form @submit.prevent="updateData" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>


<script>
import db from './firebaseInit'
    
export default {
    name: 'editEmpolyee',
    data() {
        return {
            employee_id: null,
            name: null,
            dept: null,
            position: null
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.employee_id = doc.data().employee_id
                    this.name = doc.data().name
                    this.dept = doc.data().dept
                    this.position = doc.data().position
                })
            })
        },
        updateData() {
            db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        employee_id: this.employee_id,
                        name: this.name,
                        dept: this.dept,
                        position: this.position
                    })
                    .then(() => {
                        this.$router.push({name: 'view-employee', params: {employee_id: this.employee_id}})
                    })
                })
            })
        }
    }
}
</script>