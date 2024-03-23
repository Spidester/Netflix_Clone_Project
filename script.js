let column=document.getElementsByClassName("faq_question");

for(let i=0; i<column.length; i++){
    column[i].addEventListener("click", function(){
        if(this.childNodes[1].classList.contains("fa-plus")){
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-xmark");
        }
        else{
            this.childNodes[1].classList.remove("fa-xmark");
            this.childNodes[1].classList.add("fa-plus");
        }

        let answer = this.parentNode.nextElementSibling;
        if(answer.style.maxHeight){
            answer.style.maxHeight=null;
        }
        else{
            answer.style.maxHeight=answer.scrollHeight+"px";
        }
    });
}