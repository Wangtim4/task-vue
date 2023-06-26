<template>
    <div class="container py-5">
        <h1>404</h1>
        <p>對不起, <code>{{ $route.params.notFound }}</code>此頁面不存在</p>
        <router-link :to="{name:'tasks'}">回首頁</router-link>
    </div>
</template>