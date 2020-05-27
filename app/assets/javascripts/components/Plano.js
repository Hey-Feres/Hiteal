class Plano {
    constructor(id, nome, email, gym_id) {
        this.id = id;
        this.gym_id = gym_id;
    }
    componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")		
        // .  .  .  .  .  .  .  .  .  .  .  .
		$("#wrapperAdesao").hide()
		$("#wrapperAdicionar").hide()

		$("#wrapperEditarPlano").hide();
    }
    showEditorForm(id){
    	$("#wrapperEditarPlano").show();
    }
    hideEditorForm(){
    	$("#wrapperEditarPlano").hide();	
    }
    toggleWrappers(event, whatToShow){
        event.preventDefault();
        $(whatToShow).show(300);
        $(".divider").not(whatToShow).hide(300);
    }
}