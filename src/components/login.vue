<template>
  <div class="login">
     <h2 style="position:absolute;left:1220px;top:10px;">
       <router-link :to="{name:'mi'}">关于我们</router-link> </h2> 
       <!-- :to="/path" -->
        <div class="from-wrap">
            <h2>登录</h2>
            
            <Form ref="loginData" :model="loginData" :rules="ruleValidate" :label-width="80">
                <FormItem label="账号" prop="acct">
                    <Input type="text" v-model="loginData.acct" placeholder="请输入账号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon> 
                    </Input>
                </FormItem>
             
                <FormItem label="密码" prop="pass">
                    <Input type="password" v-model="loginData.pass" placeholder="请输入密码">
                     <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem class="form-footer">
                    <Button type="primary" @click="login('loginData')" >Submit</Button>
                </FormItem>

                    <!-- 读取vuex state状态对象里面的数据 -->
                   <!-- <h3>{{$store.state.count}}</h3>  -->
                     <h3>{{count}}</h3> 
                  <!-- 获取vuex状态中的值，计算属性  -->
                    <h3>{{loveyou}}</h3> 
                <Button type="primary" @click="jia" >加一</Button>
                <Button type="primary" @click="jian" >减一</Button>  
            </Form>
            <br/>
        
        </div>
    </div>
</template>

<script>
import home from "@/home/home";
import loginJs from "@/api/login";
import {mapState,mapActions,mapGetters} from "vuex"//引入vuex的Api
export default {
  name: 'login',
  data () {
    return {
     
      loginData:{
        acct:"",
        pass:"",
      }, 
       ruleValidate: {
        acct: [
            { required: true, message: '账号不能为空' },
            { min: 3, max: 16, message: '账号长度3-16个字符' }
        ],
        pass: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
        ]
      },

    };
  
  },
//计算属性
computed:{
    // love(){//vuex 读取计算属性的值 
    //     return this.$store.getters.loveyou     
    // }
    ...mapState(['count']),////相当于直接读取state中的值
    ...mapGetters(['loveyou'])//相当于直接去调用getters中的方法
},
  methods: {
      ...mapActions(['jia','jian']),//相当于直接去调用action中的方法
    //   jia(){
    //       //通知vuex 去增加count，通过 this.$store.dispatch
    //     this.$store.dispatch('jia')//触发store中的actions调用，对应的，方法名和actions中的要对应
    //   },
    //   jian(){
    //        this.$store.dispatch('jian')//触发store中的actions调用
    //   },

    login (loginData) {
      this.$refs[loginData].validate((valid) => {
        if (valid) {
            ///login路径对应nginx的匹配路径，通过nginx进行跳转后台接口，user/1是后台接口路径
         // this.$axios.get("/login/user/1")
            new Promise((resolve, reject) => {
                loginJs.login()
                .then(response => {  
                    window.localStorage.setItem('acct',this.loginData.acct);
                    window.localStorage.setItem('pass',this.loginData.pass);
                    this.$router.push({ path: '/home', query: { username: response.data.name} })
                    this.$Message.warning('登陆成功');   
                    console.log("++++++++++++++++++DDDDDDDDDDDDDDDDDDDDDDDD",response);      
                })
                .catch(error => {
                        this.$Message.warning('登陆失败');
                        reject(error);
                });
            });
                   
        } else {
          this.$Message.error('请输入账号密码!')
        }
      })
    },
  
  },
   mounted (){
     console.log("账号", window.localStorage.getItem('acct'))//永久保存浏览器，除非手动删除 
     console.log("密码", window.localStorage.getItem('pass')) 
    //window.sessionStorage.setItem()//保存会话，关闭浏览器没有了
    //sessionStorage和localStorage只能存json格式字符串，对象需要存储storage的话可以序列化
    //JSON.stringify() JSON.parse()序列化，反序列化
    }   
}
</script>

<style>
html,body {
    width: 100%;
    height: 95%;
    background-color: #1c2438;
}
.login {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
    position: relative;
}
.login .from-wrap{
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -150px;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
}
.login h2 {
    text-align: center;
    margin-bottom: 20px;
}
.login FormItem {
    margin-bottom: 15px;
}
.login .form-footer {
  text-align:right;
}
</style>
