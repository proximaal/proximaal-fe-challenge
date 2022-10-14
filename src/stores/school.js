import { defineStore } from "pinia";
import axios from "axios";

export const useSchoolStore = defineStore("school", {
  state: () => ({
    schools: [],
    activeFilters: {},
    searchString: "",
    singleSelected: null,
  }),
  getters: {
    FILTERED_SCHOOLS() {
      let output = JSON.parse(JSON.stringify(this.schools));

      if (this.singleSelected) {
        return [output.find((school) => school.id === this.singleSelected)];
      }

      output = filter(output, this.activeFilters);
      output = filterOnString(output, this.searchString);

      return output;
    },
    ACTIVE_FILTERS() {
      let counter = 0;
      for (const filter in this.activeFilters) {
        if (this.activeFilters[filter].length) {
          counter = counter + this.activeFilters[filter].length;
        }
      }
      return counter;
    },
  },
  actions: {
    getSchools() {
      return axios
        .get("/data/school.json")
        .then((resp) => {
          this.schools = resp.data;
          return resp.data;
        })
        .catch((error) => {
          throw error;
        });
    },
    selectSingle(id) {
      this.searchString = "";
      this.singleSelected = id;
    },
  },
});

function filter(array, activeFilters) {
  if (Object.keys(activeFilters).length) {
    let filteredSchools = [];
    let activeFiltersCounter = 0;
    for (const filter in activeFilters) {
      let filterableArray = array;

      if (activeFiltersCounter > 0) {
        filterableArray = JSON.parse(JSON.stringify(filteredSchools));
      }

      if (activeFilters[filter].length) {
        activeFiltersCounter =
          activeFiltersCounter + activeFilters[filter].length;

        filteredSchools = [];

        filterableArray.forEach((school) => {
          if (activeFilters[filter].includes(school[filter])) {
            filteredSchools.push(school);
          }
        });
      }
    }
    if (activeFiltersCounter > 0) {
      return filteredSchools;
    }
  }

  return array;
}

function filterOnString(array, needle) {
  if (needle.length > 2 && array.length) {
    const props = Object.keys(array[0]);
    const result = [];

    array.forEach((school) => {
      const matchingProps = [];
      props.forEach((prop) => {
        if (
          school[prop] &&
          school[prop].toString().toLowerCase().includes(needle)
        ) {
          matchingProps.push(prop);
        }
      });
      if (matchingProps.length > 0) {
        result.push({
          ...school,
          matchingProps,
        });
      }
    });

    return result;
  }

  return array;
}
