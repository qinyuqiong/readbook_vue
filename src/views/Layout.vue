<template>
    <el-container>
        <el-header>
            <book-header />
        </el-header>
        <el-main>
            <router-view />
        </el-main>
        <el-footer>
            <book-footer/>
        </el-footer>
    </el-container>
</template>

<script>
import BookHeader from '@/components/BookHeader.vue';
import BookFooter from '@/components/BookFooter.vue';

export default {
  name: 'Layout',
  components: {
    BookHeader,
    BookFooter,
  },
};
</script>

<style lang="scss">
header {
    max-width: 100px;
    height:100%;
}

main,
footer {
    margin: auto;
    max-width: 1200px;
}
</style>
