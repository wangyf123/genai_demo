/**
 * vue打包后保留配置文件
 * 1.配置文件放到static中不用被打包
 * 2.配置文件直接在index.html中引用
 */

const config = {
    name: 'AI赋能课程课件',
    content: {
        genai: {
            name: 'GenAI 工具',
            list: [
                {
                    name: '大语言模型工具',
                    links: [
                        {
                            name: 'Jan',
                            src: 'http://10.25.1.27:3000',
                        },
                        {
                            name: 'ADAS',
                            src: './test.html',
                        },
                    ],
                },
                {
                    name: '生成式人工智能工具',
                    links: [
                        {
                            name: 'Comfy UI',
                            src: 'http://10.84.1.27:8188',
                        },
                    ],
                },
            ],
        },
        aidata: {
            name: 'AI 数据管理',
            list: [
                {
                    name: 'SmartView',
                    src: 'http://10.25.1.241:30080',
                },
            ],
        },
        copyright: '* 由Dell Technologies China COE开发',
    },

}

var funAll = [];


try {
    console.log(window.name)
} catch (e) {
    module.exports = {
        config
    }
}

