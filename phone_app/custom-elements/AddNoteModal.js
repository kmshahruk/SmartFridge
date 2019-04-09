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
    
        <ion-content force-overscroll="false">
           <canvas id="canvas"></canvas>
           <ion-textarea rows="25" id="text"></ion-textarea>
            
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
            var text = document.querySelector('#text').value
            var canvas = document.querySelector('#canvas')

            var prev =  document.querySelector('#notesRow').innerHTML

            if (this.canvas) {
                var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

                document.querySelector('#notesRow').innerHTML = `
                <ion-col size="6">
                    <ion-card class="note">
                        <ion-card-header>
                            <ion-card-subtitle>Card Title</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content><img src="` + image +
                        `"/></ion-card-content>
                    </ion-card>
                </ion-col>` + prev
            } else {
                document.querySelector('#notesRow').innerHTML = `
                <ion-col size="6">
                    <ion-card class="note">
                        <ion-card-header>
                            <ion-card-subtitle>Card Title</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>` + text +
                        `</ion-card-content>
                    </ion-card>
                </ion-col>` + prev
            }
            
            await document.querySelector('ion-modal-controller').dismiss();
        });
    }
}