
$(document).ready(function(){
	//votre code
		var phrases = ["Poussé la carcasse à bord, mais tous les vices.", "Reprends les clefs, après le portefeuille de son mari dans le quartier même où l'air ne fonctionnait pas.", "Celle-là n'est qu'ils ont du cachalot et la lanterne commença de descendre.", "Agité par ces pensées, qui appellent ces oeuvres à la foi de ces paysans l'imprégner de son effluve.", "Jusque là vous connaissez que je vous sois rendu plus tôt.", "Commandant, c'est gentil à vous de le remplacer par un substitut très capable, car vous savez que vous êtes allée à la promenade.", "Prendre des leçons de la réalité !", "Goûtez un peu de boulot et elle avait passé une si drôle de se retrouver le soir, après avoir par convenance dansé avec quelque autre et...","Rangez-le dans votre sac à médecine, comme disent les hommes ?", "Seulement, voilà le carnet que lui remettait l'agent chaque jour, les deux frères et de ne suivre, dans quelle direction était ma maison ?", ""]; 

	var i = $('.counter').text();
	$('.cake').click(function(){
		i++
		$('.counter').html(i);
		if((i)%20 == 0){
			alert(phrases[Math.floor(Math.random()*phrases.length)]);
		}
		console.log(i);
	})
});
