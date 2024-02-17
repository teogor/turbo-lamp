<template>
  <div>
    <h2>File Explorer</h2>
    <ul v-if="entries.length" class="file-list">
      <li v-for="(entry, index) in entries" :key="index">
        <a v-if="entry.type === 'dir'" :href="`javascript:void(0)`" @click="changeDirectory(entry.name)">{{ entry.name }}</a>
        <span v-else>{{ entry.name }}</span>
      </li>
    </ul>
    <p v-else>No entries found.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [],
      currentPath: '/'
    };
  },
  methods: {
    async fetchDirectoryContent() {
      // Implement your logic to fetch directory content based on your environment
      // Example using Node.js fs module:
      const dir = await fs.promises.readdir(this.currentPath);
      this.entries = dir.map(async name => ({
        name,
        type: await fs.promises.stat(path.join(this.currentPath, name)).then(stat => stat.isDirectory() ? 'dir' : 'file'),
      }));
    },
    changeDirectory(name) {
      this.currentPath = path.join(this.currentPath, name);
      this.fetchDirectoryContent();
    }
  },
  mounted() {
    this.fetchDirectoryContent();
  }
};
</script>

<style scoped>
.file-list {
  list-style: none;
  padding: 0;
}
.file-list li {
  margin-bottom: 5px;
}
</style>
