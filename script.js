 HEAD
            

            function updatePhase(phase) {
                const timeline = document.getElementById('timeline');
                const airplane = document.getElementById('airplane');

                // Remove todas as classes de fase
                for (let i = 0; i < totalPhases; i++) {
                    timeline.classList.remove(`phase-${i}`);
                }

                // Adiciona a classe da fase atual
                timeline.classList.add(`phase-${phase}`);

                // Atualiza janelas
                document.querySelectorAll('.airplane-window').forEach((window, index) => {
                    if (index === phase) {
                        window.classList.add('active');
                    } else {
                        window.classList.remove('active');
                    }
                });

                // Atualiza indicadores de progresso
                document.querySelectorAll('.progress-dot').forEach((dot, index) => {
                    if (index === phase) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });

                // Animações especiais
                if (phase === 1) {
                    airplane.classList.add('takeoff-animation');
                    setTimeout(() => airplane.classList.remove('takeoff-animation'), 2000);
                } else if (phase === 4) {
                    airplane.classList.add('landing-animation');
                    setTimeout(() => airplane.classList.remove('landing-animation'), 2000);
                }

                // Atualiza camadas atmosféricas
                document.querySelectorAll('.atmosphere-layer').forEach((layer, index) => {
                    layer.classList.remove('active');
                });

                if (phase <= 2) {
                    document.getElementById('layer-0').classList.add('active');
                } else if (phase <= 4) {
                    document.getElementById('layer-1').classList.add('active');
                } else {
                    document.getElementById('layer-2').classList.add('active');
                }

                // Atualiza botões de navegação
                document.getElementById('prevBtn').disabled = phase === 0;
                document.getElementById('nextBtn').disabled = phase === totalPhases - 1;
            }

            function nextPhase() {
                if (currentPhase < totalPhases - 1) {
                    currentPhase++;
                    updatePhase(currentPhase);
                }
            }

            function previousPhase() {
                if (currentPhase > 0) {
                    currentPhase--;
                    updatePhase(currentPhase);
                }
            }


            let currentPhase = 0;
            const totalPhases = 6;

            function updatePhase(phase) {
                const timeline = document.getElementById('timeline');
                const airplane = document.getElementById('airplane');

                // Remove todas as classes de fase
                for (let i = 0; i < totalPhases; i++) {
                    timeline.classList.remove(`phase-${i}`);
                }

                // Adiciona a classe da fase atual
                timeline.classList.add(`phase-${phase}`);

                // Atualiza janelas
                document.querySelectorAll('.airplane-window').forEach((window, index) => {
                    if (index === phase) {
                        window.classList.add('active');
                    } else {
                        window.classList.remove('active');
                    }
                });

                // Atualiza indicadores de progresso
                document.querySelectorAll('.progress-dot').forEach((dot, index) => {
                    if (index === phase) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });

                // Animações especiais
                if (phase === 1) {
                    airplane.classList.add('takeoff-animation');
                    setTimeout(() => airplane.classList.remove('takeoff-animation'), 2000);
                } else if (phase === 4) {
                    airplane.classList.add('landing-animation');
                    setTimeout(() => airplane.classList.remove('landing-animation'), 2000);
                }

                // Atualiza camadas atmosféricas
                document.querySelectorAll('.atmosphere-layer').forEach((layer, index) => {
                    layer.classList.remove('active');
                });

                if (phase <= 2) {
                    document.getElementById('layer-0').classList.add('active');
                } else if (phase <= 4) {
                    document.getElementById('layer-1').classList.add('active');
                } else {
                    document.getElementById('layer-2').classList.add('active');
                }

                // Atualiza botões de navegação
                document.getElementById('prevBtn').disabled = phase === 0;
                document.getElementById('nextBtn').disabled = phase === totalPhases - 1;
            }

            function nextPhase() {
                if (currentPhase < totalPhases - 1) {
                    currentPhase++;
                    updatePhase(currentPhase);
                }
            }

            function previousPhase() {
                if (currentPhase > 0) {
                    currentPhase--;
                    updatePhase(currentPhase);
                }
            }

 add8c50efd9414c15285eabe80652613fee48ea2
            