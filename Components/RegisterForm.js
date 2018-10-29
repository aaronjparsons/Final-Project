import React from "react"
import { TextInput, Text, View, StyleSheet, Dimensions, TouchableOpacity, Picker } from "react-native"
import firebase from '../Firebase.js';
import ScreenHeader from "../Components/ScreenHeader";

usernameRegex = RegExp(/^[A-Za-z]+$/);  
emailRegex = RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);  
phoneRegex = RegExp(/^[2-9]\d{2}-\d{3}-\d{4}$/);

export default class Register extends React.Component {
  constructor(){
    super()
    this.state = {
      first_name:'', last_name:'',
      email:'', phone_number: '',
      license_plate:'', car_size: 'medium',
      password:'',password_conf:'',
      border_color:'gray',user_id:''
    }
    this.registerUser = this.registerUser.bind(this);
    this.getRegisterFormData = this.getRegisterFormData.bind(this);
    this.displayErr = this.displayErr.bind(this);
    this.validateData = this.validateData.bind(this);
    this.showErrorBorder = this.showErrorBorder.bind(this)
  }

  registerUser(){
    self = this;
    console.log("FLAG1 ", this.getRegisterFormData())
    if(this.getRegisterFormData()){
      console.log("FLAG2")
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((userCred)=>{
        console.log("FLAG3")
        console.log("FLAG $ ",userCred.uid )
       let verifiedUser = this.getRegisterFormData();
        verifiedUser.uid = userCred.user.uid;
        
        firebase.database().ref("users").push(verifiedUser);
       this.props.navigation.navigate("Home")
      },(error)=>{
        alert(error.message)
      })
    }
  }

  showErrorBorder(){
    this.setState({border_color:'red'})
  }

  getRegisterFormData(){
    let user = new Object()

    user.first_name = this.validateData(this.state.first_name, 'name') 
      ? this.state.first_name 
      : this.displayErr("First Name");
    user.last_name = this.validateData(this.state.last_name, 'name') ? this.state.last_name : this.displayErr("Last Name");
    user.email = this.validateData(this.state.email, 'email') ? this.state.email : this.displayErr("email");
    user.phone_number = this.validateData(this.state.phone_number,'phone_number') ? this.state.phone_number : this.displayErr("Phone number");
    user.password_digest = this.validateData(this.state.password,'password') ? this.state.password : this.displayErr('Password');
    user.license_plate = this.state.license_plate;
    user.car_size = this.state.car_size;
    for(var prop in user){
      if(!user[prop]){
        return false;
      }
   }
   
    return user;
  }

  displayErr(inputType){
    console.log("Invalid " + inputType);
    return false;
  }

  validateData(input, type){
 
    if(type === 'name') {
      if(!usernameRegex.test(input)) {
        this.showErrorBorder()
        return false;
      }
    } else if (type === 'email') {
      if(!emailRegex.test(input))
        return false;
    } 
    else if (type ==='phone_number'){
      input = input.slice(0,3) + "-" + input.slice(3,6) + "-" + input.slice(6,10);
      if(!phoneRegex.test(input))
        return false;
    }
    else if (type === 'password'){
      if(this.state.password!== this.state.password_conf)
        return false;
    } 
    return true;
  }

  render(){
    return (
      <View style={styles.container}>
      
        <TextInput underlineColorAndroid='transparent' style={[styles.debug, {borderColor : this.state.border_color}]} placeholder="First Name"
        onChangeText = {(first_name)=> {this.setState({first_name})}}/>
        <TextInput underlineColorAndroid='transparent' style={styles.debug} placeholder="Last Name"
        onChangeText = {(last_name)=> {this.setState({last_name})}}/>
        <TextInput underlineColorAndroid='transparent' textContentType={"emailAddress"}style={styles.debug}
        onChangeText = {(email)=> {this.setState({email})}} placeholder="Email" autoCapitalize = "none"/>
        <TextInput underlineColorAndroid='transparent' style={styles.debug} placeholder="Phone number"
        onChangeText = {(phone_number)=> {this.setState({phone_number})}}/>
        <TextInput underlineColorAndroid='transparent' style={styles.debug} placeholder="License Plate #"
        onChangeText = {(phone_number)=> {this.setState({license_plate})}}/>
        <Picker
          selectedValue={this.state.car_size}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => this.setState({car_size: itemValue})}>
          <Picker.Item label="Small" value="small" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Large" value="large" />
        </Picker>
        <TextInput underlineColorAndroid='transparent' secureTextEntry = {true} style={styles.debug}
        onChangeText = {(password)=> {this.setState({password})}} placeholder="Password"/>
        <TextInput underlineColorAndroid='transparent' secureTextEntry = {true} style={styles.debug} 
        onChangeText = {(password_conf)=> {this.setState({password_conf})}} placeholder="Confirm Password"/>

        <TouchableOpacity onPress={this.registerUser}  style={styles.button}>
         <Text>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderWidth:1,
    borderColor: "gray"
  },
  debug : {
    width:Dimensions.get('window').width * 0.8,
    height:40,
    borderWidth:1,
    borderColor: "gray",
    alignSelf:"center",
    borderRadius: 30,
    marginBottom:10,
    paddingLeft: 10,
  }, 
  button: {
    borderRadius:30,
    borderWidth:1,
    borderColor: 'gray',
    width:Dimensions.get('window').width * 0.4,
    height:40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  text : {
    alignSelf: "center"
  },
  picker: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: 'center'
  }

})