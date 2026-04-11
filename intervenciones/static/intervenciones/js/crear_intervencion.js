  function setTipo(tipo, btn) {
    //Quitar estilo del botón seleccionado
    document.querySelectorAll('.tipo-tab').forEach(t => t.classList.remove('active'));
    //Quitar sección visible
    document.querySelectorAll('.tipo-section').forEach(s => s.classList.remove('visible'));
    //Boton pulsado se resalta 
    btn.classList.add('active');
    //Hace aparecer la sección correspondiente al tipo seleccionado
    document.getElementById(tipo).classList.add('visible');
    //Oculta la ayuda
    document.getElementById('hint-tipo').style.display = 'none';
  }

  function setCombinada(valor) {
    //Antes de mostrar las secciones, oculto todo
    document.getElementById('comb-maritima').style.display = 'none';
    document.getElementById('comb-terrestre').style.display = 'none';
    document.getElementById('comb-psicosocial').style.display = 'none';

    //Dependiendo del valor seleccionado, muestro las secciones correspondientes
    if (valor === 'mar-ter') {
      document.getElementById('comb-maritima').style.display = 'block';
      document.getElementById('comb-terrestre').style.display = 'block';
    } else if (valor === 'mar-psi') {
      document.getElementById('comb-maritima').style.display = 'block';
      document.getElementById('comb-psicosocial').style.display = 'block';
    } else if (valor === 'ter-psi') {
      document.getElementById('comb-terrestre').style.display = 'block';
      document.getElementById('comb-psicosocial').style.display = 'block';
    } else if (valor === 'mar-ter-psi') {
      document.getElementById('comb-maritima').style.display = 'block';
      document.getElementById('comb-terrestre').style.display = 'block';
      document.getElementById('comb-psicosocial').style.display = 'block';
    }
  }