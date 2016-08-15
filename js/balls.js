/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-04 16:05:52
 * @version $Id$
 */

function Ball(radius, color) {
                this.x = 0;
                this.y = 0;
                this.vx = 0;
                this.vy = 0;
                if (radius === undefined) {
                    radius = 20
                }
                this.radius = radius;
                if (color === undefined) {
                    color = "#ff0000"
                }
                this.color = color;
                this.mass=1;
                this.scaleX=1;
                this.scaleY=1;
                this.visible=true;
            }

            Ball.prototype.draw = function (context) {
                context.save();
                context.translate(this.x, this.y);
                context.scale(this.scaleX,this.scaleY); 
                context.lineWidth = 2;
                context.strokeStyle = "#000";
                context.fillStyle = this.color;
                context.beginPath();
                context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
                context.closePath();
                context.fill();
                context.stroke();
                context.restore();
            }