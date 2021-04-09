<template lang="pug">
  v-dialog(
    v-model="visible"
    @input="$emit('closeDialog')"
    max-width="480px"
  )
    .info-card
      .title
        slot(name="title")
      .text
        slot(name="text")
      .action-buttons.row.justify-end
        .action-btn.column(
          @click="cancel"
        ) Cancelar

        .action-btn.column(
          style="padding-right: 0px;"
          @click="confirm"
        ) Deletar
</template>

<script>
export default {
  name: 'DialogEditUser',
  data () {
    return {
      visible: false
    }
  },
  props: {
    dialogStatus: { type: Boolean }
  },
  methods: {
    cancel () {
      this.$emit('closeDialog')
    },
    confirm () {
      this.$emit('confirm')
      this.$emit('closeDialog')
    }
  },
  watch: {
    dialogStatus: { immediate: true, handler () { this.visible = this.dialogStatus } }
  }
}
</script>

<style lang="stylus" scoped>
.action-buttons
  padding 0
  margin 20px -10px -15px 0px

</style>
