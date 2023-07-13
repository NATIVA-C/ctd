const { client } = require("./client");

// 1. 索引操作 文档操作
const tools = {
    // 创建索引
    async createIndex(){
        const resCreateIndex =  await client.indices.create({
            index:"nativa-pro"
        });
        console.log(resCreateIndex.body);
        // 输出结果如下：
        /*
            {
                acknowledged: true,
                shards_acknowledged: true,
                index: 'nativa-pro'
            }

        */
    },
    // 删除索引
    async deleteIndex(){
        const resDeleteIndex = await client.indices.delete({
            index:'nativa-pro'
        });
        console.log(resDeleteIndex.body);

        // 输出结果如下：
        /*
            { acknowledged: true }
        */
    },
    // 检测 索引是否存在
    async existIndex(){
        const resExistIndex =  await client.indices.exists({
            index:'nativa-pro'
        });
        console.log(resExistIndex.body);
        // 输出结果如下：
        /*
            nativa-pro -> true
            nativa-pro -> false
        */
    },
    // 获取当前索引(所有/指定)的信息
    async getIndexInfo(){
        const resCatIndex =  await client.cat.indices({
            // index: ['nativa-pro']
        });
        console.log(resCatIndex.body);
        // 输出结果如下：
        /*
            green open .kibana_task_mansortr_1   aEeIOtBSQNOUwF1H7zWYXg 1 0  2 0 41.3kb 41.3kb
            green open .apm-sortnt-configuration yWx7l8QQTYunlYmbjingLw 1 0  0 0   283b   283b
            green open koobawww                   xz4b6dxdQ5uszsZF5uIKZA 1 0  7 0 25.1kb 25.1kb
            green open nativa-pro         xCyKd49ATreTzGkkezYmoA 1 0  0 0   283b   283b
            green open .kibana_1                gn6mMV7vT-CvztPxqI3NMw 1 0 17 1 22.7kb 22.7kb
        */
    },
    // 获取插件信息
    async getPluginsInfo(){
        const resPlugins = await client.cat.plugins();
        console.log(resPlugins.body);
        // 输出结果如下：
        /*
            空 没有安装插件 如果有安装插件 这里会显示
        */
    },
    // 文档操作 创建索引结构
    async putMapping(){
        const resPutMapping = await client.indices.putMapping({
            index: 'nativa-pro',
            body: {
                properties: {
                    name: {
                        type: 'text'
                    },
                    project: {
                        type: 'text'
                    },
                    sort: {
                        type: 'long'
                    }
                }
            }
        });
        console.log(resPutMapping.body);
        // 输出结果如下：
        /*
            { acknowledged: true }
        */
    },
    // 文档操作 新增文档数据
    async createDocData(){
        const resIndex = await client.index({
            index: 'nativa-pro',
            body: {
                name: 'koobawww member',
                project: 'nativa项目 project',
                sort: 5
            }
        });
        console.log(resIndex.body);
        // 输出结果如下：
        /*
            {
                _index: 'nativa-pro',
                _type: '_doc',
                _id: 'JI-OU4IBBWV8pDgVxOg3',
                _version: 1,
                result: 'created',
                _shards: { total: 1, successful: 1, failed: 0 },
                _seq_no: 3,
                _primary_term: 1
            }
        */
    },
    // 文档操作 更新/修改文档数据
    async updateDocData(){  
        const resUpdate =  await client.update({
            index:'nativa-pro',
            id: 1,
            body: {
                doc :{
                    name: 'nativa的项目名称',
                    project: 'nativa-project',
                    sort: 6
                }
            }
        });
        console.log(resUpdate.body);
        // 输出结果如下：
        /*
            {
                _index: 'nativa-pro',
                _type: '_doc',
                _id: '1',
                _version: 2,
                result: 'updated',
                _shards: { total: 1, successful: 1, failed: 0 },
                _seq_no: 4,
                _primary_term: 1
            }
        */
    },
    // 文档操作 删除文档数据
    async deleteDocData(){
        const resDelete =  await client.delete({
            index:'nativa-pro',
            id: 1
        });
        console.log(resDelete.body);
        // 输出结果如下：
        /*
            {
                _index: 'nativa-pro',
                _type: '_doc',
                _id: '1',
                _version: 3,
                result: 'deleted',
                _shards: { total: 1, successful: 1, failed: 0 },
                _seq_no: 5,
                _primary_term: 1
            }
        */
    },
    // 文档操作 批量新增/插入文档数据
    async bulkDocData(){
        let bodyContent = [];
        const dataset = [
            // { index: { _index: 'nativa-pro' } }
            { name: 'miaoku1', project:'nativa1', sort: 1 },
            // { index: { _index: 'nativa-pro' } }
            { name: 'miaoku2', project:'nativa2', sort: 2 },
            { name: 'miaoku3', project:'nativa3', sort: 3 },
            { name: 'miaoku4', project:'nativa4', sort: 4 },
            { name: 'miaoku5', project:'nativa5', sort: 5 },
            { name: 'miaoku6', project:'nativa6', sort: 6 },
            { name: 'miaoku7', project:'nativa7', sort: 7 },
            { name: 'miaoku8', project:'nativa8', sort: 8 },
            { name: 'miaoku9', project:'nativa9', sort: 9 },
        ];
        const d = dataset.flatMap(doc => {
            return [{index: { _index: 'nativa-pro'}},doc]
        })
        bodyContent = d;
        // console.log(d);
        /*
            [
                { index: { _index: 'nativa-pro' } },
                { name: 'koobawww1', project: 'nativa1', sort: 1 },
                { index: { _index: 'nativa-pro' } },
                { name: 'koobawww2', project: 'nativa2', sort: 2 },
                { index: { _index: 'nativa-pro' } },
                { name: 'koobawww3', project: 'nativa3', sort: 3 },
                // ...
            ]
        */
        // 执行批量插入数据
        const resBulk = await client.bulk({
            body: bodyContent
        });
        console.log(resBulk.body);
        // 输出结果如下：
        /*
            {
                took: 9,
                errors: false,
                items: [
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] },
                    { index: [Object] }
                ]
            }
        */
    },
    // 文档操作 检测文档是否存在
    async checkDocExists(){
        const resExists =  await client.exists({
            index: 'nativa-pro',
            id: '1'
        });
        console.log(resExists.body);
        // 输出结果如下：
        /*
            true : 存在
            false : 不存在
        */
    },
    // 文档操作 查询单条文档信息
    async searchSingleDocIndo(){
        const resGetSource =  await client.getSource({
            index: 'nativa-pro',
            id: 'JY_SU4IBBWV8pDgVXOjX'
        })
        console.log(resGetSource.body);
        // 输出结果如下：
        /*
            { name: 'koobawww1', project: 'nativa1', sort: 1 }
        */
    },
    // 文档操作 查询多条文档信息
    async searchMoreDocInfo(){
        const resSearch = await client.search({
            index: 'nativa-pro',
            from: 0,
            size: 10
        })
        console.log(resSearch.body);
        // 输出结果如下：
        /*
            {
                took: 18,
                timed_out: false,
                _shards: { total: 1, successful: 1, skipped: 0, failed: 0 },
                hits: {
                    total: { value: 13, relation: 'eq' },
                    max_score: 1,
                    hits: [
                        [Object], [Object],
                        [Object], [Object],
                        [Object], [Object],
                        [Object], [Object],
                        [Object], [Object]
                    ]
                }
            }
        */
    },
    // 文档操作 查询搜索文档信息
    async searchMatchDocInfo(){
        const resMatchSearch  = await client.search({
            index: 'nativa-pro',
            body:{
                // 匹配查询
                query: {
                    match: {
                        project: '酷'
                    }
                },  
                // 升序降序查询
                sort: [
                    {
                        sort: {
                            'order': 'asc'
                        }
                    }
                ],
                // 高亮查询
                highlight:{
                    pre_tags: "<em style='color:red;'>",
                    post_tags: "</em>",
                    fields: {
                        project: {}
                    }
                }
            },
            from: 0,
            size: 10
        })
        console.log(JSON.stringify(resMatchSearch.body))
    }
}

// 执行
function exec(){
    console.log("---------->>>");
    // tools.createIndex();
    tools.existIndex();
    tools.getIndexInfo();
    tools.getPluginsInfo();
    tools.putMapping();
    // tools.createDocData();
    tools.updateDocData();
    tools.bulkDocData();
    tools.searchMatchDocInfo();
    tools.searchMoreDocInfo();
}

module.exports = {exec};