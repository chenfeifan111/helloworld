<template>
  <div class="hello">
    <h1>hello world</h1>
    <button @click="Forward">转发</button>
    <hr>
    <input v-model="key" placeholder="key">
    <input v-model="value" placeholder="value">
    <button @click="set">set</button>
    <button @click="get">get</button>
  </div>
</template>

<script setup>
import {postApi} from "@/utils/PostApi";
import {ref} from "vue";


const key=ref("")
const value=ref("")

const Forward = () => {
  postApi("/post", {name: "zs", age: 18}).then(res => {
    console.log(res.data)
  })
}

const set=()=>{
  postApi("/set", {key: key.value, value: value.value}).then(res => {
    console.log(res.data)
  })
}

const get=()=> {
  postApi("/get", {key: key.value}).then(res => {
    console.log(res.data)
  })
}
</script>

