// component/course-list/courseList.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        dataList:[{
            courseName:'高等数学',
            teacher:'王教授',
            class:'17计本9-10班'
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        toCouresInfo(){
            wx.navigateTo({
              url: '/pages/coures-info/couresInfo',
            })
        }
    }
})
