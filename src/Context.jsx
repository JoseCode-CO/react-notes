import React, { useContext } from 'react';

const MiContexto = React.createContext();

const ComponenteHijo = () => {
  const contexto = useContext(MiContexto);
  return <div>Valor del contexto: {contexto}</div>;
};

const App = () => {
  return (
    <MiContexto.Provider value="Hola desde el contexto">
      <ComponenteHijo />
    </MiContexto.Provider>
  );
};
