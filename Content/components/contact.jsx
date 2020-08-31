import React from 'react';

const items = [
    { id: 1, label : 'hello' },
    { id: 2, label : 'test' }
];

export const ContactPage = (props) => {
  return (
    <div>
      <p>Counter : {props.counter}</p>

    <ul>
      {
          items.map(item => (
            <li key={item.id}>{item.label}</li>
          ))
      }
    </ul>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut
        cupiditate suscipit at sequi voluptate officia labore tenetur? Ratione
        consequuntur quisquam quidem laudantium natus nemo consequatur magnam
        quo nam eos?
      </p>
    </div>
  );
};
