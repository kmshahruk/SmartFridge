class AddNoteModal extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button class="dismiss" id="back">
                    <ion-icon name="arrow-back"></ion-icon>
                    </ion-button>
                </ion-buttons>
    
                <ion-title>Add Note</ion-title>
    
                <ion-buttons slot="end">
                    <ion-button class="dismiss" id="done">
                    Done
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
    
        <ion-content>
           <canvas id="canvas"></canvas>
           <ion-textarea rows="500" id="text"></ion-textarea>
            
        </ion-content>
        `;

        var canvas = document.querySelector('canvas');
        var input = document.querySelector('ion-textarea')

        if (this.canvas) {
            input.style.display = "none"
            // some hotfixes... ( ≖_≖)
            document.body.style.margin = 0;
            canvas.style.position = 'fixed';
    
            // get canvas 2D context and set him correct size
            var ctx = canvas.getContext('2d');
            resize();
    
            // last known position
            var pos = { x: 0, y: 0 };
    
            window.addEventListener('resize', resize);
            canvas.addEventListener('touchmove', draw);
            canvas.addEventListener('touchstart', setPosition);
    
            // new position from mouse event
            function setPosition(e) {
                pos.x = e.changedTouches[0].pageX;
                pos.y = e.changedTouches[0].pageY;
            }
    
            // resize canvas
            function resize() {
                ctx.canvas.width = window.innerWidth;
                ctx.canvas.height = window.innerHeight;
            }
    
            function draw(e) {
                // mouse left button must be pressed
    
                ctx.beginPath(); // begin
    
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = '#c0392b';
    
                ctx.moveTo(pos.x, pos.y); // from
                setPosition(e);
                ctx.lineTo(pos.x, pos.y); // to
    
                ctx.closePath()
                ctx.stroke(); // draw it!
            }
    
        } else {
            canvas.style.display = "none"
        }
        
        document.querySelector('#back').addEventListener('click', async () => {
            await document.querySelector('ion-modal-controller').dismiss();
        });

        document.querySelector('#done').addEventListener('click', async () => {
            console.log("sa")
            var text = document.querySelector('#text').value
            var canvas = document.querySelector('#canvas')
            var texture = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
            console.log(text)
            console.log(texture)


            
            await document.querySelector('ion-modal-controller').dismiss();
        });
    }
}