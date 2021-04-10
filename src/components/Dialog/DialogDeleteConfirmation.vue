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
        ) Excluir
</template>

<script>
export default {
  name: 'DialogDeleteConfirmation',
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
.info-card
  background white
  border-radius 4px
  padding 30px

  .header
    background #F5F5F5
    color #616161
    border-bottom 1px #EEEEEE solid !important
    border-radius 4px 4px 0 0

    .header-text
      color #616161
      font-size 24px
      font-weight bold
      padding 24px 30px 23px 30px

  .title
    color #616161
    font-size 24px !important
    font-weight bold
    margin-bottom 20px

  .text
    font-size 16px
    color #616161

  .dialog-buttons
    padding 8px

  .action-btn
    padding 0 10px
    margin-top 20px
    color #2B8FBA
    text-align right
    font-size 14px
    font-weight bold
    text-transform uppercase
    cursor pointer

  .custom-line
    border-bottom 1px solid #F5F5F5
    width auto

  // Cor do checkbox e texto do checkbox
  .input-group:not(.input-group--error) label
    font-size 13px !important

</style>