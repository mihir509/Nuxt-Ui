import { acceptHMRUpdate } from "pinia"
import { defineStore } from "pinia"


export const useFriendStore = defineStore({
    id: "counter",
    state: () => ({
      count: 0
    }),
    actions: {
      increment() {
        this.count++
      },
      dicrement(){
        this.count--
      }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useFriendStore , import.meta.hot))
}