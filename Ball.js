AFRAME.registerComponent('balls',{
    init:function(){
        this.hitBalls()
    },
    hitBalls:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key==='z'){
                var balls = document.createElement('a-entity')
                balls.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:1,
                })
                balls.setAttribute('material',{
                    src : './assets/images.jpg'
                })
                var cam = document.querySelector('#camera')
                var pos = cam.getAttribute('position')
                var scene = document.querySelector('#scene')

                balls.setAttribute('position',{
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                })

                var camera = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                balls.setAttribute('velocity',direction.multiplyScalar(-10))
                scene.appendChild(balls)
            }
        })
    }
})