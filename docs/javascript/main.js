const sectOne = document.querySelector('.section_one');
const sectTwo = document.querySelector('.section_two');
const sectThree = document.querySelector('.section_three');
window.addEventListener('load', (e)=>{
	sectOne.scrollIntoView({behavior:'smooth'});
	document.querySelector('#block_one').classList.add('active');
	document.querySelector('.scrolling_block').classList.remove('hide');
	document.querySelector('.slider').style.marginLeft = -(document.querySelector('.range').value*2)+'%';
});
window.addEventListener('DOMContentLoaded', (e)=>{
	document.querySelector('#block_one').addEventListener('click', function(){
		document.querySelector('.scrolling_block').classList.remove('hide');
		scrollTo(sectOne);
	});
	document.querySelector('#block_two').addEventListener('click', function(){
		scrollTo(sectTwo);
	});
	document.querySelector('#block_three').addEventListener('click', function(){
		scrollTo(sectThree);
	});
	document.querySelector('.scroll_block').addEventListener('click', function(){
		scrollTo(sectTwo);
	});
	document.addEventListener('scroll', function(e){
		if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 300) {
			document.querySelector('#block_one').classList.add('active');
			document.querySelector('#block_two').classList.remove('active');
			document.querySelector('#block_three').classList.remove('active');
		} else if(document.documentElement.scrollTop >= 300 && document.documentElement.scrollTop < 1000) {
			document.querySelector('#block_one').classList.remove('active');
			document.querySelector('#block_two').classList.add('active');
			document.querySelector('#block_three').classList.remove('active');
		} else if (document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop <= 1536){
			document.querySelector('#block_one').classList.remove('active');
			document.querySelector('#block_two').classList.remove('active');
			document.querySelector('#block_three').classList.add('active');
		}
		if(document.documentElement.scrollTop <= 10) {
			document.querySelector('.scrolling_block').classList.remove('hide');
			document.querySelector('.scrollanim_effect').classList.remove('hide');
		}
		else if(document.documentElement.scrollTop > 10 && document.documentElement.scrollTop < 250) {
			document.querySelector('.scrolling_block').classList.remove('hide');
			document.querySelector('.scrollanim_effect').classList.add('hide');
		}
		else if(document.documentElement.scrollTop >= 250 && document.documentElement.scrollTop < 1000) {
			document.querySelector('.scrolling_block').classList.add('hide');
		}
		document.querySelector('.range').addEventListener('input', function(e){
			let min = e.target.min, max = e.target.max,	val = this.value;
			this.style.backgroundSize = (val-min)*100 / (max-min) + '% 100%';
			if(val == 0){
				document.querySelector('.range').value = val;
				document.querySelector('.slider').style.marginLeft = -(val*2) + '%';
			}
			else if(val == 50){
				document.querySelector('.range').value = val;
				document.querySelector('.slider').style.marginLeft = -(val*2) + '%';
			}
			else if(val == 100){
				document.querySelector('.range').value = val;
				document.querySelector('.slider').style.marginLeft = -(val*2) + '%';
			}
			document.querySelector('.range').addEventListener('touchend', function(){
				if(val >= 0 && val < 25){
					val = 0;
					document.querySelector('.slider').style.marginLeft = -(val*2) + '%';
					document.querySelector('.range').value = val;
					this.style.backgroundSize = (val-min)*100 / (max-min) + '% 100%';
				}
				else if(val >= 25 && val < 75){
					val = 50;
					document.querySelector('.slider').style.marginLeft = -(val*2) + '%';
					document.querySelector('.range').value = val;
					this.style.backgroundSize = (val-min)*100 / (max-min) + '% 100%';
				}
				else if(val > 50 && val >= 75){
					val = 100;
					document.querySelector('.slider').style.marginLeft = -(val*2) + '%';
					document.querySelector('.range').value = val;
					this.style.backgroundSize = (val-min)*100 / (max-min) + '% 100%';
				}
			});
		});
	});
	function scrollTo(path){
		return path.scrollIntoView({behavior:'smooth'});
	}
});