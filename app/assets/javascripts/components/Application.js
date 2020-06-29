class Application {
	constructor() {
	}
	// Item 1 .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
    toggleWrappers(element, event, whatToShow){
        event.preventDefault();
        element.css('background-color', "#f2f2f2")
        $('.sidebar-item').not(element).css('background-color', "#ffffff")
        $(whatToShow).show(300);
        $(".box").not(whatToShow).hide(300);
    }
}

// Item 1 ________________________________________________________________________________
//    - Metodo toggleWrappers recebe o click event e o id da div que deve ser exibido, de 
//    acordo com o que foi clicado na sidebar
//    - Todo os outros dividers sao ocultados
//    - Metodo preventDefault evita bugs relacionados ao evento de click do usuario