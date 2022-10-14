<template>
  <div class="search-bar">
    <q-input filled dense bg-color="white" v-model="search" label="Search">
      <template v-if="search.length > 2" v-slot:append>
        <q-icon name="clear" @click="clearSearch" class="cursor-pointer" />
      </template>
    </q-input>
    <div v-if="showMenu" class="card-container">
      <q-card>
        <q-list style="min-width: 12rem">
          <template v-if="menuContents.length">
            <q-item
              v-for="(item, index) in menuContents"
              :key="index"
              clickable
              v-close-popup
              @click="schoolStore.selectSingle(item.id)"
            >
              <q-item-section>
                <span
                  class="label"
                  v-html="highlight(item?.label, this.search)"
                />
                <span class="name">{{ item?.name }}</span>
              </q-item-section>
            </q-item>
          </template>
          <q-item v-else>
            <q-item-section>No results found</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useSchoolStore } from "stores/school";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },

  computed: {
    showMenu() {
      return this.schoolStore.searchString.length > 2;
    },
    menuContents() {
      if (!this.schoolStore.searchString) return null;
      return this.schoolStore.FILTERED_SCHOOLS.map((school) => {
        return {
          label: school[school.matchingProps[0]],
          name: school.name,
          id: school.id,
        };
      });
    },
  },

  watch: {
    search(newValue) {
      this.schoolStore.searchString = newValue;
    },
  },

  methods: {
    highlight(string, needle) {
      if (!needle) {
        return string;
      }
      if (!string) {
        return "";
      }
      return string.toString().replace(new RegExp(needle, "gi"), (match) => {
        return '<span class="highlighted">' + match + "</span>";
      });
    },
    clearSearch() {
      this.search = "";
      this.schoolStore.singleSelected = null;
    },
  },

  setup() {
    const schoolStore = useSchoolStore();

    return {
      schoolStore,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  display: flex;
  flex-direction: row;
}

.card-container {
  position: absolute;
  z-index: 1;
  top: 3rem;
  color: #333;
}

.label,
.name {
  max-width: 12rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.name {
  color: #ccc;
}

:deep(.highlighted) {
  color: #4287f5;
  font-weight: 700;
}
</style>
