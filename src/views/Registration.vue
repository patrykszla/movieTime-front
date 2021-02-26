<template>
  <div class="registration-page-wrapper">
    <div class="registration-page-input-wrapper">
        <div class="registration-page-logo"></div>
        <p>Zarejestruj się</p>
        <input v-model="registrationInputsValues.Name" type="text" id="Name" class="input" placeholder="Imie"> 
        <input v-model="registrationInputsValues.Surname" type="text" id="Surname" class="input" placeholder="Nazwisko">
        <input v-model="registrationInputsValues.Email" type="email" id="Email" class="input" placeholder="E-mail">  
        
        <input v-model="registrationInputsValues.Login" type="text" id="Login" class="input" placeholder="Login">
        <input v-model="registrationInputsValues.Password" type="text" id="Password" class="input" placeholder="Hasło">
        <input v-model="repeatObj.repeatPassword" type="text" id="registration-repeat-password" class="input" placeholder="Powtórz hasło">
        <input @click="validationInputs" type="submit" id="registration-submit" class="input submit" value="Zarejestruj się">
        
    </div>
  </div>
</template>

<script>
export default {
name: 'Registration',
data() {
    return {
        repeatObj: {
            repeatPassword: null,
        },

        registrationInputsValues: {
                Name: null,
                Surname: null,
                Email: null,
                Login: null,
                Password: null,
                
            },
    }
},
methods: {
   getInputsValues() {
       return this.registrationInputsValues;
   },
    validationInputs() {
        // this.getInputValues();

        
             if(this.registrationInputsValues.Name == null) {
                 alert('Uzupełnij puste pola')
             } else if(this.registrationInputsValues.Surname == null) {
                 alert('Uzupełnij puste pola')
             } else if(this.registrationInputsValues.Email == null) {
                 alert('Uzupełnij puste pola')
             } else if(this.registrationInputsValues.Login == null) {
                 alert('Uzupełnij puste pola')
             } else if(this.registrationInputsValues.Password == null) {
                 alert('Uzupełnij puste pola')
             } else if(this.registrationInputsValues.Password != this.repeatObj.repeatPassword) {
                 alert('Sprawdź czy podane hasła są takie same')
             } else {
                 console.log(this.getInputsValues());
             }
        //  validationInputs() {
        //      for(const [key, value] of Object.entries(this.inputsValues)) {
        //         // console.log(value);

        //         if(value == null ) {
        //             alert('Uzupełnij puste pola')
                    
        //             break
                   
        //         console.log(key)
        //         }
            //  }

        // if(this.registrationInputsValues.Password === this.repeatObj.repeatPassword) {
        //     console.log('takie same')
        // } else { 
        //     console.log(' rozne')
        // }

       
        // if ( this.registrationInputsValues.Password === repeatPassword) {
        //     console.log('rozne')
        // }
    }
    },
     getInputsValues() {
        console.log(this.registrationInputsValues);
    },
}


</script>
<style lang="scss">

.display-none {
    display: none;
}

.registration-page-wrapper {
font-size: 14px;
width: 100%;
height: 100vh;
margin: 0px;
    padding: 0px;
display: flex;
justify-content: center;
align-items: center;
background-size: auto;
background-image: url("../assets/slider-bg.png");
background-repeat: no-repeat;

p {
font-size: 30px;
}
    .registration-page-input-wrapper {
        width    : 32%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin: auto;
        display: inline-block;
        background-color: #FFFFFF;
        padding: 30px;
        .registration-page-logo {
            margin: auto;
            width: 100px;
            height: 57px;
            background-repeat: no-repeat;
            background-size: 100%;
            background-image: url("../assets/movie-logo2.png")
        }
        .input {
            width: 80%;
        }

        .submit {
            width: auto;
        }   
    }
}
</style>