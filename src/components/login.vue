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
            </Form>
            <br/>
         
               
        </div>
    </div>
</template>

<script>
import home from "@/home/home";
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
      }
    }
  },

  methods: {
    login (loginData) {
      this.$refs[loginData].validate((valid) => {
        if (valid) {
            ///login路径对应nginx的匹配路径，通过nginx进行跳转后台接口，user/1是后台接口路径
          this.$axios.get("/login/user/1")
            .then((response) =>{
                 console.log("response",response)
                    window.localStorage.setItem('acct',this.loginData.acct);
                    window.localStorage.setItem('pass',this.loginData.pass);
                    this.$router.push({ path: '/home', query: { username: response.data.name} })
                    this.$Message.warning('登陆成功');  
            }).catch(error => {
              this.$Message.warning('登陆失败');
              reject(error);
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
    height: 240px;
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
