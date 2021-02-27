<template>
    <div class="add-films-main-wrapper">
        <ul id='validationUl'></ul>
        <div class="add-films-wrapper">
             <p v-if="errors.length">
                <b>Uzupełnij brakujące pola:</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>  
            <form @submit.prevent="handleAddFilm">
                <div class="form-wrapper">
                    <div class="row">
                        <input v-model="inputsValues.Title" type="text" id="Title" name="Title" class="input" placeholder="Tytuł">
                        <input v-model="inputsValues.Year" type="text" id="Year" name="Year" class="input" placeholder="Rok">   
                    </div>
           
            
                    <input v-model="inputsValues.Description" type="text" id="Description" name="Description" class="input input-description" placeholder="Opis">            
                    
                    <div class="select-creators-wrapper">
                        <select v-model="inputsValues.Genres" style="color:2c3e50" name="Genres" id="types" class="select">
                            <option style="color:2c3e50" disabled selected>Dodaj typ</option>
                            <option style="color:2c3e50" v-for="option in options" :key="option">{{ option }}</option>
                        </select>
                        <input v-model="inputsValues.Creators" type="text" id="Creators" name="Creators" class="input" placeholder="Twórcy">
                    </div>

                    <div class="row">
                        <input v-model="inputsValues.BigPhoto" type="text" id="BigPhoto" name="BigPhoto" class="input" placeholder="Dodaj główny baner">
                        <input v-model="inputsValues.MainPhoto" type="text" id="MainPhoto" name="MainPhoto" class="input" placeholder="Dodaj miniaturkę">
                    </div>
                    <div class="row">
                        <input type="submit" id="add-submit" class="submit btn" value="Dodaj">
                    </div>
               </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "AddFilm",
  methods: {
    handleAddFilm: function (e) {
        if(this.inputsValues.Title && this.inputsValues.Description && this.inputsValues.Year && this.inputsValues.BigPhoto && this.inputsValues.MainPhoto && this.inputsValues.Genres && this.inputsValues.Creators) {
            return true;
        }

        this.errors = [];
        if (!this.inputsValues.Title) {
            this.errors.push('Tytuł');
        }
        if (!this.inputsValues.Year) {
            this.errors.push('Rok');
        }
        if (!this.inputsValues.Description) {
            this.errors.push('Opis');
        }
        if (!this.inputsValues.Genres || this.inputsValues.Genres === 'Dodaj typ') {
            this.errors.push('Typ');
        }
        if (!this.inputsValues.Creators) {
            this.errors.push('Twórcy');
        }
        if (!this.inputsValues.BigPhoto) {
            this.errors.push('Dodaj baner główny');
        }
        if (!this.inputsValues.MainPhoto) {
            this.errors.push('Dodaj Miniaturkę');
        }

    }
  },

  data() {
    return {
        errors: [],
      addTitle: "",
      options: ["Dramat", "Thriller", "Fantasy", "Komedia"],
      inputsValues: {
        Title: null,
        Description: null,
        Year: null,
        BigPhoto: null,
        MainPhoto: null,
        Creators: null,
        Genres: "Dodaj typ",
      },
    };
  },
};
</script>
<style lang="scss" scoped>

.add-films-main-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;

    .form-wrapper {
        width: 100%;
        display:flex;
        justify-content: center;
        flex-direction: column;

        .row{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width:100%;
            input {
                width: 40%; 
                 margin-right: auto;
                 margin-left: auto;
            }
        }

            .input-description {
        display: block;
         margin-right: auto;
        margin-left: auto;
        height: 150px;
        width: 90%;
        margin-bottom: 30px;
        }

        .select-creators-wrapper {
        font-size: 22px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        input {
            width: 40%;
             margin-right: auto;
        margin-left: auto;
            margin-top: 0;
      }
    
     select {
        font-size: 22px;
        font-weight: normal;
        padding: 10px;
        margin-right: auto;
        margin-left: auto;
        // margin-top: 30px;
        display: inline-block;
        height: 46px;
        color: #444;
        border-radius: 4px;
        line-height: 1.3;
        width: 45%;
        max-width: 100%; /* useful when width is set to anything other than 100% */
        // box-sizing: border-box;
        // margin: 0;
        color: 2c3e50 !important;
        border: 1px solid #707070;
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        appearance: none;
        background-color: #fff;
        background-image: url("../assets/ios-arrow-down.png");
        background-repeat: no-repeat;
        background-position: right 10px top 50%;
      }

      .select:focus {
        border-color: #ffc200;
        outline: none;
      }

       
        
    }
     .submit {
         background-color: #ffc200;
            display: block;
        margin-top: 30px;
        height: 50px;
        width: 110px;
        font-size: 22px;
        color: #444;
        border-radius: 4px;
        border: none;
        transition: 0.3s;
        }

    .submit:hover {
        opacity: 0.7;
    }
    .submit:focus {
        outline: none;
    }
    
}}



// .add-films-main-wrapper {
//   width: 100%;
//   height: 100%;
//   overflow: auto;
// .add-films-wrapper {
// form {
//     .form-wrapper {
//         width: 100%;
//         display:flex;
//         justify-content: center;
//         flex-direction: column;

//         .row {
//             width: 100%;
//             display: flex;
//             flex-direction: row;
//             flex-wrap: wrap;
//         }

        
  
//     .input-description {
//       display: block;
//       height: 150px;
//       width: 100%;
//       margin-bottom: 30px;
//     }

//     .select-creators-wrapper {
//       font-size: 22px;
//       width: 100%;
//       display: flex;
//       flex-direction: row;
//       justify-content: center;
//       input {
//         margin-top: 0;
//       }

//      select {
//         font-size: 22px;
//         font-weight: normal;
//         padding: 10px;
//         margin-right: auto;
//         margin-left: auto;
//         // margin-top: 30px;
//         display: inline-block;
//         height: 46px;
//         color: #444;
//         border-radius: 4px;
//         line-height: 1.3;
//         width: 48%;
//         max-width: 100%; /* useful when width is set to anything other than 100% */
//         // box-sizing: border-box;
//         // margin: 0;
//         color: 2c3e50 !important;
//         border: 1px solid #707070;
//         box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
//         appearance: none;
//         background-color: #fff;
//         background-image: url("../assets/ios-arrow-down.png");
//         background-repeat: no-repeat;
//         background-position: right 10px top 50%;
//       }

//       .select:focus {
//         border-color: #ffc200;
//         outline: none;
//       }
//     }
//    .submit {
//         display: block;
//       margin-top: 30px;
//       height: 50px;
//       width: 200px;
//       font-size: 22px;
//       color: #444;
//     }
//   }
//     }
//   }}

</style>