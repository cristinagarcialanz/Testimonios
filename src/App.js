import Testimonio from "./componentes/Testimonio";
import "./datos.js"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen los egresados del MBA de Negocios:</h1>
        <Testimonio 
        imagen= '3'
        nombre='Dennys García'
        pais='Venezuela'
        cargo='Especialista en Compras'
        empresa='Corpoelec'
        testimonio='Mi responsabilidad principal es diseñar el futuro de estos servicios de acuerdo con las necesidades de los clientes y administrar el crecimiento de los mismos. El corto plazo es manejado por un equipo de ingeniería y soporte con quien constantemente desarrollo mejoras, pero mi principal labor es la estrategia y el diseño del mapa de ruta para el mejoramiento y desarrollo de los servicios a mi cargo”, antes de esta responsabilidad también me desempeñé como líder de proyecto durante una pasantía que realizé mientras cursaba mi maestría en EAFIT School of Business'
        />

      <Testimonio 
        imagen='4'
        nombre='Alejandro Rojas'
        pais='Austria'
        cargo='Consultor de Logística Internacional'
        empresa='Biogenesis Bago'
        testimonio='Me siento muy orgullosa de ser egresada de la maestría en Compras, Logística y Supply Chain Management de EAFIT y me siento muy confiada porque tengo mucho que aportar, me dieron herramientas y elementos muy importantes para la toma de decisiones'
        />

      <Testimonio 
        imagen='1'
        nombre='Cristina Lanz'
        pais='España'
        cargo='Supply Chain and Management'
        empresa='Repsol'
        testimonio='Cuando vas a estudiar una maestría tienes que conocer todos los detalles, es en ese momento cuando uno reafirma su proyecto de vida y me demostró que la exigencia es necesaria, intentar superarse a uno mismo es parte de la vida, en la búsqueda de la excelencia'
        />

        <Testimonio 
        imagen='2'
        nombre='David Rojas'
        pais='EEUU'
        cargo='Purchasing Manager'
        empresa='ExxonMobil'
        testimonio='La carrera aporta un panorama integral de lo que significan las comunicaciones corporativas y las relaciones de negocios, a la vez que permite explorar otras áreas afines'
        />

      </div>
    </div>
  );
}

export default App;
