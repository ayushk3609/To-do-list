const add = document.getElementById('btn');
var input = document.querySelector('#inp');
const container = document.querySelector('.list_container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }


    createDiv(itemName){
        let box = document.createElement('div');
        box.classList.add('list');

        let inp = document.createElement('input');
        input.type = 'text';
        inp.value = itemName;
        inp.classList.add('input_item');
        inp.disabled = true;

        let edit=document.createElement('button');
        edit.innerHTML = '<i class="far fa-edit"></i>';
        edit.classList.add('edit');

        let del =document.createElement('button');
        del.innerHTML = '<i class="far fa-trash-alt"></i>';
        del.classList.add('delete');

        container.appendChild(box);

        box.appendChild(inp);
        box.appendChild(edit);
        box.appendChild(del);

        edit.addEventListener('click',()=> this.editing(inp));

        del.addEventListener('click',()=> this.deleting(box));
       
    }

    editing(inp){

        inp.disabled = !inp.disabled;
    }

    deleting(box){
        container.removeChild(box);
    }

}

function start(){
    if(input.value != ""){
        new item(input.value);
        input.value='';
    }
}

add.addEventListener('click',start);
window.addEventListener('keydown',(e)=>{
    if(e.which == 13){
        start();
    }
})