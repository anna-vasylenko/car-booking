import Car from "../Car/Car";

const CarsList = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map((item) => (
          <li key={item.id}>
            <Car car={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
