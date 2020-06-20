window.onload=function(){document.getElementById("loading").style.display="none"}
function showComments() {
	var disqusButton = document.getElementById('disqus-button');
	disqusButton.parentNode.removeChild(disqusButton); 
	var disqusComments = document.getElementById('disqus-comments');
	disqusComments.style.display = 'block'; 
}
