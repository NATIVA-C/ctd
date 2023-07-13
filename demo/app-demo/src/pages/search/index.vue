<template>
    <div class="search">
        <!-- 顶部搜索栏 -->
        <section class="header">
            <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词">
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </section>
        <!-- 中间内容 -->
        <section class="container">
            <!-- 列表 -->
            <div class="content">
                <ul class="list-wrap">
                    <li class="list-item" v-for="(it,i) in list" :key="i">
                        <dl>
                            <dt class="p-image">
                                <img :src="it.img" alt="" />
                            </dt>
                            <dd class="p-title">
                                <a :href="it.href" v-html="it.title">
                                </a>
                            </dd>
                            <dd class="p-price">{{ it.price }}</dd>
                            <dd class="p-merchant">{{ it.merchant }}</dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <!-- 分页 -->
            <div class="pagination">
                <van-divider class="pagination-line-box" />
                <van-pagination 
                    v-model="currentPage"
                    :total-items="totalNums"
                    :items-per-page="pageSize"
                    @change="paginationChange"
                    force-ellipses
                >
                </van-pagination>
            </div>
        </section>
    </div>
</template>

<script>
import { Search, Pagination, Divider } from 'vant';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
    name: 'search-page',
    props: {},
    components: {
        [Search.name]: Search,
        [Pagination.name]: Pagination,
        [Divider.name]: Divider,
    },
    setup(props) {
        
        // 搜索关键词
        let searchValue = ref('');
        // 信息列表
        let list = ref([]);
        // 当前页数
        let currentPage = ref(1);
        // 总记录数
        let totalNums = ref(10);
        // 每页展示的数量
        let pageSize = ref(20);

        // 分页
        const paginationChange = () => {
            onSearch();
        }

        // 搜索
        const onSearch = () => {
            if(!searchValue.value){
                searchValue.value = 'vue'
            }
            axios.get(`http://localhost:3000/nativaRoute/search/highlight/${searchValue.value}/${currentPage.value}/${pageSize.value}`).then(res => {
                /*
                    list: []
                    pageNo: "1"
                    pageSize: "20"
                    totals: 31
                */
               list.value = res.data.list;
               totalNums.value = res.data.totals;
               console.log(res);
            })
        }

        onMounted(() => {
            onSearch()
        })

        return {
            currentPage,
            totalNums,
            pageSize,
            searchValue,
            list,
            onSearch,
            paginationChange
        }

    }
}
</script>

<style lang="stylus" scoped>
    @import "~./search.styl";
</style>
