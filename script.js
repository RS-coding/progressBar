new Vue({
    el:"#app",
    data:{
        width:0,
        apply:true
    },
    methods:{
        startProgress(){
            let value = 0
            const timer = setInterval(()=>{
                value += 5;
                this.width = `${value}%`

                if(value === 100)clearInterval(timer)
            },500)
        }
    }
})