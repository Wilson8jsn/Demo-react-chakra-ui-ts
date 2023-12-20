interface Person {
    name: string;
    theme: {
      backgroundColor: string;
      color: string;
    };
  }
  
  const person: Person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
    },
  };
  
  export default function Todolist() {
    return (
      <div style={{ backgroundColor: person.theme.backgroundColor, color: person.theme.color }}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="Avatar"
          src="https://res.cloudinary.com/dcba9lt2s/image/upload/v1703085055/c2pipy2li1qrbjsbtyqk.png"
          alt="Gregorio Y. Zara"
        />
  
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronauts</li>
          <li>Work on the alcohol-fueled engine</li>
        </ul>
      </div>
    );
  }
  