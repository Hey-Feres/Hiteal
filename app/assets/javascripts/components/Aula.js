class Aula {
	constructor(gym_id) {
		this.gym_id = gym_id;
	}
    // Item 1 ______________________________________________________
	componentLoaded(){
        $(".sidebar").addClass("animated fadeInDownBig")
        $(".content").addClass("animated fadeInUpBig")
        // .  .  .  .  .  .  .  .  .  .  .  .
        $(".box").not("#wrapperTodos").hide()
        // .  .  .  .  .  .  .  .  .  .  .  .
        $("#loader-more-aulas").hide();
        $("#search-loader").hide();
    }
}