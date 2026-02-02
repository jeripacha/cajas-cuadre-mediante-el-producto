const productos = [
  { id: "f_buhero", nombre: "Fernet buhero", precio: 350 },
  { id: "f_branca", nombre: "Fernet branca", precio: 400 },
  { id: "h_reserva", nombre: "Havana reserva", precio: 350 },
  { id: "parrales", nombre: "Parrales", precio: 320 },
  { id: "viuda", nombre: "Viuda", precio: 300 },
  { id: "jager", nombre: "Jager", precio: 490 },
  { id: "vodka", nombre: "Vodka", precio: 380 },
  { id: "jw_black", nombre: "JW Black 750ml", precio: 650 },
  { id: "tequila_jc", nombre: "Tequila Jose Cuervo", precio: 450 },
  { id: "g_amaz", nombre: "Gin amazonico", precio: 450 },
  { id: "g_frut", nombre: "Gin frutilla", precio: 450 },
  { id: "g_bosq", nombre: "Gin frutos del bosque", precio: 450 },
  { id: "g_andin", nombre: "Gin andino", precio: 450 },
  { id: "corona", nombre: "Corona", precio: 30 },
  { id: "huari", nombre: "Huari", precio: 30 },
  { id: "coca", nombre: "Cocacola 2L", precio: 30 },
  { id: "sprite", nombre: "Sprite 2L", precio: 30 },
  { id: "pomelo", nombre: "Pomelo", precio: 30 },
  { id: "schwepp", nombre: "Schweppes", precio: 30 },
  { id: "tonica", nombre: "Agua tonica", precio: 15 },
  { id: "agua_gas", nombre: "Agua con gas", precio: 30 },
  { id: "monster", nombre: "Monster", precio: 35 },
  { id: "agua_p", nombre: "Agua pequeña", precio: 15 },
  { id: "agua_2l", nombre: "Agua 2L", precio: 30 },
  { id: "s_aca", nombre: "Sens acai", precio: 30 },
  { id: "s_mara", nombre: "Sens maracuya", precio: 30 },
  { id: "s_ach", nombre: "Sens achachairu", precio: 30 },
  { id: "s_aran", nombre: "Sens arandano", precio: 30 },
  { id: "s_limo", nombre: "Sens limon", precio: 30 },
  { id: "s_cere", nombre: "Sens cereza", precio: 30 },
  { id: "c2_gr", nombre: "2 click grande", precio: 30 },
  { id: "c1_gr", nombre: "1 click grande", precio: 30 },
  { id: "c2_peq", nombre: "2 click pequeño", precio: 25 },
  { id: "c1_peq", nombre: "1 click pequeño", precio: 25 },
  { id: "encend", nombre: "Encendedor", precio: 5 },
  { id: "f_ca5", nombre: "Flor de caña 5", precio: 300 },
  { id: "f_ca7", nombre: "Flor de caña 7", precio: 350 },
  { id: "altosama", nombre: "Altosama", precio: 150 }
];

const ventasDirectas = [
  { id: "v_shots", nombre: "Shots", precio: 30 },
  { id: "v_jagerb", nombre: "Jager Boom", precio: 60 },
  { id: "v_clasicos", nombre: "Clásicos", precio: 35 },
  { id: "v_canelazo", nombre: "Canelazo", precio: 40 },
  { id: "v_marager", nombre: "Maracuyager", precio: 40 },
  { id: "v_pachajito", nombre: "Pachajito", precio: 35 },
  { id: "v_llamita", nombre: "Llamita", precio: 35 },
  { id: "v_mocochinchi", nombre: "Mocochinchi Bom", precio: 25 },
   { id: "v_Ruta", nombre: "Ruta", precio: 150 },
  { id: "v_pachapars", nombre: "pachapars", precio:60 },
  { id: "v_cocarefresco", nombre: "vaso de cocacola", precio: 10 },
    { id: "v_gin_amaz_suelto", nombre: "Gin amaz. suelto", precio: 420 },
  { id: "v_yarda", nombre: "Yarda", precio: 180 }
];

const combos = [
  { id: "c_branca", nombre: "Combo Fernet Branca", base: "f_branca", mix: "coca", precio: 400 },
  { id: "c_buhero", nombre: "Combo Fernet Buhero", base: "f_buhero", mix: "coca", precio: 380 },
  { id: "c_havana", nombre: "Combo Havana Reserva", base: "h_reserva", mix: "coca", precio: 450 },
  { id: "c_parrales", nombre: "Combo Parrales", base: "parrales", mix: "schwepp", precio: 320 },
  { id: "c_viuda", nombre: "Combo Viuda", base: "viuda", mix: "schwepp", precio: 400 },
  { id: "c_vodka", nombre: "Combo Vodka", base: "vodka", mix: "pomelo", precio: 380 },
  { id: "c_jwblack", nombre: "Combo JW Black (+Agua 2L)", base: "jw_black", mix: "agua_2l", cantMix: 1, precio: 750 },
  { id: "c_f5", nombre: "Combo Flor de Caña 5", base: "f_ca5", mix: "coca", precio: 350 },
  { id: "c_f7", nombre: "Combo Flor de Caña 7", base: "f_ca7", mix: "coca", precio: 390 },
  { id: "c_jager", nombre: "Combo Jager (+2 Mon)", base: "jager", mix: "monster", cantMix: 2, precio: 490 },
  { id: "cg_amaz", nombre: "Combo Gin Amazonico", base: "g_amaz", mix: "tonica", cantMix: 2, precio: 450 },
  { id: "cg_frut", nombre: "Combo Gin Frutilla", base: "g_frut", mix: "tonica", cantMix: 2, precio: 450 },
  { id: "cg_bosq", nombre: "Combo Gin F. Bosque", base: "g_bosq", mix: "tonica", cantMix: 2, precio: 450 },
  { id: "cg_andin", nombre: "Combo Gin Andino", base: "g_andin", mix: "tonica", cantMix: 2, precio: 450 }
];
function mostrarNotificacion(mensaje, tipo="ok") {
  const noti = document.getElementById("notificacion");
  if (!noti) return;

  // Cambia el color según el tipo
  if(tipo === "ok") noti.style.backgroundColor = "#4CAF50"; // verde
  else if(tipo === "faltante") noti.style.backgroundColor = "#f44336"; // rojo
  else if(tipo === "sobrante") noti.style.backgroundColor = "#ff9800"; // naranja
  else noti.style.backgroundColor = "#2196F3"; // azul por defecto

  noti.innerText = mensaje;
  noti.style.display = "block";

  // Ocultar después de 4 segundos
  setTimeout(() => {
      noti.style.display = "none";
  }, 4000);
}

function inicializar() {
  const tbodyInv = document.getElementById('tabla-body');
  if(tbodyInv) {
      productos.forEach(p => {
          tbodyInv.innerHTML += `<tr id="row-${p.id}">
              <td class="prod-col">${p.nombre}</td>
              <td><div class="multi-cont">${Array(5).fill(0).map(() => `<input type="number" class="input-entrega" oninput="manejarInput()">`).join('')}</div></td>
              <td class="td-dev"><input type="number" class="input-dev" oninput="manejarInput()"></td>
              <td class="td-uti" id="uti-${p.id}"></td>
          </tr>`;
      });
  }


  const tbodyVentas = document.getElementById('ventas-directas-body');
  if(tbodyVentas) {
      ventasDirectas.forEach(v => {
          tbodyVentas.innerHTML += `<tr>
              <td class="prod-col">${v.nombre}</td>
              <td style="width:50px; background:#f9f9f9;">${v.precio} Bs</td>
              <td><input type="number" class="input-venta" id="vd-${v.id}" oninput="manejarInputDirecta('${v.id}', ${v.precio})"></td>
              <td id="total-${v.id}" style="text-align:center; font-weight:bold;"></td>
          </tr>`;
      });
  }

  const tbodyRes = document.getElementById('resumen-body');
  if(tbodyRes) {
      combos.forEach(c => { 
          tbodyRes.innerHTML += `<tr id="res-${c.id}"><td>${c.nombre}</td><td class="c-cant"></td><td>${c.precio}</td><td class="c-sub"></td></tr>`; 
      });
      const idsBasesCombos = combos.flatMap(c => Array.isArray(c.base) ? c.base : [c.base]);
      productos.forEach(p => { 
          if (!idsBasesCombos.includes(p.id)) {
              tbodyRes.innerHTML += `<tr id="res-s-${p.id}"><td>${p.nombre}</td><td class="c-cant"></td><td>${p.precio}</td><td class="c-sub"></td></tr>`; 
          }
      });
  }

  cargarDatos();
}

function manejarInputDirecta(id, precio) {
  const input = document.getElementById("vd-" + id);
  if(!input) return;

  const cantidad = Number(input.value) || 0;
  const total = cantidad * precio;
  const totalTd = document.getElementById("total-" + id);
  if(totalTd) totalTd.innerText = total ? total + " Bs" : "";

  const venta = ventasDirectas.find(v => v.id === id);
  if (venta && venta.mix) {
      const row = document.getElementById("row-" + venta.mix);
      if(row){
          const inputs = row.querySelectorAll('.input-entrega');
          let actual = Number(inputs[0].value) || 0;
          inputs[0].value = Math.max(0, actual - (cantidad * (venta.cantMix || 1)));
      }
  }
  calcular();
  guardarDatos();
}

function manejarInput() { calcular(); guardarDatos(); }

function calcular() {
  let utiReal = {}; let total = 0;
  productos.forEach(p => {
      const row = document.getElementById("row-" + p.id);
      if(!row) return;
      let ent = 0; row.querySelectorAll('.input-entrega').forEach(i => { if(i.value!="") ent+=Number(i.value); });
      let dev = Number(row.querySelector('.input-dev').value) || 0;
      utiReal[p.id] = Math.max(0, ent - dev);
      const utiTd = document.getElementById("uti-"+p.id);
      if(utiTd) utiTd.innerText = (ent===0 && row.querySelector('.input-dev').value==="") ? "" : utiReal[p.id];
  });

  let copia = {...utiReal};
    // ===============================
    // AJUSTE AUTOMÁTICO GIN AMAZÓNICO SUELTO
    // ===============================
    const ginSueltoInput = document.getElementById("vd-v_gin_amaz_suelto");
    const ginSuelto = Number(ginSueltoInput?.value) || 0;

    if (copia["g_amaz"] !== undefined) {
        copia["g_amaz"] = Math.max(0, copia["g_amaz"] - ginSuelto);
    }


  combos.forEach(c => {
      let n = 0;
      if(Array.isArray(c.base)) { c.base.forEach(b => { n+=copia[b]||0; copia[b]=0; }); }
      else { n=copia[c.base] || 0; copia[c.base]=0; }
      if(n>0){
          let mixUsado = n * (c.cantMix||1);
          if(copia[c.mix] !== undefined) copia[c.mix] = Math.max(0, copia[c.mix] - mixUsado);
      }
      const tr = document.getElementById("res-"+c.id);
      if(tr){
          tr.querySelector('.c-cant').innerText = n||"";
          tr.querySelector('.c-sub').innerText = n?(n*c.precio):"";
      }
      total += (n*c.precio);
  });

  const idsBasesCombos = combos.flatMap(c => Array.isArray(c.base) ? c.base : [c.base]);
  productos.forEach(p => {
      if (!idsBasesCombos.includes(p.id)){
          const tr = document.getElementById("res-s-"+p.id);
          if(!tr) return;
          let s = copia[p.id] || 0;
          tr.querySelector('.c-cant').innerText = s||"";
          tr.querySelector('.c-sub').innerText = s?(s*p.precio):"";
          total += s*p.precio;
      }
  });

  ventasDirectas.forEach(v => {
      const input = document.getElementById("vd-"+v.id);
      if(!input) return;
      let cant = Number(input.value) || 0;
      total += (cant * v.precio);
  });

  const descuentoInput = document.getElementById('descuento');
  const descuento = descuentoInput ? Number(descuentoInput.value) || 0 : 0;
  const totalCaja = Math.max(0, total - descuento);

  const granTotal = document.getElementById('gran-total');
  if(granTotal) granTotal.innerText = totalCaja > 0 ? totalCaja + " " : "";
}

function guardarDatos() {
  const cajeroInput = document.getElementById('cajero');
  const barraInput = document.getElementById('barra');
  const fechaInput = document.getElementById('fecha');
  const descuentoInput = document.getElementById('descuento');
  const plataRealInput = document.getElementById('plata-real');

  const data = {
      header: {
          cajero: cajeroInput?.value || "",
          barra: barraInput?.value || "",
          fecha: fechaInput?.value || ""
      },
      suministros: {},
      ventasDirectas: {},
      caja: {
          descuento: descuentoInput?.value || "",
          plataReal: plataRealInput?.value || ""
      }
  };

  productos.forEach(p => {
      const row = document.getElementById("row-" + p.id);
      if(!row) return;
      data.suministros[p.id] = {
          entregas: Array.from(row.querySelectorAll('.input-entrega')).map(i => i.value),
          devolucion: row.querySelector('.input-dev').value
      };
  });

  ventasDirectas.forEach(v => {
      const input = document.getElementById("vd-"+v.id);
      if(input) data.ventasDirectas[v.id] = input.value;
  });

  localStorage.setItem('pacha_vFinal_Full', JSON.stringify(data));
}

function cargarDatos() {
  const stored = localStorage.getItem('pacha_vFinal_Full');
  if (!stored) return;

  const data = JSON.parse(stored);
  const cajeroInput = document.getElementById('cajero');
  if(cajeroInput) cajeroInput.value = data.header.cajero || "";
  const barraInput = document.getElementById('barra');
  if(barraInput) barraInput.value = data.header.barra || "";
  const fechaInput = document.getElementById('fecha');
  if(fechaInput) fechaInput.value = data.header.fecha || "";

  productos.forEach(p => {
      const row = document.getElementById("row-" + p.id);
      if(!row) return;
      if (data.suministros[p.id]) {
          const inputs = row.querySelectorAll('.input-entrega');
          data.suministros[p.id].entregas.forEach((v, i) => { if(inputs[i]) inputs[i].value = v; });
          const devInput = row.querySelector('.input-dev');
          if(devInput) devInput.value = data.suministros[p.id].devolucion;
      }
  });

  ventasDirectas.forEach(v => {
      const input = document.getElementById("vd-"+v.id);
      if(input && data.ventasDirectas[v.id] !== undefined) {
          input.value = data.ventasDirectas[v.id];

          // 👇 recalcular total visual
          const cantidad = Number(input.value) || 0;
          const totalTd = document.getElementById("total-" + v.id);
          if(totalTd && cantidad > 0) {
              totalTd.innerText = (cantidad * v.precio) + " Bs";
          }
      }
  });


  const descuentoInput = document.getElementById('descuento');
  if(descuentoInput && data.caja.descuento !== undefined)
      descuentoInput.value = data.caja.descuento;

  const plataRealInput = document.getElementById('plata-real');
  if(plataRealInput && data.caja.plataReal !== undefined)
      plataRealInput.value = data.caja.plataReal;

  // ACTUALIZA TOTALES
  calcular();

  // 👇 volver a calcular el estado si hay plata real
  if (plataRealInput && plataRealInput.value !== "") {
      mostrarEstadoCaja();
  }


}
function borrarTodo() {
  // Limpiar todos los inputs
  document.querySelectorAll('input').forEach(input => input.value = '');

  // Limpiar celdas de resultados
  document.querySelectorAll('.td-uti, .c-cant, .c-sub, #gran-total, #estado-caja, [id^="total-"]').forEach(td => td.innerText = '');

  // Limpiar localStorage
  localStorage.removeItem('pacha_vFinal_Full');
}
function descargarPDF() {
  const element = document.getElementById('documento');

  // Tomar valores de los inputs
  const barra = document.getElementById('barra')?.value.trim();
  const fecha = document.getElementById('fecha')?.value.trim();

  // Validar que estén completos
  if (!barra || !fecha) {
      alert("Por favor ingresa los datos de BARRA y FECHA antes de descargar el PDF.");
      return; // detiene la función si faltan datos
  }

  // Limpiar caracteres no válidos
  const limpiar = (txt) =>
      txt
          .replace(/\s+/g, "_")        // espacios → _
          .replace(/[\/\\:*?"<>|]/g, ""); // caracteres inválidos

  // Nombre de archivo: caja_barra_fecha.pdf
  const nombreArchivo = `caja_${limpiar(barra)}_${limpiar(fecha)}.pdf`;

  const opt = {
      margin: 0,
      filename: nombreArchivo,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
          scale: 2,
          scrollY: 0,
          useCORS: true
      },
      jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
      }
  };

  html2pdf().set(opt).from(element).save();
}





// Esta función ahora solo se llama con onchange del input de plata real
function mostrarEstadoCaja() {
  const plataRealInput = document.getElementById('plata-real');
  const granTotal = document.getElementById('gran-total');
  const estado = document.getElementById('estado-caja');
  const cajero = document.getElementById('cajero')?.value || "Cajero";

  if(!plataRealInput || !granTotal || !estado) return;

  const plataReal = Number(plataRealInput.value) || 0;
  const totalCaja = Number(granTotal.innerText) || 0;

  if(plataReal === 0) return;

  if (plataReal === totalCaja) {
      estado.innerHTML = "<span style='color:green'>CUADRA ✔</span>";
      mostrarNotificacion(`¡Felicidades ${cajero}! Cuadraste a la perfección.`, "ok");
  } else {
      const dif = plataReal - totalCaja;
      if(dif > 0){
          estado.innerHTML = "<span style='color:orange'>SOBRANTE  (+" + dif + " Bs)</span>";
          mostrarNotificacion(`No es preocupante ${cajero}, tienes sobrante de ${dif} Bs.`, "sobrante");
      } else {
          estado.innerHTML = "<span style='color:red'>FALTANTE  (" + Math.abs(dif) + " Bs)</span>";
          mostrarNotificacion(`Qué mal ${cajero}, tienes un faltante de ${Math.abs(dif)} Bs.`, "faltante");
      }
  }
}

// Inicializa la tabla
window.onload = inicializar;
