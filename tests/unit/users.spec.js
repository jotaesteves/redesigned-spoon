import { mount } from '@vue/test-utils'
// import Users from '@/views/Users.vue'
import UsersList from '@/components/UsersList.vue'

describe('Users.vue', () => {
  it('renders UserList', () => {
    const wrapper = mount(UsersList)
    expect(wrapper.contains('div')).toBe(true)
  })
})
