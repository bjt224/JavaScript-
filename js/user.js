/*
 * 用户处理相关操作
 */
var users;
var userLogin;
var flag = false;
/*
 * 登录模块
 */
$(function(res) {
	//获取user.json的用户数据
	$.getJSON('user.json', function(data) {
		users = data;
	});

	/*--------------------------------*/
	//显示验证码
	var code = "";
	for(var i = 0; i < 4; i++) {
		code += Math.floor(Math.random() * 10);
	}
	$("#showCode").text(code);
//	console.log(code)
})

//获取本地存储数据
users = JSON.parse(localStorage.getItem("data"));
//console.log(users);

//登录验证
function Login() {
	var userName = $("#userName").val();
	var userPwd = $("#userPwd").val();

	$.each(users, function(index, value) {
		//console.log(value.userName);
		if(userName == value.userName && userPwd == value.userPwd) {
//			alert("登录成功");
			//跳转页面
			userLogin = value.userName;
			localStorage.setItem("login",userLogin);
//			alert(userLogin);
			console.log(userLogin);
			flag = true;
			window.location.href = "index.html";
		} else {
			$("#fail_msg").html("用户名或密码错误");
//			alert("用户名或密码错误");
		}
	});
}

/*
 * 注册模块
 */
//判断用户名是否合法
function checkUser() {
	var name = document.getElementById("register_name").value;
	var fail_user = document.getElementById("fail_user");
	fail_user.innerHTML = ""; //将默认提示清空

	var reg = /^[a-zA-Z]\w{2,15}$/;
	//判断长度是否合法
	if(!reg.test(name)) {
		fail_user.innerHTML = "用户名不正确";
		return false;
	}

	for(var items in users){
//		console.log(users[items].userName);
		if(name == users[items].userName){
			console.log(users[items].userName);
			fail_user.innerHTML = "该昵称已被他人使用";
			return false;
		}
	}
	return true;
}

//检查密码输入是否合法
function checkPwd(){
	var pwd = document.getElementById("register_pwd").value;
	var pwd_p = document.getElementById("fail_pwd");
	pwd_p.innerHTML = "";
	
	var reg = /^\w{4,10}$/;
	if(!reg.test(pwd)){ 
		pwd_p.innerHTML = "密码长度在4-10之间";
		return false;
	}
	return true;
}

//检查两次密码是否一致
function checkRepwd(){
	var pwd = document.getElementById("register_pwd").value;
	var repwd = document.getElementById("re_pwd").value;
	var repwd_p = document.getElementById("fail_rePwd");
	repwd_p.innerHTML = "";
	
	if(pwd != repwd){
		repwd_p.innerHTML = "两次输入密码不一致!";
		return false;
	}
	return true;
}

//验证邮箱
function checkEmail(){
	var email = document.getElementById("register_email").value;
	var email_p = document.getElementById("fail_email");
	email_p.innerHTML = "";
	
	var reg = /^\w+@\w+\.(com)|(cn)$/;
	if(!reg.test(email)){
		email_p.innerHTML = "邮箱格式错误,例如web@qq.com";
		return false;
	}
	return true;
}

//检查所有注册信息
function checkAll() {

	if(checkUser() == true && checkPwd() == true && checkRepwd() == true && checkEmail() == true) {
		//将新用户保存入数组中
		var newUser = {
			"userName": $("#register_name").val(),
			"userPwd": $("#re_pwd").val(),
			"userSex": "女",
			"userBirthday": "1999-01-01",
			"userImage": "#",
			"userEmail": $("#register_email").val(),
			"userPhone": "13229851543",
			"user_signature": "sad"
		}
		users.push(newUser);
		//储存数据
		localStorage.setItem("data", JSON.stringify(users));
		alert("注册成功!")
		//跳转到主页面
		window.location.href = "login.html";
	}
}

/*
 * 个人信息
 */
$().ready(function(){
	userLogin = localStorage.getItem("login");
	for(var items in users){
		if(userLogin == users[items].userName){
			$("#nick").val(users[items].userName);
			$("#Cusername").val(users[items].userName);
			$("#PuserSex").val(users[items].userSex);
			$("#CuserSex").val(users[items].userSex);
			$("#PuserBirthday").val(users[items].userBirthday);
			$("#CuserBirthday").val(users[items].userBirthday);
			$("#PuserEmail").val(users[items].userEmail);
			$("#CuserEmail").val(users[items].userEmail);
			$("#PuserPhone").val(users[items].userPhone);
			$("#CuserPhone").val(users[items].userPhone);
			$("#aboutme").val(users[items].user_signature);
			$("#Caboutme").val(users[items].user_signature);
		}
	}
})

function showMsg(obj){
	for(var i=1;i<=2;i++){
		if(obj == i){
			document.getElementById("msg" + i).style.display = "block";
		}else{
			document.getElementById("msg" + i).style.display = "none";
		}
	}
}
