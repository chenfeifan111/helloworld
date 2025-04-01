<template>
  <div class="hello">
    <h1>hello world</h1>
    <button @click="getTest">getTest</button>
  </div>
</template>

<script setup>
import {postApi} from "@/utils/PostApi";

const getTest=()=>{
  postApi("/post",{name:"zs",age:18}).then(res=>{
    console.log(res.data)
  })
}

</script>

