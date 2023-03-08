module.exports = {
    title: '吴光磊的博客',
    description: '好耶！又活了一天',
    theme: 'reco',

     base: '/blogs/',

    plugins: [
        [
          "sakura",
          {
            num: 20, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
              replace: false, // false 默认图 true 换图 需要填写httpUrl地址
            },
          },
        ],
    ],
    

    locales: {
    "/": {
      lang: "zh-CN",
        },
    },  
    

    themeConfig: {
        author: "Dark Lei",

        logo: "",
        authorAvatar: "",

        type: "blog",
        
        nav: [
            { text: "首页", link: "/" },
            {
                text: "了解更多",
                items: [
                    { text: "掘金", link: "https://juejin.cn/" },
                    { text: "Github", link: "https://github.com/Greatdemonking/blogs" }
                ]
            }
        ],

        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },
    }
}