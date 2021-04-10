import DialogEditAddUser from '../Dialog/DialogEditAddUser.vue'
import DialogDeleteConfirmation from '../Dialog/DialogDeleteConfirmation.vue'
export default {
  name: 'Home',
  components: {
    DialogEditAddUser,
    DialogDeleteConfirmation,
  },
  data () {
    return {
      showDialogAddEditUser: false,
      showDialogDeleteUser: false,
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'center',
          filterable: true,
          value: 'name',
        },
        { 
          text: 'Lastname', 
          align: 'center',
          value: 'lastname',
          filterable: true, 
        },
        { 
          text: 'Email', 
          align: 'center',
          value: 'email',
          filterable: true,
        },
        { 
          text: 'Username', 
          align: 'center',
          value: 'username',
          filterable: true,
        },
        { 
          text: 'Actions', 
          align: 'center',
          value: 'actions', 
          sortable: false 
        },
      ],
      items: [],
      item: {},
    }
  },
  methods: {
    initialize () {
      this.items = [
        {
          id: 1,
          name: 'Regia',
          lastname: 'mikaelle',
          email: 'regia@hotmail.com',
          username: 'mika'
        },
        {
          id: 2,
          name: 'Vitor',
          lastname: 'Vicente',
          email: 'vitor@hotmail.com',
          username: 'loop'
        },
      ]  
    },
    addItem () {
      this.item = {}
      this.showDialogAddEditUser = true
    },
    editItem (item) {
      this.item = item
      this.showDialogAddEditUser = true
    },
    deleteItem (item) {
      this.item = item
      this.showDialogDeleteUser = true
    },
    saveItem (item) {
      if (item.method === 'edit') this.items = this.items.map(it => (it.id === item.model.id) ? item.model : it)
      else this.items.push(item.model)
      this.showDialogAddEditUser = false
    },
    removeItem () {
      const itemIndex = this.items.indexOf(this.item)
      this.items.splice(itemIndex, 1)
    }
  },
  created () {
    this.initialize()
  },
}
