const theme  = window.matchMedia('(prefers-color-scheme: dark)');
if (theme.matches){
document.getElementById('avatar').src="{{ $.Site.Params.header.avatar_dark }}";
console.log("dark");
}else{
document.getElementById('avatar').src="{{ $.Site.Params.header.avatar_light }}";
console.log("light");
}
