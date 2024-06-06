(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]'); 

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			swal({
				title: "Caça Palavras",
				text: "Palavra encontrada",
				icon: "success"
			  });
			return indexes[i];
			
		}
		else{
		$search.value = '';
		swal({
			title: "Caça Palavras",
			text: "Palavra não encontrada",
			icon: "error"
		  });
		return false;}
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}
	var letters = [
		['w', 's', 'i', 'b', 'o', 'l', 'a', 'o', 'i', 'v'],
		['a', 'a', 'e', 's', 'p', 'o', 'r', 't', 'e', 'u'],
		['l', 't', 'a', 'n', 'u', 'a', 'n', 'a', 'o', 'i'],
		['l', 'a', 'q', 'u', 'a', 'd', 'r', 'a', 'u', 'b'],
		['y', 'l', 'f', 'n', 'i', 'o', 'j', 'a', 'v', 'r'],
		['m', 'u', 's', 'w', 'e', 'q', 'u', 'i', 'p', 'e']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
		[[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
		[[5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9]],
		[[0, 3], [0, 4], [0, 5], [0, 6]],
        [[3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7]]
	];
	var gameWords = ['wally','esporte', 'equipe', 'bola','quadra' ];
	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);
})	
 ();
 
 