import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCouple, deleteCouple } from "../store/reducer/coupleReducer";
import { selectDragons } from "../store/selectors/index";
import { selectKnights } from "../store/selectors/index";

const CouplePage = () => {
  const [selectedDragonId, setSelectedDragonId] = useState("");
  const [selectedKnightId, setSelectedKnightId] = useState("");

  const dispatch = useDispatch();
  const dragons = useSelector(selectDragons);
  const knights = useSelector(selectKnights);

  const handleDragonChange = (e) => {
    setSelectedDragonId(e.target.value);
  };

  const handleKnightChange = (e) => {
    setSelectedKnightId(e.target.value);
  };

  const handleAddCouple = () => {
    if (!selectedDragonId || !selectedKnightId) return;

    dispatch(
      addCouple({
        dragonId: selectedDragonId,
        knightId: selectedKnightId,
      })
    );
  };

  const handleDeleteCouple = (coupleId) => {
    dispatch(deleteCouple(coupleId));
  };

  return (
    <div>
      <h1>Couple Management Page</h1>
      <div>
        <h2>Add Couple</h2>
        <select onChange={handleDragonChange}>
          <option value="">Select Dragon</option>
          {dragons.map((dragon) => (
            <option key={dragon.id} value={dragon.id}>
              {dragon.name}
            </option>
          ))}
        </select>
        <select onChange={handleKnightChange}>
          <option value="">Select Knight</option>
          {knights.map((knight) => (
            <option key={knight.id} value={knight.id}>
              {knight.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddCouple}>Add Couple</button>
      </div>
      <div>
        <h2>Couples</h2>
        <ul>
          {couples.map((couple) => (
            <li key={couple.id}>
              Dragon: {couple.dragonId}, Knight: {couple.knightId}{" "}
              <button onClick={() => handleDeleteCouple(couple.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CouplePage;
