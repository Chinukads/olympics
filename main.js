var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
    ctx.arc(150, 143, 40, 0, 360 );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=5;
    ctx.arc(250, 143, 40, 0, 360 );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=5;
    ctx.arc(350, 143, 40, 0, 360 );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=5;
    ctx.arc(200, 175, 40, 0, 360 );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=5;
    ctx.arc(300, 175, 40, 0, 360 );
    ctx.stroke();
   
    