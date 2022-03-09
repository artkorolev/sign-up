
gsap.to('img.illustr-img', {
    duration: 200,
    repeat: -1,
    rotation: 360
});

function showPass() {
    const pass = document.getElementById('user-pass');
    if (pass.type === 'password') {
        pass.type = 'text';
    } else pass.type ='password';
}