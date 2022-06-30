const  checkbox = document.querySelector(`input[type="checkbox"]`);
const  monthly = document.querySelectorAll(".monthly");
const  annually = document.querySelectorAll(".annually");

console.log(annually)
checkbox.addEventListener('change',function(){
    if(this.checked){
        console.log("checked")
        monthly.forEach(function(item){
            item.style.display = 'none'
        })
        annually.forEach(function(item){
            item.style.display = 'inline-block'
        })

    }else{
        console.log("not checked")
        monthly.forEach(function(item){
            item.style.display = 'inline-block'
        })
        annually.forEach(function(item){
            item.style.display = 'none'
        })
    }
})