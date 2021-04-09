<template lang="pug">
  v-dialog(
    v-model="dialogStatus"
    max-width="500px"
    persistent
  )
    v-card
      v-card-title
        span.headline
          slot(name="title")
      v-card-text
        v-container
          v-row
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="user.name"
                label="Name"
              )
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="user.lastname"
                label="Lastname"
              )
          v-row
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="user.email"
                label="Email"
              )
            v-col(
              cols="12"
              sm="6"
              md="6"
            )
              v-text-field(
                v-model="user.name"
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
export default {
  name: 'DialogEditUser',
  data () {
    return {
      visible: false,
      user: {}
    }
  },
  props: {
    dialogStatus: { type: Boolean }
  },
  methods: {
    save () {

    }
  }
}
</script>