<template lang="pug">
  v-dialog(
    v-model="dialogStatus"
    max-width="500px"
    persistent
  )
    v-card
      v-card-title
        span.headline
          | {{ getTitle }}
      v-card-text
        v-container
          v-row
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="model.name"
                label="Name"
              )
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="model.lastname"
                label="Lastname"
              )
          v-row
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="model.email"
                label="Email"
              )
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="model.username"
                label="Username"
              )
      v-card-actions
        v-spacer
        
        v-btn(
          color="blue darken-1"
          text
          @click="$emit('closeDialog')"
        ) Cancelar
        
        v-btn(
          color="blue darken-1"
          text
          @click="save"
        ) Salvar
</template>

<script>
import _ from 'lodash'
export default {
  name: 'DialogEditAddUser',
  data () {
    return {
      visible: false,
      model: {},
      method: null
    }
  },
  props: {
    dialogStatus: { type: Boolean },
    item: { type: Object, required: true },
  },
  watch: {
    item: {
      immediate: true,
      handler (value) {
        if (value) this.model = { ...this.item }
      },
      deep: true
    }
  },
  computed: {
    getTitle () {
      return  _.isEmpty(this.item) ? 'Adicionar usuário' : 'Editar usuário'
    }
  },
  methods: {
    save () {
      const method = _.isEmpty(this.item) 
        ? 'add' 
        : 'edit'
        
      this.$emit('save',{ model: this.model, method, })
    }
  },
}
</script>