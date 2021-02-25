<template>
    <div class="add-films-main-wrapper">
        <div class="add-films-wrapper">
                <input v-model="addTitle" type="text" id="add-title" class="input" placeholder="Tytuł">
                <input type="text" id="add-year" class="input" placeholder="Rok">   
           
            
            <input type="text" id="add-description" class="input input-description" placeholder="Opis">            
            
            <div class="select-creators-wrapper">
                <select v-model="inputsValues.type" name="types" id="types" class="select">
                    <option value="" disabled selected>Dodaj typ</option>
                    <option v-for="option in options" :key="option">{{ option }}</option>
                </select>
                <input type="text" id="add-creator" class="input" placeholder="Twórcy">
            </div>

              <input type="text" id="add-banner" class="input" placeholder="Dodaj główny banner">
               <input type="text" id="add-thumbnail" class="input" placeholder="Dodaj miniaturkę">
            <p>Selected: {{inputsValues.type}}</p> 
            <p>Title:{{addTitle}}</p>

        </div>
    </div>
</template>

<script>

export default {

    name: 'AddFilm',

    data() {
        return {
            addTitle: "",
            options: [ 'Dramat', 'Thriller', 'Fantasy', 'Komedia' ],
            myplace: {

            },
            inputsValues: {
                type: '',
                addTitle: ' ',
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
     background: red;

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
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            input {
                margin-top: 0
            }

             .select {
            padding: 5px;
            margin-right: auto;
            margin-left: auto;;
            // margin-top: 30px;
            display: inline-block;
            height: 62px;
            color: #444;
            border-radius: 4px;
            line-height: 1.3;
            width: 47%;
            max-width: 100%; /* useful when width is set to anything other than 100% */
            // box-sizing: border-box;
            // margin: 0;
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
       
        
        
    }
}

</style>