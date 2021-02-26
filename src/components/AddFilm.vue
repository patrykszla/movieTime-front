<template>
    <div class="add-films-main-wrapper">
        <ul id='validationUl'></ul>
        <div class="add-films-wrapper">
                <input v-model="inputsValues.Title" type="text" id="Title" name="Title" class="input" placeholder="Tytuł">
                <input v-model="inputsValues.Year" type="text" id="Year" name="Year" class="input" placeholder="Rok">   
           
            
            <input v-model="inputsValues.Description" type="text" id="Description" name="Description" class="input input-description" placeholder="Opis">            
            
            <div class="select-creators-wrapper">
                <select v-model="inputsValues.Genres" style="color:2c3e50" name="Genres" id="types" class="select">
                    <option style="color:2c3e50" disabled selected>Dodaj typ</option>
                    <option style="color:2c3e50" v-for="option in options" :key="option">{{ option }}</option>
                </select>
                <input v-model="inputsValues.Creators" type="text" id="Creators" name="Creators" class="input" placeholder="Twórcy">
            </div>

              <input v-model="inputsValues.BigPhoto" type="text" id="BigPhoto" name="BigPhoto" class="input" placeholder="Dodaj główny baner">
               <input v-model="inputsValues.MainPhoto" type="text" id="MainPhoto" name="MainPhoto" class="input" placeholder="Dodaj miniaturkę">

               <input type="submit" @click="validationInputs" id="add-submit" class="submit" value="Dodaj">
            
        </div>
    </div>
</template>

<script>

export default {

    name: 'AddFilm',
    methods: {
        validationInputs() {
            //  for(const [key, value] of Object.entries(this.inputsValues)) {
            //     // console.log(value);

            //     if(value == null ) {
            //         alert('Uzupełnij puste pola')
                    
            //         break
                   
            //     console.log(key)
            //     } else {
            //         this.getInputValues();
            //     }               
            // }
            // console.log(Object);

            // for(const key in this.inputsValues){
            //     if(key.value == null) {
            //         // console.log(this.inputsValues.property);
            //         console.log(key.value);
            //     }
            //     console.log(property)
            // }

            if(this.inputsValues.Title == null) {
                alert("UZUPEŁNIJ BRAKUJĄCE POLE TYTUŁ")
            } else if (this.inputsValues.Year == null) {
                alert("UZUPEŁNIJ BRAKUJĄCE POLE ROK")
            } else if (this.inputsValues.Description == null) {
                alert("UZUPEŁNIJ BRAKUJĄCE POLE OPIS")
            } else if (this.inputsValues.Genres == null || this.inputsValues.Genres ==='Dodaj typ' ) {
                alert("UZUPEŁNIJ BRAKUJĄCE POLE TYP")
            } else if (this.inputsValues.Creators == null) {
                alert("Uzupełnij brakujące pole TWÓRCY")
            } else if (this.inputsValues.BigPhoto == null) {
                alert("UZUPEŁNIJ BRAKUJĄCE POLE DODAJ GŁÓNY BANER")
            } else if (this.inputsValues.MainPhoto == null) {
                alert("UZUPEŁNIJ BRAKUJĄCE POLE DODAJ MINIATURKE")
            }
            else {
                this.getInputValues();
            }
        },
        getInputValues(){
           console.log(this.inputsValues)
        }
    },

    data() {
        return {
            addTitle: "",
            options: [ 'Dramat', 'Thriller', 'Fantasy', 'Komedia' ],
            inputsValues: {
                Title: null,
                Description: null,
                Year: null,
                BigPhoto: null,
                MainPhoto: null,
                Creators: null,
                Genres: 'Dodaj typ',
            },
        }
    }
  
    
};
</script>
<style lang="scss" scoped>


.add-films-main-wrapper {
     width: 100%;
     height: 100%;
     overflow: auto;

    .add-films-wrapper {
        width: 100%;
        height: 100%;
        height: auto;
        justify-content: center;
        overflow: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        // flex-basis: auto;

        .input {
            flex-basis: 45%;
        }
        .input-description {
            display: block;
            height: 150px;
            flex-basis: 95%;
            margin-bottom: 30px;
        }
        
        .select-creators-wrapper {
                font-size: 22px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            input {
                margin-top: 0
            }

             .select {
                 
            font-size: 22px;
            font-weight: normal;
            padding: 10px;
            margin-right: auto;
            margin-left: auto;;
            // margin-top: 30px;
            display: inline-block;
            height: 72px;
            color: #444;
            border-radius: 4px;
            line-height: 1.3;
            width: 48%;
            max-width: 100%; /* useful when width is set to anything other than 100% */
            // box-sizing: border-box;
            // margin: 0;
            color: 2c3e50 !important;
            border: 1px solid #707070;
            box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
            appearance: none;
            background-color: #fff;   
            background-image: url('../assets/ios-arrow-down.png');
            background-repeat: no-repeat;
            background-position: right 10px top 50%;
        }

        .select:focus {
            border-color: #FFC200;
            outline: none;
        }
        }
        .submit {
            margin-top: 30px;
            height: 50px;
            width: 200px;
            font-size: 22px;
            color: #444
            
        }
       
      
        
    }
}

</style>