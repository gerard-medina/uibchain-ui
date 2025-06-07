import { defineStore } from 'pinia'

export const useConnectionStore = defineStore('connection', {
  state: () => ({
    nodeUrl: localStorage.getItem('nodeUrl') || null,
    draftUrl: '',
    lastError: null,
  }),
  actions: {
    connect(url) {
      this.nodeUrl = url
      localStorage.setItem('nodeUrl', url)
      this.lastError = null
    },
    disconnect() {
      this.nodeUrl = null
      localStorage.removeItem('nodeUrl')
    },
    setDraftUrl(url) {
      this.draftUrl = url
    },
    setError(error) {
      this.lastError = error
    },
  },
  getters: {
    isConnected: (state) => !!state.nodeUrl,
  },
})
