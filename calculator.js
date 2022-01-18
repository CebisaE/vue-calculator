const app = Vue.createApp({
    data(){
        return{
            sum:"",
            operators:[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
                "+",
                "-",
                "/",
            ],
        };
    },
    methods :{
        addtosum(operator) {
            this.sum += operator;
        },
        evalsum(){
            this.sum= eval(this.sum);
        },
        clearsum(){
            this.sum="";
        },
    },
});




app.mount("#app");

