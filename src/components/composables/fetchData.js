import { ref } from 'vue'
import axios from 'axios'

export function fetchData(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)
  const allData = ref(null)

  axios.get(url)
    .then((response) => {
      console.log(response.data)
      data.value = response.data
      allData.value = response.data
    })
    .catch((error) => {
      console.log(error)
      error.value = error
    })
    .finally(() => { loading.value = false })
    
  return { data, error, loading, allData }
}
