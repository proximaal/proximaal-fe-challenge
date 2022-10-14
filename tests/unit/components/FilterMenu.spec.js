import { shallowMount } from '@vue/test-utils'
import FilterMenu from '../../../src/components/FilterMenu.vue'
import { createTestingPinia } from '@pinia/testing'
import { useSchoolStore } from '../../../src/stores/school'
import mocks from '../../resources/mocks'

describe('FilterMenu.vue', () => {
  let wrapper

  beforeEach(async () => {
    wrapper = shallowMount(FilterMenu, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const store = useSchoolStore()
    store.schools = mocks.schools
  })

  it('should mount component', () => {
    expect(wrapper.findComponent(FilterMenu).exists()).toBe(true)
  })

  it('should filter options for three properties', () => {
    expect(wrapper.vm.propFilterOptions('status')).toStrictEqual(['active', 'pending'])
    expect(wrapper.vm.propFilterOptions('city')).toStrictEqual(['Amsterdam', 'Den Haag', 'Haarlem', 'Rotterdam'])
    expect(wrapper.vm.propFilterOptions('state')).toStrictEqual(['Noord-Holland', 'Zuid-Holland'])
  })

  it('should initiate filters at page load', () => {
    expect(wrapper.vm.filters).toStrictEqual({ status: {}, city: {}, state: {} })

    wrapper.vm.initFilters()

    expect(wrapper.vm.filters).toStrictEqual({
      city: { Amsterdam: false, 'Den Haag': false, Haarlem: false, Rotterdam: false},
      state: { 'Noord-Holland': false, 'Zuid-Holland': false },
      status: { active: false, pending: false},
    })
  })

  it('should set active filters', () => {
    wrapper.vm.initFilters()
    const filters = wrapper.vm.filters
    expect(wrapper.vm.setActiveFilters(filters)).toStrictEqual({ city: [], state: [], status: [] })

    const altFilters = {
      city: { Amsterdam: true, 'Den Haag': false, Haarlem: false, Rotterdam: false},
      state: { 'Noord-Holland': false, 'Zuid-Holland': false },
      status: { active: true, pending: false},
    }
    expect(wrapper.vm.setActiveFilters(altFilters)).toStrictEqual({ city: ['Amsterdam'], state: [], status: ['active'] })
  })
})
