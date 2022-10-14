import { shallowMount } from '@vue/test-utils'
import SchoolCard from '../../../src/components/SchoolCard.vue'

describe('SchoolCard.vue', () => {

  const school = {
    id: '22c6f75e-43c5-11ed-b878-0242ac120002',
    status: 'active',
    name: 'Daltonbasisschool Den Omgang',
    brin_number: '31JR',
    organization_number: '31JR00',
    city: 'Amsterdam',
    state: 'Noord-Holland'
  }

  it('should mount component', () => {
    const wrapper = shallowMount(SchoolCard, { props: { school } })
    expect(wrapper.findComponent(SchoolCard).exists()).toBe(true)
  })

  it('should mount display a heading', () => {
    const wrapper = shallowMount(SchoolCard, { props: { school } })
    expect(wrapper.find('h4').text()).toBe('Daltonbasisschool Den Omgang')
  })

  it('should mount display a table with 5 rows', () => {
    const wrapper = shallowMount(SchoolCard, { props: { school } })
    expect(wrapper.findAll('tr').length).toBe(5)
  })
})
