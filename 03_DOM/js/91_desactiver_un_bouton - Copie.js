const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

// keydown touche enfoncée - inconvénient si on maintient l'appui ==> pppppppp
// avantage keyup ne mémorise qu'un seul appui ==> p
textarea.addEventListener('keyup', function(event){
//    console.log(event);
        button.disabled = textarea.value.length > 10? true : false ;

});